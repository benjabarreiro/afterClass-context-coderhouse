import React, { useContext } from 'react'
import { Context } from '../Context/Context';
import MainContainer from './mainContainer';


export default function Comp1() {
	const { prueba } = useContext(Context)
	return (
		<div>
			Componente 1 - {prueba}
			<MainContainer />
		</div>
	)
}
