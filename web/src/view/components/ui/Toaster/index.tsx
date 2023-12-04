import { ToastProvider } from "./utils/toast-provider";
import { ToastViewport } from "./ToastViewport";
import { ReactNode } from "react";
import { Toast } from "./Toast";
import { ToastTitle } from "./ToastTitle";
import { ToastDescription } from "./ToastDescription";
import { ToastClose } from "./ToastClose";
import { useToast } from "@/shared/hooks/useToast";

export function Toaster() {
  const { toasts } = useToast();
  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, ...props }) => (
        <Toast
          key={id}
          {...props}
        >
          <div className="grid gap-1">
            <ToastTitle>{title}</ToastTitle>
            <ToastDescription>{description}</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}