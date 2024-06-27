import React from 'react'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <div className='min-h-screen min-w-full text-white'>
    <NavBar path={"/logo.png"} name={"SCreate"}/>
    <p className='text-8xl font-bold absolute top-1/2  -translate-y-1/2 mx-52 z-20 flex flex-col'>I'm Malik,<span className='text-purple-500'>web developer</span></p>
    {/*potrait image*/}
    <img src="/potrait.png" alt="potrait" className='aspect-auto absolute h-4/5 bottom-0 right-0 z-10' />

    {/*Blob image*/}
    <img src="/blob.png" alt="blob" className='aspect-auto absolute h-3/4 bottom-[-10%] right-[-8%] z-0' />


    </div>
  )
}

export default App
