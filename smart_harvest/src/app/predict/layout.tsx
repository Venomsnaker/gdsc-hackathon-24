import Header from '@/components/header'
import TabBar from '@/components/tab-bar'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className='grid grid-cols-5 max-w-[1400px] mx-auto w-full'>
                <div className="col-span-1">
                    <TabBar />
                </div>
                <div className="col-span-4">
                    {children}
                </div>

            </main>
        </>
    )
}

export default Layout