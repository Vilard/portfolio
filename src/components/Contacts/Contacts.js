import React from 'react'
import whatsapp from '../../icons/whatsapp.svg'
import telegram from '../../icons/telegram.svg'
import phone from '../../icons/phone-call.svg'
import mail from '../../icons/email.svg'
import './contacts.css'
const Contacts = () => {
	return (
		<div className='contact'>
			<div className='row'>
				<div>
					<img className='size-icon' src={telegram} alt='telegram'/>
					<img className='size-icon' src={whatsapp} alt='whatsapp'/>
					<img className='size-icon' src={phone} alt='phone'/>
				</div>
				<div>+7 (960) 296-24-05</div>
			</div>
			<div className='row'>
				<img className='size-icon' src={mail} alt='mail'/>
				<div>vladimir052290@mail.ru</div>
			</div>
		</div>
	)
}

export default Contacts