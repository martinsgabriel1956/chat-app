import { ReactNode } from "react";
import { AuthContext } from "../contexts/auth-context";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { httpClient } from "../services/http-client";
import { redirect } from "next/navigation";

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { mutateAsync: handleRegisterUserMutate, isSuccess: isSuccessRegisterUser } = useMutation({
    mutationFn: handleRegisterUser,

  })

  const { mutateAsync: handleLoginMutate } = useMutation({
    mutationFn: handleLogin
  })

  async function handleRegisterUser(data: FieldValues) {
    try {
      await httpClient.post('/auth/signup', data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function handleLogin(data: FieldValues) {
    try {
      await httpClient.post('/auth/signIn', data);
      redirect('/');
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        handleRegisterUser: handleRegisterUserMutate,
        handleLogin: handleLoginMutate
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}