import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='space-y-16 pt-10 flex flex-col h-screen justify-center'>
      <div className='space-y-3'>
        <div className='font-bold text-3xl'>안녕하세요, 개발자 <span className='text-cblue'>임준석</span>이라고 합니다.</div>
        <div className='text-2xl font-medium text-gray-400'>웹/앱 개발과 UI/UX 디자인에 관심이 많으며,<br />사람들이 편하고 재미있게 쓸 수 있는 작품들을 개발하려 노력하고 있습니다.</div>
      </div>
      <div className='space-y-5'>
        <div className='font-semi_bold text-2xl'>연락 방법</div>
        <div className='space-y-3'>
          <div className='space-x-5 flex items-center'>
            <FontAwesomeIcon icon={faPhone} className='w-5 h-5 text-cblue' />
            <div className='text-xl'>010-3054-4357</div>
          </div>
          <div className='space-x-5 flex items-center'>
            <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5 text-cblue' />
            <div className='text-xl'>limjunseokdev@gmail.com</div>
          </div>
        </div>
      </div>
      <div className='px-16'>
        <Image src='/img/designed-banner.svg' alt='banner' width={100} height={100} className='w-full border rounded-md' />
      </div>
    </div>
  )
}