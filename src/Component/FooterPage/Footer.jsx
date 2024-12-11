import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
   
    gsap.fromTo(
      '.box.left',
      { x: -200, opacity: 0 ,borderRadius:'10%',yoyo:true , background:'rgb(175, 130, )',repeat: -1, },
      { x: 700, opacity: 1, duration: 3, ease: 'power3.out', borderRadius:'50%',yoyo:true, backgroundColor:'Brown' ,repeat: -1, }
    );

   
    gsap.fromTo(
      '.box.right',
      { x: 200, opacity: 0,borderRadius:'10%',yoyo:true,background:'rgb(175, 130, 130)',repeat: -1,  },
      { x: -700, opacity: 1, duration: 3, ease: 'power3.out' , borderRadius:'50%', yoyo:true,  backgroundColor:'Brown',repeat: -1, },
     
    );
  }, []);

  return (
    <div className='footer-main'>
      <div className="box left"></div>
      <div className="box right"></div>
    </div>
  );
};

export default Footer;
