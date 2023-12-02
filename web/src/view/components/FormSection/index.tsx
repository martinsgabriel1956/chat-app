import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { Checkbox } from "@/view/components/ui/Checkbox";
import { Button } from "../ui/Button";

interface FormSectionProps {
  title: string;
  subtitle?: string;
  textButton: string;
  children: ReactNode;
}

export function FormSection({ title, subtitle, children, textButton, }: FormSectionProps) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <section className="flex flex-col items-center justify-center bg-slate-50 w-full h-screen">
      <div className="max-w-md w-full">
        <div className="mb-16">
          <h1 className="text-4xl uppercase">{title}</h1>
          {isLoginPage && <p className="text-sm text-slate-600">{subtitle}</p>}
        </div>

        <form>
          {children}

          {isLoginPage && (
            <div className="flex items-center justify-between mt-6 mb-[2.62rem]">
              <Checkbox
                labelText="Remember me"
                id="remember-me"
                className="rounded"
              />
              <Link
                href={"/forgot-password"}
                className="text-sm text-slate-800 tracking-wide font-medium"
              >
                Forgot password?
              </Link>
            </div>
          )}

          <div className="w-full mb-12">
            <Button
              variant="disabled"
              disabled
            >
              {textButton}
            </Button>
          </div>
        </form>

        {isLoginPage && (
          <Link
            href={"/register"}
            className="flex items-center justify-center gap-1.5 text-xs text-slate-800"
          >
            Don’t have an account?
            <span className="text-indigo-500 font-bold">
              Sign up fo free!
            </span>
          </Link>
        )}
      </div>
    </section>
  )
}