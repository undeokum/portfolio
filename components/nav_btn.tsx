'use client'
import Link from 'next/link'
import { faBars, faBook, faHome, faLaptop, faLink, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const NAV_NAME = ['홈', '경력', '프로젝트', '링크']
const NAV_ICON = [faHome, faBook, faLaptop, faLink]
const NAV_LINK = ['', 'career', 'projects', 'links']

const NavButton = () => {
    const [opened, setOpened] = useState(false)
    return (
        <div className='flex justify-end'>
            <div className='fixed bottom-12 flex flex-col items-center space-y-3'>
                {
                    opened &&
                    <div className='p-2 bg-white border space-y-3 rounded-md shadow-md'>
                        {
                            NAV_NAME.map((name, i) => (
                                <Link href={`/${NAV_LINK[i]}`} key={i} className='flex bg-white hover:brightness-90 space-x-3 items-center py-2 pl-3 pr-20 rounded-md'>
                                    <FontAwesomeIcon icon={NAV_ICON[i]} className='w-6 h-6' />
                                    <div className='text-lg'>{name}</div>
                                </Link>
                            ))
                        }
                    </div>
                }
                <button onClick={() => setOpened(!opened)} className='bg-cblue text-white hover:brightness-90 transition-all p-5 rounded-full flex items-center justify-center shadow-md'>
                    <FontAwesomeIcon icon={opened ? faX : faBars} className='w-6 h-6' />
                </button>
            </div>
        </div>
    )
}

export default NavButton