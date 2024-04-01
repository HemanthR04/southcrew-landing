import Image from 'next/image'
import React from 'react'
import Chanel from '../assets/ChanelLogo.png'
import AdidasLogo from '../assets/AdidasLogo.png'
import IbmLogo from '../assets/IbmLogo.png'


const Companies = () => {
  return (
    <>
   
    <div className='flex justify-between items-center max-w-4xl mx-auto my-4'>
        
        <Image
        src={AdidasLogo}
        alt=''
        width={100}
        height={100}
        ></Image>
        <Image
        src={IbmLogo}
        alt=''
        width={100}
        height={100}
        ></Image>
        <Image
        src={AdidasLogo}
        alt=''
        width={100}
        height={100}
        ></Image>
        <Image
        src={IbmLogo}
        alt=''
        width={100}
        height={100}
        ></Image>
         <Image
        src={AdidasLogo}
        alt=''
        width={100}
        height={100}
        ></Image>
         <Image
        src={IbmLogo}
        alt=''
        width={100}
        height={100}
        ></Image>
        
    </div>
    </>
    
  )
}

export default Companies