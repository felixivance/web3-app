import Head from 'next/head'
import CollectionCard from '../components/CollectionCard'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';

export default function Home() {
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
