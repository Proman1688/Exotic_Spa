import { NextResponse } from "next/server";

export async function GET() {
  const memberships = [
    { name: "Plan Básico", rol: "$10/mes", email: "Mensual", phone: "Acceso a servicios básicos", state: "Activo" },
    { name: "Plan Premium", rol: "$20/mes", email: "Mensual", phone: "Acceso a servicios premium", state: "Activo" },
    { name: "Plan Gold", rol: "$30/mes", email: "Mensual", phone: "Acceso a todos los servicios", state: "Inactivo" },
    { name: "Plan Familiar", rol: "$25/mes", email: "Mensual", phone: "Acceso a servicios familiares", state: "Activo" },
    { name: "Plan Corporativo", rol: "$50/mes", email: "Mensual", phone: "Acceso a servicios corporativos", state: "Activo" },
    { name: "Plan Estudiante", rol: "$15/mes", email: "Mensual", phone: "Descuentos para estudiantes", state: "Activo" },
    { name: "Plan Senior", rol: "$12/mes", email: "Mensual", phone: "Descuentos para mayores de 60 años", state: "Inactivo" },
  ];

  return NextResponse.json({ results: memberships });
}
