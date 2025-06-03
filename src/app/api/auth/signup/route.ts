import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { nombre, email, password } = await req.json();

    if (!nombre || !email || !password) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const userExists = await prisma.usuario.findFirst({ where: { Email: email } });

    if (userExists) {
      return NextResponse.json({ error: 'El usuario ya existe' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.usuario.create({
      data: {
        Nombre: nombre,
        Email: email,
        Contrase_a: hashedPassword,
        FechaRegistro: new Date(),
        EstadoSesion: false,
      },
    });

    if (!newUser) {
      return NextResponse.json({ error: 'Error al crear el usuario' }, { status: 500 });
    }

    await prisma.cliente.create({
    data: {
        IdUsuario: newUser.Id,
        Historial: '',
        IdMembresia: null,     // o un ID por defecto si quieres
        IdTerapeuta: null,     // o asignar alguno si aplica
    },
    });


    return NextResponse.json({ message: 'Usuario registrado correctamente', userId: newUser.Id }, { status: 201 });
  } catch (error) {
    console.error('Error en registro:', error);
    return NextResponse.json({ error: 'Error al registrar usuario' }, { status: 500 });
  }
}
