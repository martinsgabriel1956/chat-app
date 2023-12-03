import { AuthProvider } from '@/shared/providers/auth-provider'
import { queryClient } from '@/shared/services/query-client'
import '@/shared/styles/globals.css'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  )
}
