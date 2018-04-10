import * as actions from '../constants'

const localData = JSON.parse(localStorage.getItem('data'))
let initialState = []

if (localData) {
	initialState = localData
}

const updateLocalStorage = data =>  {
	let storage = JSON.stringify(data);
	localStorage.setItem('data', storage);
}

const WeatherCardReducer = (state = initialState, action) => {
	let data = {}
	let storage

	switch (action.type) {
		case actions.ADD_CARD:
			data = {
				id: action.payload.id,
				date: action.payload.date,
				data: action.data
			}
			storage = [
				...state,
				data
			]
			updateLocalStorage(storage)
			return storage
		case actions.UPDATE_CARD:
			storage = [...state]
			let index = state.findIndex(i => i.id === action.id)
			storage.splice(index, 1)
			data = {
				id: action.id,
				date: action.date,
				data: action.data
			}
			storage.splice(index, 0 , data)
			updateLocalStorage(storage)
			return storage
		case actions.DELETE_CARD:
			storage = state.filter(card => card.id !== action.id)
			updateLocalStorage(storage)
			return storage
		default:
			return state
	}
}

export default WeatherCardReducer