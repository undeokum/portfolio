import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faCode, faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const LINK_ICONS = [faPhone, faEnvelope, faGithub, faInstagram, faCode, faCheck]
const LINK_NAME = ['전화번호', '이메일', '깃허브', '인스타그램', '백준 온라인 저지', '솔브드']
const LINK_URL = ['', 'mailto:limjunseokdev@gmail.com', 'https://github.com/undeokum', 'https://instagram.com/undeokum/', 'https://www.acmicpc.net/user/dlawnstjr', 'https://solved.ac/profile/dlawnstjr']
const LINK_ID = ['010-3054-4357', 'limjunseokdev@gmail.com', 'undeokum', 'undeokum', 'dlawnstjr', 'dlawnstjr']
const LINK_COLOR = ['#0EB0FF', '#0EB0FF', '#000000', '#E12F6D', '#0072B9', '#17C838']

const Links = () => {
    return (
        <div className='py-20 space-y-10'>
            <div>
                <p className='text-xl opacity-60'>Links</p>
                <h1 className='text-2xl font-semi_bold'>연락처 / 소셜미디어 계정</h1>
            </div>
            <div className='space-y-8 text-lg'>
                {
                    LINK_ICONS.map((icon, i) => (
                        <div key={i} className='flex items-center space-x-5'>
                            <div style={{ backgroundColor: LINK_COLOR[i] }} className={`p-5 rounded-md flex items-center justify-center`}>
                                <FontAwesomeIcon icon={icon} className='w-6 h-6 text-white' />
                            </div>
                            <div>
                                <h1 className='text-xl'>{LINK_NAME[i]}</h1>
                                <div className='text-blue-950 flex space-x-3 items-center'>
                                    <p>{LINK_ID[i]}</p>
                                    {LINK_URL[i] != '' && <Link target='_blank' href={LINK_URL[i]}><FontAwesomeIcon icon={faLink} className='w-4 h-4' /></Link>}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Links