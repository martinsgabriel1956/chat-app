import { ReactNode } from "react";
import Head from "next/head";

interface AuthLayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export const AuthLayout = ({ children, pageTitle }: AuthLayoutProps) => {
  return (
    <>
      <Head>
        <title>Chat App: {pageTitle}</title>
      </Head>
      <main className="flex items-center justify-between">
        {children}
      </main>
    </>
  )
}