import { UseMutateFunction } from "@tanstack/react-query";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";

interface AuthContextProps {
  handleRegisterUser: UseMutateFunction<unknown, Error, FieldValues, unknown>;
  handleLogin: UseMutateFunction<unknown, Error, FieldValues, unknown>;
}

export const AuthContext = createContext({} as AuthContextProps);
