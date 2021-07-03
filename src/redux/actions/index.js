import axios from 'axios';
import {
	QUERY_GET_AXIE_LATEST,
	AXIE_API,
	QUERY_GET_ETH,
} from '../../utils/constants';

export const getAxieLatest = () => async (dispatch) => {
	try {
		let body = {
			query: QUERY_GET_AXIE_LATEST,
			variables: {
				auctionType: 'Sale',
				from: 0,
				size: 18,
				sort: 'Latest',
			},
		};
		const res = await axios.post(AXIE_API, body);
		dispatch({
			type: 'GET_AXIE_LATEST',
			payload: res.data.data.axies.results,
		});
	} catch (err) {
		console.log(err);
	}
};

export const getEthPrice = () => async (dispatch) => {
	try {
		let body = {
			query: QUERY_GET_ETH,
		};
		const res = await axios.post(AXIE_API, body);

		dispatch({
			type: 'GET_ETH_PRICE',
			payload: res.data.data.exchangeRate.eth.usd,
		});
	} catch (err) {
		console.log(err);
	}
};

export const setFilters = (filters) => async (dispatch) => {
	dispatch({
		type: 'SET_FILTERS',
		payload: filters,
	});
};
