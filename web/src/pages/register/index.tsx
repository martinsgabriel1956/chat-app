import { FormSection } from "@/view/components/FormSection";
import { HeroSection } from "@/view/components/HeroSection";
import { Input } from "@/view/components/ui/Input";
import { AuthLayout } from "@/view/layout/auth-layout";
import { UseRegister } from '../../shared/hooks/useRegister';

export default function Register() {
  const { errors, handleSubmit, register } = UseRegister();

  return (
    <AuthLayout
      pageTitle="Register"
    >
      <FormSection
        title="Create account"
        handleSubmit={handleSubmit}
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