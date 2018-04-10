import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import WeatherCardReducer from './weatherCard'

const reducer = combineReducers({
 	weatherCards: WeatherCardReducer,
	 routing: routerReducer
})

export default reducer