// app/api/productos/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tipo = searchParams.get('tipo') ?? 'producto'; // valor por defecto

  try {
    const productos = await prisma.producto.findMany({
      where: { Tipo: tipo },
      select: {
        Id: true,
        Nombre: true,
        Precio: true,
        Descripcion: true
      }
    });

    return NextResponse.json({ productos });
  } catch (error) {
    console.error(`Error al obtener productos de tipo ${tipo}:`, error);
    return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 });
  }
}
