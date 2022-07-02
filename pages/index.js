import Head from 'next/head'
import Home from './home'
import  Navbar from './navbar'


export default function App() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Home/>
    </div>
  )
}
