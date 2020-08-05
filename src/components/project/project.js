import React from 'react'
import './project.css'

const Project = (props) => {
  return (
  	<a href={props.link}>
	    <div className='project'>
	      <img className='image'src={props.srcimg} alt={props.altimg}/>
	      <div>
	      	<div className='description'>{props.description}</div>
	      	<div className='stack'>стэк: {props.stack}</div>
	      </div>
	    </div>
  	</a>
  )
}

export default Project