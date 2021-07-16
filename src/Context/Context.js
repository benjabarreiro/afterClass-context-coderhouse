import React, { createContext } from 'react';

export const Context = createContext()

export const ContextProvider = (props) => {

	const prueba = 'hola';

	const pruebaFunction = (a, b) => {
		if(exist(a, b)) {
			alert(`El parametro a es ${a} y el parametro b es ${b}`);
		} else {
			alert('No hay parámetros')
		}
	}

	const exist = (param, param2) => {
		if(param && param2) {
			console.log('existen!')
		}
	}
	return (
		<Context.Provider value={{prueba, pruebaFunction}}>
			{props.children}
		</Context.Provider>
	)
}