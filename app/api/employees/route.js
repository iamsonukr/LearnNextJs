import { NextResponse } from "next/server";
import { employees } from "../../lib/data.js";

export async function GET() {
    try {
        return NextResponse.json(employees);
    } catch (error) {
        console.log(error)

    }
}

export async function POST(req) {
  const body = await req.json();
  const newEmployee = {
    id: Date.now(),
    ...body,
  };
  employees.push(newEmployee);
  return NextResponse.json(newEmployee, { status: 201 });
}
