import React from 'react'
import {NavLink} from 'react-router-dom'
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