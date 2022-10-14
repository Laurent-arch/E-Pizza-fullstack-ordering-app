import Head from 'next/head'
import axios from 'axios'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home({ pizzaList }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>E-pizza</title>
        <meta name="description" content="best pizza in town" />
        <link rel="icon" href="/pizza.jpg" />
      </Head>
        <Featured/>
        <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:3000/api/products")
  return {
    props: {
      pizzaList: response.data
    }
  }
}
