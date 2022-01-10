import Head from 'next/head'
import CollectionCard from '../components/CollectionCard'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {

  const [punkListData, setPunkListData] = useState([]);


  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xf47236FBd27a4f5a6d9328d2C443fD4EFC17f08a&order_direction=asc')
      console.log(openSeaData.data.assets)
      setPunkListData(openSeaData.data.assets)
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
      <p className='text-white'>{punkListData.length}</p>
      {
        punkListData?.map((item, index) => (
          <CollectionCard id={item.id} key={index}
            name={item.collection.name} traits={[{ 'value': '1' }]} image='https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM=w600' />
        ))
      }

      {/* main */}
      {/* footer */}
    </div>
  )
}
