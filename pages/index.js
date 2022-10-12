import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-pizza</title>
        <meta name="description" content="best pizza in town" />
        <link rel="icon" href="/pizza.jpg" />
      </Head>
        <Featured/>
        <PizzaList />
    </div>
  )
}
