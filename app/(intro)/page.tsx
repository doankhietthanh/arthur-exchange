import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IntroPage = () => {
    return (
        <div className='w-full h-full flex flex-row gap-10 px-20'>
            <Image src='/images/arthur.svg' alt='arthur' width={0} height={0} style={{ width: 'auto', height: '100%' }} />
            <div className='w-full h-full flex-1 flex flex-col gap-10 justify-center items-start text-white'>
                <h1 className='text-3xl text-primary uppercase font-bold'>Be the King of Your <br />
                    Own Legend</h1>
                <p>Introducing Arthur Exchange: Where Linea&apos;s potential meets DeFi innovation. A unified platform merging a Decentralized Exchange and Launchpad, Arthur Exchange empowers Linea&apos;s community for seamless trading and project launches. Join us in shaping the future of decentralized finance.</p>
                <div className='relative w-[130px] h-[130px]'>
                    <div className='absolute top-0 bottom-0 right-0 left-0 z-0 w-[130px] h-[130px] rounded-full bg-primary/20'></div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[115px] h-[115px] rounded-full bg-primary/40'></div>
                    <Button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[100px] h-[100px] rounded-full bg-primary flex flex-col justify-center items-center'>
                        <Image src='/icons/crossed-swords.svg' alt='arrow' width={50} height={50} />
                        <div className='text-[10px] text-center text-black font-semibold'>LAUNCH <br /> APP</div>
                    </Button>
                </div>
                <div className='flex flex-row gap-10'>
                    <div className="text-3xl text-primary uppercase font-bold">GET READY!</div>
                    <div>Arthur Exchange DEX is live on Linea <br /> Join our <Link className='text-primary' href='/community'>community</Link> to find out more.</div>
                </div>
            </div>
        </div >
    )
}

export default IntroPage