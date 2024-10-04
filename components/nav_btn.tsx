'use client'
import Link from 'next/link'
import { faBars, faBook, faHome, faLaptop, faLink, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const NAV_NAME = ['홈', '경력', '프로젝트', '링크']
const NAV_ICON = [faHome, faBook, faLaptop, faLink]
const NAV_LINK = ['', 'career', 'projects', 'links'].map(s => `/${s}`)

const NavButton = () => {
    const router = usePathname()
    const [opened, setOpened] = useState(false)
    useEffect(() => {
        const body = document.querySelector('body')
        if(body){
            if(opened){
                body.style.overflow = 'hidden'
            }
            else {
                body.style.overflow = 'auto'
            }
        }
    }, [opened])
    return (
        <>
            {
                opened
                &&
                <div className='flex justify-center z-10'>
                    <div onClick={() => setOpened(!opened)} className='fixed w-screen h-screen bg-black bg-opacity-35' />
                </div>
            }
            <div className={`fixed h-screen right-0 flex flex-col items-center justify-between px-12 py-20 ${opened && 'bg-white border-l'}`}>
                <nav className={`space-y-10 ${!opened && 'opacity-0'}`}>
                    <div className='space-y-5'>
                        {
                            NAV_NAME.map((name, i) => (
                                <Link href={NAV_LINK[i]} key={i} className={`flex bg-white hover:brightness-95 transition-all rounded-md items-center text-lg space-x-5 pr-32 p-3 ${router == NAV_LINK[i] && 'text-cblue'}`}>
                                    <FontAwesomeIcon icon={NAV_ICON[i]} className='w-6 h-6' />
                                    <div>{name}</div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className='flex justify-center'>
                        <Link target='_blank' href='https://github.com/undeokum/portfolio' className='hover:text-blue-500 hover:underline transition-colors'>Made with ❤️</Link>
                    </div>
                </nav>
                <button onClick={() => setOpened(!opened)} className={`p-5 hover:brightness-95 transition-all rounded-full flex items-center justify-center ${opened ? 'text-gray-500 bg-white' : 'bg-cblue text-white'}`}>
                    <FontAwesomeIcon icon={opened ? faX : faBars} className='w-5 h-5' />
                </button>
            </div>
        </>
    )
}

export default NavButton