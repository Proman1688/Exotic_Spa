// app/api/cita/cancelar-por-cliente/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { idCita, idUsuario } = body;

    if (!idCita || !idUsuario) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
    }

    // Verifica que la cita pertenece al usuario
    const cita = await prisma.cita.findUnique({
      where: { Id: idCita },
      select: { IdCliente: true, Estado: true }
    });

    if (!cita) {
      return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
    }

    if (cita.IdCliente !== idUsuario) {
      return NextResponse.json({ error: 'No autorizado para cancelar esta cita' }, { status: 403 });
    }

    if (cita.Estado === 'Cancelada por cliente') {
      return NextResponse.json({ message: 'La cita ya está cancelada por el cliente' });
    }

    const citaActualizada = await prisma.cita.update({
      where: { Id: idCita },
      data: {
        Estado: 'Cancelada'
      }
    });

    return NextResponse.json({ cita: citaActualizada });
  } catch (error) {
    console.error('Error al cancelar la cita:', error);
    return NextResponse.json({ error: 'Error al cancelar la cita' }, { status: 500 });
  }
}
