import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "@/shared/lib/utils";

type ToastViewportElement = React.ElementRef<typeof ToastPrimitives.Viewport>;
type ToastViewportProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>;

const ToastViewport = React.forwardRef<
  ToastViewportElement,
  ToastViewportProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))

ToastViewport.displayName = ToastPrimitives.Viewport.displayName

export { ToastViewport };