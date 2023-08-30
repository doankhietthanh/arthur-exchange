'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface HeaderButtonProps {
    title: string,
    iconUrl: string
}

const HeaderButton = (
    { title, iconUrl }: HeaderButtonProps
) => {
    return (
        <div>
            <Button className='flex justify-between items-center gap-5 px-10 py-6'>
                <Image src={iconUrl} alt={iconUrl} width={24} height={24} />
                {title}
            </Button>
        </div>
    )
}

export default HeaderButton