import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full h-20 bg-black/50 flex justify-center items-center gap-4 px-20 py-4'>
            <div className='text-white text-xl font-bold tracking-wide'>Find us on</div>
            <div className="flex flex-row gap-3">
                <Image src='/icons/discord.svg' alt='discord' width={24} height={24} />
                <Image src='/icons/twitter.svg' alt='twitter' width={24} height={24} />
                <Image src='/icons/fly.svg' alt='fly' width={24} height={24} />
                <Image src='/icons/meta.svg' alt='meta' width={24} height={24} />
                <Image src='/icons/gitbook.svg' alt='gitbook' width={24} height={24} />
            </div>
        </div >
    )
}

export default Footer