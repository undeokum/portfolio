import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCode, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const LINK_ICONS = [faPhone, faEnvelope, faInstagram, faCode]

const Links = () => {
    return (
        <div>
            {
                LINK_ICONS.map((n, i) => <FontAwesomeIcon icon={n} key={i} />)
            }
        </div>
    )
}

export default Links