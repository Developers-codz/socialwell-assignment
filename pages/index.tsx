import type { NextPage } from 'next'
import { Navbar,Main } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Main />
     
    </div>
  )
}

export default Home
