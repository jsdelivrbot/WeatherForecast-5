import { FETCH_WEATHER } from '../actions/index'

export default function (state=[], action){

	switch (action.type){
		case FETCH_WEATHER:
			// return state.concat([action.paylaod.data])
			console.log(action.payload.data)
			return [action.payload.data, ...state] // concat an array Eg: [city,city,city]

	}
	return state
}