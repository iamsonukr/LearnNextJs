// app/providers.tsx
'use client';

import { SessionProvider } from "next-auth/react";
import { EmployeeProvider } from "./context/EmployeeContext";

export function Providers({ children }) {
  return (
    <SessionProvider>
      <EmployeeProvider>
        {children}
      </EmployeeProvider>
    </SessionProvider>
  );
}
