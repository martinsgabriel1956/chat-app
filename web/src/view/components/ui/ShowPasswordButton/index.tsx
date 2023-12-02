import { useState } from "react";
import { Eye, EyeSlash } from '@phosphor-icons/react';

interface ShowPasswordButtonProps {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ShowPasswordButton({ setShowPassword, showPassword }: ShowPasswordButtonProps) {

  function handleTogglePasswordVisibility() {
    setShowPassword(prevState => !prevState);
  }

  return (
    <button
      className="absolute right-6 top-1/2 -translate-y-1/2 "
      type="button"
      onClick={handleTogglePasswordVisibility}
    >
      {showPassword ?
        <EyeSlash
          size={20}
          className="text-slate-800"
        />
        :
        <Eye
          size={20}
          className="text-slate-800"
        />
      }
    </button>

  )
}