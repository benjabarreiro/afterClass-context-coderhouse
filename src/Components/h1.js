import React, {useContext} from 'react'
import {Context} from '../Context/Context';

export default function H1() {
	const { prueba } = useContext(Context)
	return (
	<h1>H1 {prueba}</h1>
	)
}
