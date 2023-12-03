import { useForm, useFormContext } from 'react-hook-form';
import { FormSection } from "@/view/components/FormSection";
import { HeroSection } from "@/view/components/HeroSection";
import { Input } from "@/view/components/ui/Input";
import { AuthLayout } from "@/view/layout/auth-layout";
import { useContext } from 'react';
import { AuthContext } from '@/shared/contexts/auth-context';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleRegisterUser } = useContext(AuthContext);

  const formOptions = {
    handleSubmit,
    onSubmit: handleRegisterUser
  }

  return (
    <AuthLayout
      pageTitle="Register"
    >
      <FormSection
        title="Create account"
        formOptions={formOptions}
      >
        <div className="flex flex-col justify-center gap-6 mb-12">
          <Input
            labelText="Name:"
            placeholder="Enter your name"
            id="name"
            type="text"
            error={errors.name}
            {...register("name", { required: "Name is required" })}
          />
          <Input
            labelText="Email:"
            placeholder="Enter your email"
            id="email"
            type="email"
            error={errors.email}
            {...register("email", { required: "Email is required" })}
          />
          <Input
            labelText="Password:"
            placeholder="Enter your password"
            id="password"
            type="password"
            error={errors.password}
            {...register("password", { required: "Password is required" })}
          />
        </div>
      </FormSection>
      <HeroSection />
    </AuthLayout>
  )
}