import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Btnauth from '@/components/Btnauth'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <h2>Bojour a tous</h2>
        <Link href="/posts/single"> Voir le post</Link>
      </Layout>
      <Btnauth/>
    </>
  )
}
