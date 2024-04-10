"use client";
import Link from 'next/link'
import React from 'react'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import Image from "next/image";
import ServicesCard from './ServicesCard';
const Services = () => {
  return (
    <>
    <h1 className='text-center text-4xl font-bold font-GeneralSans py-4 px-2'>What do we do?</h1>
    <div className='flex flex-wrap md:px-40 mx-auto  items-center justify-between'>

        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
    </div>
    </>
  )
}

export default Services