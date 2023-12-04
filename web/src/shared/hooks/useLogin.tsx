import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "../utils/login-form-data";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/authService";
import { useAuth } from "./useAuth";
import { useRouter } from "next/router";

export function UseLogin() {
  const { register, handleSubmit: hookFormSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const { mutateAsync: handleLoginMutate } = useMutation({
    mutationKey: ["signin"],
    mutationFn: handleLoginUser,
  })

  function handleLoginUser(data: LoginFormData) {
    return AuthService.signIn(data);
  }

  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await handleLoginMutate(data);
      signIn(accessToken);
      router.push("/")
    } catch (error) {
      console.log({ error });
    }
  })

  return { handleSubmit, register, errors }
}