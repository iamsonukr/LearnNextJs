import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation"; // ✅ Correct for server component redirection
import EmployeesPageClient from "../components/EmployeePageClient";

export default async function EmployeesPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // ✅ Server-side redirect
  }

  return <EmployeesPageClient />;
}
