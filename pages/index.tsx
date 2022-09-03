import type { NextPage } from 'next'
import { Navbar,Main } from '../components'
import { Footer } from '../components/footer/Footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Footer />
     
    </div>
  )
}

export default Home
