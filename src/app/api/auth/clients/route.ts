// api/auth/clients/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const clients = [
    { name: "Juan Perez", email: "juanPerez@gmail.com", phone: "1234567890", date: "2023-05-01", appointment: 5, membership: "Premium" },
    { name: "Maria Lopez", email: "mariaLopez@gmail.com", phone: "0987654321", date: "2023-06-08", appointment: 8, membership: "Basic" },
    { name: "Carlos Sánchez", email: "carlosSanchez@gmail.com", phone: "1122334455", date: "2023-07-15", appointment: 3, membership: "Gold" },
    { name: "Ana Torres", email: "anaTorres@gmail.com", phone: "2233445566", date: "2023-08-20", appointment: 6, membership: "Premium" },
    { name: "Luis Gómez", email: "luisGomez@gmail.com", phone: "3344556677", date: "2023-09-10", appointment: 2, membership: "Basic" },
    { name: "Sofía Martínez", email: "sofiaMartinez@gmail.com", phone: "4455667788", date: "2023-10-05", appointment: 7, membership: "Gold" },
    { name: "Pedro Ramírez", email: "pedroRamirez@gmail.com", phone: "5566778899", date: "2023-11-12", appointment: 4, membership: "Premium" }
  ];

  return NextResponse.json({ results: clients });
}
