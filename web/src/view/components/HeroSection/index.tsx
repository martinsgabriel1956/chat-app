import Image from "next/image";
import { usePathname } from "next/navigation";


enum HeroImage {
  login = "login.svg",
  register = "create-account.svg",
}

export function HeroSection() {
  const pathname: string = usePathname();
  const imageUrl = HeroImage[pathname.replace("/", "") as keyof typeof HeroImage]

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-indigo-300 w-full">
      <div className="">
        <Image
          src={`/img/${imageUrl}`}
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}