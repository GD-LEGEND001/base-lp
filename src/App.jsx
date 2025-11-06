import React from 'react'
import './App.css'
import { ReactTyped } from 'react-typed'
function App() {
  

  return (
    
    <div className="w-full bg-black min-h-screen  flex  text-white flex-col">
      {/*navbar*/}
      <nav className='sticky top-0 z-10 flex items-center justify-between p-6 bg-[#000000]'>
    <h1 className='text-xl font-medium'>
      <span className="text-[9px]">⬜</span>base
      <span className='text-gray-400 font-light'>build</span>
    </h1>
    <div className='space-x-4 text-gray-400 text-sm'>
        <a className="hover:text-white transition" href="">Base.org</a>
        <a className="hover:text-white transition" href="">Base App</a>
        <a className="hover:text-white transition" href="">Base Docs</a>
      </div>
      {/* mobile menu */}
      </nav>
      <div className="text-center flex flex-col items-center py-20 px-5">
      <h1 className="text-5xl md:5xl mb-4"><ReactTyped
      strings={
        ([
          "Grow your app on base",
          "My name is khaleed",
          "This is my first react app"
        ])      
      }
      typeSpeed={100}
      loop
      />
        
      </h1>
      
      <p className='text-gray-400 text-md max-w-xl md:text-2xl'>Get featured on the Base app, win builder rewards, and unlock insights 
        to grow faster.</p>
        <button className='bg-[#ffffff] w-80 h-15 rounded-lg text-[#000000] font-bold text-sm mt-5 hover:bg-gray-100'>Sign up</button>
        <p className='text-[9px] text-gray-500 max-w-md mt-4'>
          By clicking sign in, I have raed and agreed to the {" "} 
          <span className='underline text-white'>Terms of service</span>and
          <span className='underline text-white'>Privacy policy</span>{" "}
          in EU/UK, I confirm I have read and understtod the {" "}
          <span className='underline text-white'>Privacy policy</span>
        </p>
        <img className='max-w-md' src='/neuron.webp'/>
      </div>

      <div className="flex justify-center gap-5">
        <img className='bg-[#1e1e1ebb] rounded-lg px-14 py-7' src="/rewards.webp"/>
        <div className="flex-col gap-5 mt-50 space-y-5 ">
        <h1 className="text-3xl">Get rewarded for what you build</h1>
        <p className='text-gray-500 text-lg'>Verify your mini app to become eligible for <br /> builder rewards.</p>
        <p className='text-sm'>Rewards subject to eligibility & official rules. No purchase necessary. <br />Void where prohibited.</p>
        </div>
      </div>

      <div className="flex justify-center gap-5 mt-35">
        <div className="flex-col gap-5 mt-50 space-y-5 ">
        <h1 className="text-3xl">Get featured on the Base app</h1>
        <p className='text-gray-500 text-2xl'>Increase your chances of being featured in the <br />Base app, meet users where they are, and kickstart <br />your app's growth.</p>
        </div>
        <img className='bg-[#1e1e1ebb] rounded-lg px-40 py-5' src="/featured.webp"/>
        
      </div>
      <div className="flex justify-center gap-5 mt-35 mb-29">
        <img className='bg-[#1e1e1ebb] rounded-lg p-5 w-120 h-80' src="/understand.webp"/>
        <div className="flex-col gap-5 mt-50 space-y-5 ">
        <h1 className="text-3xl">Make better decisions with data</h1>
        <p className='text-gray-500 text-2xl'>Get real-time analytics to unlock insights,<br /> understand your users, and grow your app.</p>
        
        </div>
      </div>
      <footer className="bg-[#ffffff] w-full h-30 p-5">
        <img className="block mx-auto invert" src="/base-build-logo.webp" />
        <div className='flex gap-5 justify-center text-gray-400'>
          <a href="">Base Docs</a>
          <a href="">Privacy Policy</a>
          <a href="">Cookie Policy</a>
          <a href="">Terms of Service</a>
          </div>
      </footer>
      </div>
      
    
  )
}

export default App
