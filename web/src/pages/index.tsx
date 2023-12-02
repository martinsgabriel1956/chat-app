import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function Home() {
  return (
    <main
      className={`${poppins.className}`}
    >
      <h1>Hello World!</h1>
    </main>
  )
}
