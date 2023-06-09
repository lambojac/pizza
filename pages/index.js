import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Featured from '../components/Featured.jsx'
import PizzaList from '@/components/PizzaList'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>LAMBO PIZZA RESTAURANT</title>
        <meta name="description" content="Best pizza app so far so good" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Featured/>
    <PizzaList/>
    
            </div>
      
   
  )
}
