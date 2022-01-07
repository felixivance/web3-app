import Head from 'next/head'
import CollectionCard from '../components/CollectionCard'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="bg-black h-screen ">
      <Head>
        <title>Crypto App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* navbar */}
      <Navbar />
      <CollectionCard id="0" name="felix" traits={[{ 'value': '1' }]} image='' />
      {/* main */}
      {/* footer */}
    </div>
  )
}
