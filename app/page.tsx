import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div className='pt-14 space-y-14'>
      <div className='space-y-5'>
        <div className='font-bold text-4xl'>안녕하세요, 개발자 <span className='text-cblue'>임준석</span>이라고 합니다.</div>
        <div className='text-3xl font-medium text-gray-400'>웹/앱 개발에 관심이 많으며, 사람들이 편하고 재미있게 쓸 수 있는 작품들을 개발하려 노력하고 있습니다.</div>
      </div>
      <div className='space-y-8'>
        <div className='font-bold text-3xl'>연락 방법</div>
        <div className='space-y-3'>
          <div className='space-x-5 flex items-center'>
            <FontAwesomeIcon icon={faPhone} className='w-6 h-6' />
            <div className='text-2xl'>010-3054-4357</div>
          </div>
          <div className='space-x-5 flex items-center'>
            <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6' />
            <div className='text-2xl'>limjunseokdev@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}