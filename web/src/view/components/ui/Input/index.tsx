import * as React from "react"
import { cn } from "@/shared/lib/utils"
import { ShowPasswordButton } from "../ShowPasswordButton";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, labelText, ...props }, ref) => {
    const isPasswordType = type === "password";
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const whenShowPassword = () => {
      if (isPasswordType) {
        return showPassword ? "text" : "password";
      }
      return type;
    };

    return (
      <div className="flex flex-col gap-2">
        {labelText && (
          <label
            htmlFor={props.id}
            className="text-slate-800 font-medium text-sm"
          >
            {labelText}
          </label>
        )}
        <div className="relative">
          <input
            type={whenShowPassword()}
            className={cn(
              "flex  h-10 w-full rounded-xl border border-slate-400 bg-transparent px-6 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-gray-800 text-gray-800",
              className
            )}
            ref={ref}
            {...props}
          />

          {isPasswordType && (
            <ShowPasswordButton
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
        </div>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
