import React from 'react'
import Logo from '@/components/logo'
import HeaderButton from '@/components/header-button'

const Header = () => {
    return (
        <div className=' w-full h-20 bg-black/50 flex justify-between items-center px-20 p-5'>
            <Logo />
            <HeaderButton title='Launch App' iconUrl='/icons/crossed-swords.svg' />
        </div >
    )
}

export default Header