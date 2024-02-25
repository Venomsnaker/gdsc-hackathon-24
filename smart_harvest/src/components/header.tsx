import React from 'react'
import { Button } from './ui/button'
import Icon from '@/assets/icon.jpg'
import Image from 'next/image'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Bell, Mail } from 'lucide-react'
import { CommandDemo } from './search'
export const avatar = 'https://ejndaaeplrydtiootmkr.supabase.co/storage/v1/object/public/gdsc/lmp.jpg'

function Header() {
    return (
        <header className='w-full bg-[#FFFFFF]'>
            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-4 bg-[#FFFFFF] mb-4">
                <div className="col-span-2">
                    <Image src={Icon} alt="" className='inline-block' />
                    <span className='font-custome text-[#047857] text-lg font-semibold col-start-1 col-span-2'> Smart Harvest </span>
                </div>
                <div className="col-span-7 col-start-4">
                    <CommandDemo />
                </div>
                <div className="col-span-4 col-start-12 flex justify-end items-center gap-5">
                    <Bell />
                    <Mail />
                    <Avatar>
                        <AvatarImage src={avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>

        </header>
    )
}

export default Header