// app/api/cita/por-terapeuta/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const idUsuario = searchParams.get('idUsuario');

  if (!idUsuario) {
    return NextResponse.json({ error: 'Falta el id del terapeuta' }, { status: 400 });
  }

  try {
    const citas = await prisma.cita.findMany({
      where: {
        IdTerapeuta: parseInt(idUsuario)
      },
      select: {
        Id: true,
        Descripcion: true,
        Duracion: true,
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
        }
      },
      orderBy: {
        Fecha: 'desc'
      }
    });

    const citasFormateadas = citas.map(cita => ({
      IdCita: cita.Id,
      Descripcion: cita.Descripcion,
      Duracion: cita.Duracion,
      Estado: cita.Estado,
      Fecha: cita.Fecha,
      Hora: cita.Hora.toISOString().substring(11, 16),
      NombreCliente: cita.cliente?.usuario?.Nombre || 'Desconocido'
    }));

    return NextResponse.json({ citas: citasFormateadas });
  } catch (error) {
    console.error('Error al obtener citas del terapeuta:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
