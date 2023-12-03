import { useForm } from "react-hook-form";
import { FormSection } from "@/view/components/FormSection";
import { HeroSection } from "@/view/components/HeroSection";
import { Input } from "@/view/components/ui/Input";
import { AuthLayout } from "@/view/layout/auth-layout";
import { useContext } from "react";
import { AuthContext } from "@/shared/contexts/auth-context";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleLogin } = useContext(AuthContext);

  const formOptions = {
    handleSubmit,
    onSubmit: handleLogin,
  }

  return (
    <AuthLayout
      pageTitle="Login"
    >
      <FormSection
        title="Welcome back"
        subtitle="Welcome back! Please enter your details."
        formOptions={formOptions}
      >
        <div className="flex flex-col justify-center gap-8">
          <Input
            labelText="Email:"
            placeholder="Enter your email"
            id="email"
            type="email"
            error={errors.email}
            {...register("email", { required: true })}
          />
          <Input
            labelText="Password:"
            placeholder="Enter your password"
            id="password"
            type="password"
            error={errors.password}
            {...register("password", { required: true })}
          />
        </div>
      </FormSection>
      <HeroSection />
    </AuthLayout>
  )
}