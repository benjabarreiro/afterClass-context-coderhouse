import React, { useContext } from 'react'
import H1 from './h1.js';
import { Context } from '../Context/Context'

export default function MainContainer({ children }) {
	const { pruebaFunction, prueba } = useContext(Context)
 	return (
		<div>
			<H1 />
			<p onClick={() => pruebaFunction()}>Haz click aquí</p>
			{children}
			<span>Span{prueba}</span>
		</div>
	)
}
