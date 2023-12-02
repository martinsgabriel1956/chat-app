import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex items-center justify-between">
      {children}
    </main>
  )
}