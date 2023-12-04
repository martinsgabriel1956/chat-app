import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '@/shared/providers/auth-provider'
import { queryClient } from '@/shared/lib/query-client'
import '@/shared/styles/globals.css'
import { Toaster } from '@/view/components/ui/Toaster'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      <AuthProvider>
        <Component {...pageProps} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  )
}
