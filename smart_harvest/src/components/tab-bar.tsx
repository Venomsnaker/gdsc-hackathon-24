"use client"
import React from 'react'
import { Button } from './ui/button'
import { AngryIcon, Axe, Brain, Calendar, Dog, Home, LogOut, Notebook, Plus, Settings, TreeDeciduous, User } from 'lucide-react'
import Icon1 from '@/assets/1.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { auth } from '@/action/firebase/db'

const Item = ({ children, Icon, isActive }: { children: string, Icon: React.ReactNode, isActive?: boolean }) => {

    return (
        <div className={`flex items-end gap-4 ${isActive ? "text-[#047857]" : ""} hover:cursor-pointer hover:text-slate-800`}>
            {Icon}
            <div className={`span font-normal text-[13px]`}> {children} </div>
        </div>
    )
}

function TabBar() {
    const path = usePathname()
    return (
        <nav className='flex flex-col font-custome justify-between h-[600px]'>
            <div className="flex flex-col gap-3">
                <Button className='w-4/5 mb-3' >  <p className='flex items-center gap-1'><Plus fontSize={100} /> Kết nối bằng tài khoản khác  </p> </Button>
                <Link href='/dashboard'>
                    <Item Icon={<Home strokeWidth={1} />} isActive={path == '/dashboard'}> Trang chủ </Item>
                </Link>
                <span className='text-slate-400 text-[15px]'> Features </span>
                <Link href='/plant'>
                    <Item Icon={<TreeDeciduous strokeWidth={1} />} isActive={path == '/plant'} > Quản lý cây trồng  </Item>
                </Link>
                <Link href='/animal'>
                    <Item Icon={<Dog strokeWidth={1} />} isActive={path == '/animal'} > Quản lý vật nuôi  </Item>
                </Link>
                <Link href='/equipment'>
                    <Item Icon={<Axe strokeWidth={1} />} isActive={path == '/equipment'} > Quản lý cơ sở vật chất  </Item>
                </Link>
                <Link href='/predict'>
                    <Item Icon={<Brain strokeWidth={1} />} isActive={path == '/predict'}> Chẩn đoán bệnh lúa </Item>
                </Link>
                <span className='text-slate-400 text-[15px]'> Notes </span>
                <Link href='/notes'>
                    <Item Icon={<Notebook strokeWidth={1} />} isActive={path == '/notes'}> Ghi chú  </Item>
                </Link>
                <span className='text-slate-400 text-[15px]'> Social </span>
                <Link href='/social'>
                    <Item Icon={<User strokeWidth={1} />} isActive={path == '/social'}> Cộng đồng  </Item >
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                <Link href='/setting'>
                    <Item Icon={<Settings strokeWidth={1} />} isActive={path == '/setting'} > Cài đặt </Item >
                </Link>
                <div className="" onClick={() => {
                    console.log('Sign outing')
                    auth.signOut().then(() => {
                        console.log('Sign out')
                    }
                    ).catch((error) => {
                        console.log(error)
                    })
                }}>
                    <Item Icon={<LogOut color='red' strokeWidth={1} />} >  Đăng xuất </Item >
                </div>
            </div>


        </nav>
    )
}

export default TabBar