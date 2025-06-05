import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Asegúrate de tener esta ruta configurada
import { z } from 'zod';

export async function GET() {
  try {
    const terapeutas = await prisma.terapeuta.findMany({
      include: {
        usuario: {
          select: {
            Id: true,
            Nombre: true,
            Email: true,
            Celular: true
          }
        }
      }
    });

    // Opcional: puedes mapear para devolver solo los datos relevantes
    const terapeutasFormateados = terapeutas.map(t => ({
      IdUsuario: t.IdUsuario,
      Nombre: t.usuario.Nombre,
      Email: t.usuario.Email,
      Celular: t.usuario.Celular
    }));

    return NextResponse.json({ terapeutas: terapeutasFormateados });
  } catch (error) {
    console.error('Error al obtener terapeutas:', error);
    return NextResponse.json({ error: 'Error al obtener terapeutas' }, { status: 500 });
  }
}