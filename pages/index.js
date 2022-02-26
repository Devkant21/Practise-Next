import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from "next/script"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevkantSwargiary</title>
        <meta name="description" content="Portfolio Website" />
        <meta name="keyboard" content="Devkant Swargiary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src='/welcome.js' strategy="lazyOnload"></Script>

      

      <main className={styles.main}>
        <h1 className={styles.title}>
           <a href="https://github.com/Devkant21">Devkant Swargiary</a>
        </h1>

        <p className={styles.description}>
          Web Developer & Open Source Enthusiast{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="https://dev21.hashnode.dev/error-malformed-postcss-configuration-nextjs" className={styles.card}>
            <h2>Error: Malformed PostCSS Configuration - NextJS &rarr;</h2>
            <p>PostCSS configuration error mitigation </p>
          </a>
 
          <a href="https://dev21.hashnode.dev/react-boilerplate-generation" className={styles.card}>
            <h2>React Boilerplate Generation &rarr;</h2>
            <p>Boilerplate generation through the ES7 extension (dsznajder)</p>
          </a>

          <a
            href="https://dev21.hashnode.dev/hoisting-in-javascript"
            className={styles.card}
          >
            <h2>Hoisting in Javascript &rarr;</h2>
            <p>In Javascript (JS), variables and functions can be accessed before initializing it without any error anywhere in the program. This is known as Hoisting.</p>
          </a>

          <a
            href="https://dev21.hashnode.dev/secrets-module-in-python"
            className={styles.card}
          >
            <h2>'secrets' module in Python. &rarr;</h2>
            <p>
            The secrets module is useful for generating random numbers which might be used as a password, security tokens etc. for the application. It is used to prevent against modifying cookies, forgery attacks
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Devkant21"
          target="_blank"
          rel="noopener noreferrer"
        >
          All rights reserved. Made by DS{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}
