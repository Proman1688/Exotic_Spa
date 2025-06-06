import { NextResponse } from "next/server";

export async function GET() {
  const colleagues = [
    { name: "Juan Perez", rol: "Gerente", email: "juanp@gmail.com", phone: "1234567890", state: "Activo" },
    { name: "Maria Gomez", rol: "Recepcionista", email: "mariag@gmail.com", phone: "0987654321", state: "Activo" },
    { name: "Carlos Ruiz", rol: "Terapeuta", email: "carlosr@gmail.com", phone: "1122334455", state: "Inactivo" },
    { name: "Ana Torres", rol: "Gerente", email: "anatorres@gmail.com", phone: "2233445566", state: "Activo" },
    { name: "Luis Fernandez", rol: "Recepcionista", email: "luisf@gmail.com", phone: "3344556677", state: "Activo" },
    { name: "Sofia Martinez", rol: "Terapeuta", email: "sofiam@gmail.com", phone: "4455667788", state: "Activo" },
    { name: "Pedro Sanchez", rol: "Gerente", email: "pedros@gmail.com", phone: "5566778899", state: "Inactivo" },
    { name: "Lucia Castro", rol: "Recepcionista", email: "luciac@gmail.com", phone: "6677889900", state: "Activo" },
    { name: "Miguel Lopez", rol: "Terapeuta", email: "miguell@gmail.com", phone: "7788990011", state: "Activo" },
    { name: "Valeria Diaz", rol: "Recepcionista", email: "valeriad@gmail.com", phone: "8899001122", state: "Inactivo" }
  ];

  return NextResponse.json({ results: colleagues });
}