import { Button } from '@/components/ui/Button'
import React from 'react'
import Image from 'next/image'

type Props = {}

const ThxPay = (props: Props) => {
    return (
    <div className='w-full h-[700px] mt-[80px] flex justify-center items-center'>
        <div className='w-[600px] h-[250px]'>
            <h1 className='font-bold text-center text-[30px] mt-[10px]'>Thanks for supporting Us!</h1>
            <hr className='w-[150px] h-[10px] mx-auto mt-[10px] border-[black]'></hr>
            <p className='text-center mt-[20px]'>You have successfully purchased from our website</p>
            <p className='text-center mt-[20px]'>Go to Home</p>
        </div>
    </div>);
}

export default ThxPay;