import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { RegisterFormData, registerSchema } from "@/shared/utils/register-form-data";
import { AuthService } from "@/shared/services/authService";
import { useAuth } from "./useAuth";
import { useToast } from "./useToast";


export function UseRegister() {
  const router = useRouter();
  const { register, handleSubmit: hookFormSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const { mutateAsync: handleRegisterUserMutate } = useMutation({
    mutationKey: ["signup"],
    mutationFn: handleRegisterUser,
  })


  async function handleRegisterUser(data: RegisterFormData) {
    return AuthService.signUp(data);
  }

  const { signIn } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    const { toast } = useToast();

    try {
      const { accessToken } = await handleRegisterUserMutate(data);
      signIn(accessToken);
      router.push("/login");
    } catch (error) {
      console.log({ error: error.data.response.status });
    }
  })

  return { handleSubmit, register, errors }
}