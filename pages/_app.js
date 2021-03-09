import '../styles/globals.css'
import Layout from './components/Layout'

function MyApp({ Component, pageProps }) {
  return  (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

if (typeof window !== "undefined") {
  require("jquery");
  require("popper.js");
  require("bootstrap");
}

export default MyApp
