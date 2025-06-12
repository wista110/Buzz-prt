import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LoadingScreen } from '../components/LoadingScreen'
import { LoadingProvider } from '../contexts/LoadingContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <LoadingScreen />
      <Component {...pageProps} />
    </LoadingProvider>
  )
} 