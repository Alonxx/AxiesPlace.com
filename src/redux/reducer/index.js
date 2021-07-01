const initialState = {
	axies: [],
	ETH: 0,
	Order: {
		Class: 'All',
		Filter: 'All',
	},
};

const reducer = (state = initialState, {payload, type}) => {
	switch (type) {
		case 'GET_AXIE_LATEST':
			return {
				...state,
				axies: payload,
			};
		case 'GET_ETH_PRICE':
			return {
				...state,
				ETH: payload,
			};
		default:
			return state;
	}
};

export default reducer;
