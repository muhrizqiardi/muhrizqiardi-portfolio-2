import 'tailwindcss/tailwind.css'
import '../public/styles/main.css'
import Head from 'next/head'
import configureLanguage from '../utils/language'
import LanguageProvider from '../contexts/LanguageContext'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Search Verification Meta Tag */}
        <meta name="google-site-verification" content="OR942dxo1AftqI5Ux9hADCb-FmSCggB7c4wlZlcD-sI" />

        {/* META SEO */}
        <title>Muhammad Rizqi Ardiansyah | Portfolio Website</title>
        <meta name="title" content="Muhammad Rizqi Ardiansyah | Portfolio Website" />
        <meta name="description" content="Hi, I'm Muhammad Rizqi Ardiansyah, a web developer and an informatics engineering student that are passionate and curious about technology!" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muhrizqiardi.github.io" />
        <meta property="og:title" content="Muhammad Rizqi Ardiansyah | Portfolio Website" />
        <meta property="og:description" content="Hi, I'm Muhammad Rizqi Ardiansyah, a web developer and an informatics engineering student that are passionate and curious about technology!" />
        <meta property="og:image" content="https://muhrizqiardi.github.io/assets/portfolio-thumbnail.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://muhrizqiardi.github.io" />
        <meta property="twitter:title" content="Muhammad Rizqi Ardiansyah | Portfolio Website" />
        <meta property="twitter:description" content="Hi, I'm Muhammad Rizqi Ardiansyah, a web developer and an informatics engineering student that are passionate and curious about technology!" />
        <meta property="twitter:image" content="https://muhrizqiardi.github.io/assets/portfolio-thumbnail.png" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900&display=swap" rel="stylesheet" />

        {/* Icons */}
        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

        {/* Other CSS */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  )
}

export default MyApp
