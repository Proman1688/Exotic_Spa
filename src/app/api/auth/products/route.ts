import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { name: "Facial Hidratante", sku: "F001", category: "Faciales", proveedor: "Proveedor A", stock: 50, price: 20, sel: 30, min: 10 },
    { name: "Masaje Relajante", sku: "M001", category: "Masajes", proveedor: "Proveedor B", stock: 30, price: 25, sel: 40, min: 5 },
    { name: "Depilación Cera", sku: "D001", category: "Depilación", proveedor: "Proveedor C", stock: 20, price: 15, sel: 25, min: 3 },
    { name: "Tratamiento Corporal", sku: "T001", category: "Corporales", proveedor: "Proveedor D", stock: 15, price: 30, sel: 50, min: 2 },
    { name: "Facial Anti-edad", sku: "F002", category: "Faciales", proveedor: "Proveedor A", stock: 40, price: 22, sel: 35, min: 8 },
    { name: "Masaje Aromaterapia", sku: "M002", category: "Masajes", proveedor: "Proveedor B", stock: 25, price: 28, sel: 45, min: 4 }
  ];

  return NextResponse.json({ results: products });
}