import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getAxieLatest, getEthPrice} from '../../redux/actions';
import {StyledContainer} from './styled';
import SaleCard from '../../components/SaleCard';
import Filters from '../../components/Filters';

const RecentlyListed = ({getEthPrice, getAxieLatest, axies, ETH, filters}) => {
	const updateAxies = () => {
		getAxieLatest();
		getEthPrice();
	};
	const [timer, setTimer] = useState();

	const timerUpdateAxies = () => {
		setTimer(setInterval(updateAxies, 15000));
	};

	useEffect(() => {
		getAxieLatest();
		getEthPrice();
		timerUpdateAxies();
	}, [getAxieLatest, getEthPrice]);

	return (
		<div className='content'>
			<StyledContainer>
				<div className='title'>
					<p>
						View and buy the Axies you really need in a fast and personalized
						way
					</p>
				</div>
				<div className='filters'>
					<Filters />
				</div>
				<div className='cards'>
					<div className='div_cards'>
						{axies && axies.map((el) => <SaleCard axie={el} ETH={ETH} />)}
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		axies: state.axies,
		ETH: state.ETH,
		filters: state.filters,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAxieLatest: () => dispatch(getAxieLatest()),
		getEthPrice: () => dispatch(getEthPrice()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyListed);
