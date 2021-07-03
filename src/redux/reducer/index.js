import {getFilterPrice, getFilterClass} from '../../utils/methods';

const initialState = {
	axies: false,
	axiesOrigin: [],
	ETH: 0,
	filters: {
		class: 'All',
		price: 'All',
	},
};

const reducer = (state = initialState, {payload, type}) => {
	switch (type) {
		case 'GET_AXIE_LATEST':
			return {
				...state,
				axiesOrigin: payload,
				axies: getFilterPrice(
					state.filters.price,
					getFilterClass(state.filters.class, payload)
				),
			};
		case 'GET_ETH_PRICE':
			return {
				...state,
				ETH: payload,
			};
		case 'SET_FILTERS':

			return {
				...state,
				filters: {
					class: payload.class,
					price: payload.price,
				},
				axies: getFilterPrice(
					payload.price,
					getFilterClass(payload.class, state.axiesOrigin)
				),
			};
		default:
			return state;
	}
};

export default reducer;
