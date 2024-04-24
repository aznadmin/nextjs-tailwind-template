import { useRouter } from 'next/navigation'
import { isBrowser } from '../helpers'

export function useTelemetryProps() {
  const { locale } = useRouter()

  return {
    screenResolution: isBrowser ? `${window.innerWidth}x${window.innerHeight}` : '',
    language: locale ?? 'en-US',
  }
}
