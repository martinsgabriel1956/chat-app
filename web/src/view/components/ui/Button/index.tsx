import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from "@/shared/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const buttonVariants = cva(
  "text-white font-medium rounded-xl text-sm w-full py-3.5 transition-colors",
  {
    variants: {
      variant: {
        default: "bg-indigo-500 text-white hover:bg-indigo-600",
        disabled: "bg-gray-400 text-white",
      }
    }
  }
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ asChild, variant, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, }))}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  )
})

Button.displayName = "Button"

export { Button };