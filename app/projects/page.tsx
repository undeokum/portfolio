import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    const PROJECTS: {
        name: string
        title: string
        desc: string
        link: string | null
        github: string | null
    }[] = [
        {
            name: 'instend beta',
            title: '인스텐드 베타',
            desc: '동네/학교/회사별로 나누어진 익명 제보 서비스',
            link: 'instend.vercel.app',
            github: 'undeokum/instend'
        }
    ]
    return (
        <div className='py-20 space-y-20'>
            <div className='space-y-5'>
                <div>
                    <p className='text-xl opacity-60'>Projects</p>
                    <h1 className='text-2xl font-semi_bold'>프로젝트</h1>
                </div>
                <div className='flex flex-wrap space-x-10'>
                    {
                        PROJECTS.map(({name, title, desc, link, github}, i) => (
                            <div key={i} className='space-y-5'>
                                <div>
                                    <Image src={`/img/projects/${name.replaceAll(' ', '_')}.svg`} alt={name} width={350} height={227.5} className='border rounded-md' />
                                </div>
                                <div className='text-lg space-y-2'>
                                    <div className='flex space-x-2 font-semi_bold'>
                                        <div className='text-3xl'>{title}</div>
                                        <div className='text-black opacity-50 text-base'>{name.toUpperCase()}</div>
                                    </div>
                                    <div className='text-black opacity-50 font-medium'>{desc}</div>
                                </div>
                                <div className='flex items-center space-x-5'>
                                    <Link target='_blank' href={`https://${link}`} className='flex text-lg text-blue-600 items-center space-x-2 hover:text-blue-900 hover:underline transition-colors'>
                                        <FontAwesomeIcon icon={faLink} className='w-5 h-5' />
                                        <div>{title} 링크</div>
                                    </Link>
                                    <Link target='_blank' href={`https://github.com/${github}`} className='flex text-lg text-blue-600 items-center space-x-2 hover:text-blue-900 hover:underline transition-colors'>
                                        <FontAwesomeIcon icon={faGithub} className='w-5 h-5' />
                                        <div>깃허브 링크</div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects