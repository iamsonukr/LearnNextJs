import { NextResponse } from "next/server";
import { employees } from "../../../lib/data.js";

export async function GET(req, { params }) {
  const emp = employees.find(e => e.id == params.id);
  if (!emp) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json(emp);
}

export async function PUT(req, { params }) {
  const index = employees.findIndex(e => e.id == params.id);
  if (index === -1) return NextResponse.json({ message: "Not found" }, { status: 404 });

  const updates = await req.json();
  employees[index] = { ...employees[index], ...updates };
  return NextResponse.json(employees[index]);
}

export async function DELETE(req, { params }) {
  const index = employees.findIndex(e => e.id == params.id);
  if (index === -1) return NextResponse.json({ message: "Not found" }, { status: 404 });

  const removed = employees.splice(index, 1);
  return NextResponse.json(removed[0]);
}
