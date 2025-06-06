import { NextResponse } from "next/server";

export async function GET() {
  const service = [
    { name: "Facial Hidratante", category: "Faciales", time: 60, Price: "$50", state: "Activo" },
    { name: "Masaje Relajante", category: "Masajes", time: 90, Price: "$70", state: "Activo" },
    { name: "Depilación Cera", category: "Depilación", time: 30, Price: "$30", state: "Activo" },
    { name: "Tratamiento Antiedad", category: "Tratamientos Especiales", time: 120, Price: "$100", state: "Activo" },
    { name: "Facial Purificante", category: "Faciales", time: 60, Price: "$55", state: "Activo" },
    { name: "Masaje Aromaterapia", category: "Masajes", time: 90, Price: "$75", state: "Activo" },
    { name: "Depilación Laser", category: "Depilación", time: 45, Price: "$80", state: "Activo" },
    { name: "Tratamiento Rejuvenecedor", category: "Tratamientos Especiales", time: 150, Price: "$120", state: "Activo" }
  ];

  return NextResponse.json({ results: service });
}