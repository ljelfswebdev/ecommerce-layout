import Head from 'next/head';
import Image from 'next/image';



import BestSellersSlider from '../components/homepage/best-sellers';


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='container'>
          <BestSellersSlider/>
        </div>
    </div>
  )
}
