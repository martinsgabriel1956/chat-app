import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { toastVariants } from "@/view/components/ui/Toast/utils/toast-variants"

type ToastElement = React.ElementRef<typeof ToastPrimitives.Root>
type ToastProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
  VariantProps<typeof toastVariants>

const Toast = React.forwardRef<
  ToastElement,
  ToastProps
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})

Toast.displayName = ToastPrimitives.Root.displayName

export { Toast };