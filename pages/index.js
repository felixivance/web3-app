import Head from 'next/head'
import CollectionCard from '../components/CollectionCard'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {

  const [punkListData, setPunkListData] = useState([]);


  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x02C05dDc6480b24a27085D7D335a43F466b6436d&order_direction=asc')
      console.log(openSeaData.data.assets)
    }



    return getMyNfts();
  }, [])

  return (
    <div className="bg-black h-screen ">
      <Head>
        <title>NFT App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* navbar */}
      <Navbar />
      <CollectionCard id="0" name="Felix" traits={[{ 'value': '1' }]} image='https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM=w600' />
      {/* main */}
      {/* footer */}
    </div>
  )
}
