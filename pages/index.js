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

      {/* selected punk */}
      <div className='flex  border-gray-200 mb-3 text-white space-x-3  pt-5 w-[100%] '>
        <div className=''>
          <img src="https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM=w600" className='w-[200px] h-[200px] rounded-lg' alt="" />
        </div>
        <div className='flex flex-col justify-around w-full'>
          <div className='flex flex-col'>
            <p className='text-2xl font-bold'>Bandana Punk</p>
            <p>#2</p>
          </div>
          <div className='flex justify-between '>
            {/* owner img */}
            <div className='flex space-x-1'>
              <img src="https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM=w600" className='w-[50px] h-[50px] rounded-full' alt="" />
              <div className='flex flex-col pl-2'>
                <p> 0x1928371982ajsdnk1239718</p>
                <p className='text-purple-400'> @Felix Ivance</p>
              </div>
            </div>
            {/* social media icons */}
            <div className='flex'>
              <img src="/images/instagram.png" alt="" className='w-10 h-10' />
            </div>

          </div>

        </div>
      </div>

      {/* grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 pl-2 pr-2 */}
      <div className='flex overflow-scroll'>
        {
          punkListData?.map((item, index) => (
            item.name !== null && <CollectionCard id={item.id} key={index}
              name={item.name} traits={item.traits} image={item.image_original_url} alt="" />
            // 
          ))
        }
      </div>

      {/* main */}
      {/* footer */}
    </div>
  )
}
