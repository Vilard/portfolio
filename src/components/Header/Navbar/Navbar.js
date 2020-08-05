import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	return (
		<nav>
			<NavLink to='/portfolio'>Портфолио</NavLink>
			<NavLink to='/contacts'>Контакты</NavLink>
		</nav>
	)
}

export default Navbar