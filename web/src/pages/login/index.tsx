import { FormSection } from "@/view/components/FormSection";
import { HeroSection } from "@/view/components/HeroSection";
import { Input } from "@/view/components/ui/Input";
import { AuthLayout } from "@/view/layout/auth-layout";

export default function Login() {
  return (
    <AuthLayout>
      <FormSection
        title="Welcome back"
        subtitle="Welcome back! Please enter your details."
        textButton="Login"
      >
        <div className="flex flex-col justify-center gap-8">
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