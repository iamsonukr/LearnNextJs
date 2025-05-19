"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      ...form,
    });

    if (!res.error) router.push("/employees");
    else alert("Invalid credentials");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        placeholder="Username"
        className="border p-1 block"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        className="border p-1 block"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-1">Login</button>
    </form>
  );
}
