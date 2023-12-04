import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cn } from "@/shared/lib/utils";
type ToastDescriptionElement = React.ElementRef<typeof ToastPrimitives.Description>
type ToastDescriptionProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>

const ToastDescription = React.forwardRef<
  ToastDescriptionElement,
  ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))

ToastDescription.displayName = ToastPrimitives.Description.displayName

export { ToastDescription };