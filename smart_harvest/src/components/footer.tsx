import React from 'react'
import Icon from '@/assets/icon.jpg'
import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'
function Footer() {
    return (
        <footer className='w-full max-w-[1270px] grid grid-cols-12 mx-auto font-custome mt-[100px] pb-10'>
            <div className="col-span-4">
                <div className="c">
                    <Image src={Icon} alt="" className='inline-block' />
                    <span className='font-custome text-[#047857] text-lg font-semibold col-start-1 col-span-2'> Smart Harvest </span>
                </div>
                <div className="mt-5">
                    <p className='text-sm text-slate-600 max-w-[300px] leading-7'>
                        Smart Harvest là giải pháp AI hỗ trợ nông dân quản lý cây trồng và chẩn đoán bệnh cây, nhằm tối ưu hóa sản xuất nông nghiệp và tạo nền nông nghiệp bền vững.
                    </p>
                </div>
            </div>
            <div className="col-span-2 flex flex-col">
                <h2 className="font-bold text-slate-500 uppercase"> Company </h2>
                <h3 className='font-medium text-[15px] mb-2 mt-7 hover:cursor-pointer hover:text-[#047857]'> About </h3>
                <h3 className='font-medium text-[15px] my-2 hover:cursor-pointer hover:text-[#047857]'> Blog </h3>
                <h3 className='font-medium text-[15px] my-2 hover:cursor-pointer hover:text-[#047857]'> Contact </h3>
                <h3 className='font-medium text-[15px] my-2 hover:cursor-pointer hover:text-[#047857]'> Careers </h3>
            </div>

            <div className="col-span-2 flex flex-col">
                <h2 className="font-bold text-slate-500 uppercase"> Help </h2>
                <h3 className='font-medium text-[15px] mb-2 mt-7 hover:cursor-pointer hover:text-[#047857]'> Customer Support </h3>
                <h3 className='font-medium text-[15px] my-2 hover:cursor-pointer hover:text-[#047857]'> Delivery Details </h3>
                <h3 className='font-medium text-[15px] my-2 hover:cursor-pointer hover:text-[#047857]'> Terms & Conditions </h3>
                <h3 className='font-medium text-[15px] my-2 hover:cursor-pointer hover:text-[#047857]'> Privatie Polici </h3>
            </div>

            <div className="col-span-4">
                <h2 className="font-bold text-slate-500 uppercase"> Contact  </h2>
                <Input placeholder='Enter your email' className='mt-7' />
                <Button className='mt-5'> Subscribe </Button>



            </div>





        </footer>
    )
}

export default Footer