import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "@phosphor-icons/react";
import { cn } from "@/shared/lib/utils";

type ToastCloseElement = React.ElementRef<typeof ToastPrimitives.Close>
type ToastCloseProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>

const ToastClose = React.forwardRef<
  ToastCloseElement,
  ToastCloseProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))

ToastClose.displayName = ToastPrimitives.Close.displayName

export { ToastClose };