import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "@/shared/lib/utils";

type ToastTitleElement = React.ElementRef<typeof ToastPrimitives.Title>
type ToastTitleProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>

const ToastTitle = React.forwardRef<
  ToastTitleElement,
  ToastTitleProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))

ToastTitle.displayName = ToastPrimitives.Title.displayName

export { ToastTitle };