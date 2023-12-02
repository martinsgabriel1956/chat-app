import { FormSection } from "@/view/components/FormSection";
import { HeroSection } from "@/view/components/HeroSection";
import { Input } from "@/view/components/ui/Input";
import { AuthLayout } from "@/view/layout/auth-layout";

export default function Register() {
  return (
    <AuthLayout>
      <FormSection
        title="Create account"
        textButton="Register"
      >
        <div className="flex flex-col justify-center gap-6 mb-12">
          <Input
            labelText="Name:"
            placeholder="Enter your name"
            id="name"
            type="text"
          />

          <Input
            labelText="Email:"
            placeholder="Enter your email"
            id="email"
            type="email"
          />

          <Input
            labelText="Password:"
            placeholder="Enter your password"
            id="password"
            type="password"
          />
        </div>

      </FormSection>
      <HeroSection />
    </AuthLayout>
  )
}