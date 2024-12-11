import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Clock from '../ClockPage/CLock'
const Home = () => {

  useGSAP(()=>{
    gsap.from(('h2'),{
      ease:'power1.inOut',
      opacity:0,
      y:-40,
     
      duration:1
    })
  })
  return (
    <>
     <div style={{
      display:'flex',
      justifyContent:'center',
      // color:'white',
      alignItems:'center',
      position:'relative',
      top:'20%'
     }}>
     <h2 style={{fontSize:'2.3rem'}}><b>Time is precious</b> <i>waste it wisely</i></h2>
     </div>
      <Clock/>
    </>
  )
}

export default Home
