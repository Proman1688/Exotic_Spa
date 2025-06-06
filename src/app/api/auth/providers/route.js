import { NextResponse } from "next/server";

export async function GET() {
  const providers = [
    { name: "Proveedor A", contact: "Juan Perez", phone: "123456789", email: "proveedorA@gmail.com", products: "Faciales, Corporales" },
    { name: "Proveedor B", contact: "Maria Gomez", phone: "987654321", email: "proveedorB@gmail.com", products: "Masajes, Aromaterapia" },
    { name: "Proveedor C", contact: "Carlos Ruiz", phone: "555123456", email: "proveedorC@gmail.com", products: "Depilación, Faciales" },
    { name: "Proveedor D", contact: "Ana Torres", phone: "444987654", email: "proveedorD@gmail.com", products: "Corporales, Tratamientos Especiales" },
    { name: "Proveedor E", contact: "Luis Martínez", phone: "321654987", email: "proveedorE@gmail.com", products: "Masajes, Corporales" },
    { name: "Proveedor F", contact: "Sofía López", phone: "789456123", email: "proveedorF@gmail.com", products: "Faciales, Depilación" },
    { name: "Proveedor G", contact: "Pedro Sánchez", phone: "654321987", email: "proveedorG@gmail.com", products: "Tratamientos Especiales, Masajes" },
    { name: "Proveedor H", contact: "Lucía Fernández", phone: "123789456", email: "proveedorH@gmail.com", products: "Corporales, Faciales" },
    { name: "Proveedor I", contact: "Miguel Castro", phone: "987123654", email: "proveedorI@gmail.com", products: "Depilación, Masajes" },
    { name: "Proveedor J", contact: "Elena Ramírez", phone: "456789123", email: "proveedorJ@gmail.com", products: "Faciales, Tratamientos Especiales" }
  ];

  return NextResponse.json({ results: providers });
}
