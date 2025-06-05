import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Asegúrate de tener esta ruta configurada
import { z } from 'zod';

// Validación con Zod
const appointmentSchema = z.object({
  servicio: z.string(),
  terapeuta: z.string().optional(),
  fecha: z.string(), // formato ISO
  hora: z.string(), // formato HH:mm
  notas: z.string().optional(),
  idCliente: z.number()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = appointmentSchema.parse(body);

    const fechaCompleta = new Date(`${data.fecha}T${data.hora}:00`);

    const idTerapeuta = data.terapeuta ? Number(data.terapeuta) : 1;

    const recordatorio = new Date(fechaCompleta);
    recordatorio.setDate(recordatorio.getDate() - 2);

    const producto = await prisma.producto.findUnique({
        where: { Id: Number(data.servicio) },
        select: { Nombre: true }
    });

    // ...existing code...
    const nuevaCita = await prisma.cita.create({
      data: {
        Descripcion: producto.Nombre,
        Duracion: 60,
        Estado: 'Pendiente',
        Fecha: fechaCompleta,
        Hora: fechaCompleta, // Usamos la misma fechaCompleta para la columna Hora (solo se usará la parte de la hora)
        Recordatorio: recordatorio,
        cliente: { connect: { IdUsuario: data.idCliente } },
        terapeuta: { connect: { IdUsuario: idTerapeuta } }
      }
    });
// ...existing code...

    return NextResponse.json({ ok: true, cita: nuevaCita });
  } catch (error) {
    console.error('Error al agendar cita:', error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const idCliente = Number(searchParams.get('idCliente'));
    if (!idCliente) {
      return NextResponse.json({ error: 'idCliente requerido' }, { status: 400 });
    }

    const citas = await prisma.cita.findMany({
      where: { IdCliente: idCliente },
      orderBy: { Fecha: 'asc' },
      include: {
        terapeuta: {
          include: {
            usuario: {
              select: { Nombre: true }
            }
          }
        },
      }
    });

    // Formatea la respuesta para el frontend
    const citasFormateadas = citas.map(cita => ({
        id: cita.Id,
        fecha: cita.Fecha,
        horaInicio: cita.Hora
            ? new Date(cita.Hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : '',
        servicio: cita.Descripcion,
        terapeuta: cita.terapeuta?.usuario?.Nombre || 'Sin asignar'
    }));

    return NextResponse.json({ citas: citasFormateadas });
  } catch (error) {
    console.error('Error al obtener citas:', error);
    return NextResponse.json({ error: 'Error al obtener citas' }, { status: 500 });
  }
}

