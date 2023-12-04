import { ToastProps } from "@/view/components/ui/Toaster/Toast"
import { useState } from "react"

interface ToasterProps extends ToastProps {
  id: string
  title: string
  description?: string
}

export function useToast() {
  const [toasts, setToasts] = useState<ToasterProps[]>([])

  function toast({ id, title, description, variant = "default" }: ToasterProps) {
    setToasts(prev => [...prev, { id, title, description, variant }])
  }

  function removeToast(id: string) {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  function clearToasts() {
    setToasts([])
  }

  return {
    toast,
    removeToast,
    clearToasts,
    toasts
  }
}
