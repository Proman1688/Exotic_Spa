// app/api/auth/citas-cliente/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const idUsuario = parseInt(searchParams.get('idUsuario') || '');

  if (isNaN(idUsuario)) {
    return NextResponse.json({ error: 'IdUsuario inválido' }, { status: 400 });
  }

  try {
    const citas = await prisma.cita.findMany({
      where: {
        IdCliente: idUsuario
      },
      select: {
        Id: true,
        Descripcion: true,
        Duracion: true,
        Recordatorio: true,
        Estado: true,
        Fecha: true,
        Hora: true, 
        cliente: {
          select: {
            usuario: {
              select: {
                Nombre: true
              }
            }
          }
        },
        terapeuta: {
          select: {
            usuario: {
              select: {
                Nombre: true
              }
            }
          }
        }
      }
    });

    const citasFormateadas = citas.map(cita => ({
      id: cita.Id,
      Descripcion: cita.Descripcion,
      Duracion: cita.Duracion,
      Recordatorio: cita.Recordatorio,
      Estado: cita.Estado,
      Fecha: cita.Fecha,
      Hora: cita.Hora.toISOString().substring(11, 16), 
      NombreCliente: cita.cliente.usuario.Nombre,
      NombreTerapeuta: cita.terapeuta.usuario.Nombre
    }));

    return NextResponse.json({ citas: citasFormateadas });
  } catch (error) {
    console.error('Error al obtener citas del cliente:', error);
    return NextResponse.json({ error: 'Error al obtener citas' }, { status: 500 });
  }
}


export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { idCita, idUsuario, nuevaHora } = body;

    if (!idCita || !idUsuario || !nuevaHora) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
    }

    // Verifica que la cita pertenece al usuario
    const cita = await prisma.cita.findUnique({
      where: { Id: idCita },
      select: { IdCliente: true }
    });

    if (!cita || cita.IdCliente !== idUsuario) {
      return NextResponse.json({ error: 'No autorizado para modificar esta cita' }, { status: 403 });
    }

    // Actualiza la hora
    const citaActualizada = await prisma.cita.update({
      where: { Id: idCita },
      data: {
        Hora: new Date(`1970-01-01T${nuevaHora}:00Z`) // Ajusta al formato de tu base de datos si es tipo TIME
      }
    });

    return NextResponse.json({ cita: citaActualizada });
  } catch (error) {
    console.error('Error al cambiar la hora de la cita:', error);
    return NextResponse.json({ error: 'Error al actualizar la hora' }, { status: 500 });
  }
}