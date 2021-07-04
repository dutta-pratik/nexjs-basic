import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keyword" content="ninjas"></meta>
    </Head>
    <div>
      
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>Ullamco enim commodo cillum elit duis ipsum qui magna. Do Lorem culpa ea est pariatur sit sit nisi. Dolore consequat mollit tempor dolore ad mollit ut velit do officia. Excepteur magna amet enim id ullamco in. Occaecat dolore sint deserunt adipisicing ad cupidatat Lorem magna ea consequat exercitation. Ex aute incididunt et laboris esse irure dolor enim occaecat pariatur sint anim excepteur ex.
      </p>
      <p className={styles.btn}>
        <Link href="/ninjas">see Ninja's List</Link>
      </p>
      
    </div>
    </>
  )
}
