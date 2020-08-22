import React from 'react'
import Navbar from './Navbar/Navbar'
import './header.css'


const Header = () => {
	return (
		<header>
			<div className='name'>
				Сучков Владимир
			</div>
			<Navbar/>
		</header>
	)
}

export default Header