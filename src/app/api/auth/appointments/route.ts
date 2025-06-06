// app/api/auth/appointments/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const rows = [
    { date: "09:00", client: "Elena V.", service: "Masaje", collaborator: "Carlos R.", state: "Programada", actions: "Ver Detalles" },
    { date: "10:30", client: "Carlos R.", service: "Facial", collaborator: "Laura M.", state: "Programada", actions: "Ver Detalles" },
    { date: "14:00", client: "Laura M.", service: "Manicura", collaborator: "Ana G.", state: "Programada", actions: "Ver Detalles" },
    { date: "15:00", client: "Ana G.", service: "Depilación", collaborator: "Elena V.", state: "Programada", actions: "Ver Detalles" },
    { date: "16:00", client: "Juan P.", service: "Pedicura", collaborator: "Carlos R.", state: "Programada", actions: "Ver Detalles" },
    { date: "17:30", client: "Maria S.", service: "Masaje", collaborator: "Laura M.", state: "Programada", actions: "Ver Detalles" },
    { date: "18:00", client: "Pedro L.", service: "Facial", collaborator: "Ana G.", state: "Programada", actions: "Ver Detalles" },
  ];

  return NextResponse.json({ results: rows });
}
