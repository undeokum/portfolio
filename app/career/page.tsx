import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const SKILLS_NAME = ['html', 'css', 'javascript', 'typescript', 'c', 'c++', 'python', 'dart', 'node.js', 'react', 'next.js', 'tailwind css', 'flutter']
const SKILLS_IMG = [...SKILLS_NAME.map(n => `/img/skills/${n.replaceAll(' ', '_')}.svg`)]

type ColorType = {
    bronze: string,
    silver: string,
    gold: string
}

type AwardsType = [string, string, keyof ColorType, string?]

const AWARDS: AwardsType[] =
[
    [
        '백준 온라인 저지 최고 랭크',
        '실버 5',
        'silver',
        'https://www.acmicpc.net/user/dlawnstjr'
    ],
    [
        '2023 상반기 인천 메타버스 앱 창작 챌린지',
        '장려상',
        'bronze'
    ],
    [
        '2023 하반기 인천 메타버스 앱 창작 챌린지',
        '장려상',
        'bronze'
    ],
    [
        '제6회 한국코드페어에 팀 \'sotizen\'으로 참가',
        '',
        'bronze'
    ]
]

const COLORS: ColorType = {
    'bronze': 'text-cbronze',
    'silver': 'text-csilver',
    'gold': 'text-cgold'
}

const Career = () => {
    return (
        <div className='py-20 space-y-20'>
            <div className='space-y-5'>
                <div>
                    <p className='text-xl opacity-60'>Languages / Skills</p>
                    <h1 className='text-2xl font-semi_bold'>사용 가능한 언어 / 기술</h1>
                </div>
                <div className='flex flex-wrap space-x-10 justify-center'>
                    {
                        SKILLS_NAME.map((name, i) => (
                            <div key={i} className='flex flex-col items-center mt-5 space-y-3'>
                                <div className='p-3 rounded-full border'>
                                    <Image src={SKILLS_IMG[i]} alt={name} width={100} height={100} className='w-8 h-8' />
                                </div>
                                <div>{name.toUpperCase()}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='space-y-8'>
                <div>
                    <p className='text-xl opacity-60'>Career / Awards</p>
                    <h1 className='text-2xl font-semi_bold'>경력 / 수상 이력</h1>
                </div>
                <ul className='text-lg space-y-2 list-disc'>
                    {
                        AWARDS.map(([name, award, color, link], i) => (
                            <li key={i} className='flex space-x-4 items-center'>
                                <div className='flex space-x-2 items-center'>
                                    <p>{name}</p>
                                    <p className={COLORS[color]}>{award}</p>
                                </div>
                                {
                                    link
                                    &&
                                    <Link href={link} className='text-blue-950' target='_blank'><FontAwesomeIcon icon={faLink} className='w-5 h-5' /></Link>
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Career