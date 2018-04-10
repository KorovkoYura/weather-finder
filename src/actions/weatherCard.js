import * as actions from '../constants'

const API_KEY = 'ac3e83a1e2adc960896141e978235b4e';

export const addCard = name => {
	return async dispatch => {
		await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`)
		.then(res => res.json())
		.then(data => {
			if (data.cod === 200) {
				return dispatch({
					type:  actions.ADD_CARD,
					payload: {
						id: Date.now(),
						date: Date.now()
					},
					data
				})
			} else {
				alert('The city was not found. Please try again.')
			}
		}).catch(err => console.log(err))
	}
}

export const updateCard = (id, name) => {
	return async dispatch => {
		const api_data = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`)).json()

		return dispatch({
			type: actions.UPDATE_CARD,
			id,
			date: Date.now(),
			data: {
				...api_data
			}
		})
	}
}

export const deleteCard = id => {
	return {
		type: actions.DELETE_CARD,
		id
	}
}