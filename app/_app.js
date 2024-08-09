import { CookiesProvider } from "react-cookie"

export default function MyApp({ pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}