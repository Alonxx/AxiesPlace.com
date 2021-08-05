import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getAxieLatest, getEthPrice} from '../../redux/actions';
import {StyledContainer} from './styled';
import SaleCard from '../../components/SaleCard';
import Filters from '../../components/Filters';
import Spinner from '../../components/Spinner';
import CoinsPrice from '../../components/CoinsPrice';

const RecentlyListed = ({getEthPrice, getAxieLatest, axies, ETH, filters}) => {
	const updateAxies = () => {
		getAxieLatest();
		getEthPrice();
	};
	const [timer, setTimer] = useState();

	const timerUpdateAxies = () => {
		setTimer(setInterval(updateAxies, 10000));
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
						See the last 18 axies for sale, in real time!
						<br /> you can filter by class and price. <br />
						The list is updated each time Axies is put on sale.
					</p>
				</div>
				<div className='coins'>
					<CoinsPrice />
				</div>
				<div className='filters'>
					<Filters />
				</div>
				<div className='cards'>
					<div className='div_cards'>
						{axies ? (
							axies.map((el, i) => <SaleCard key={i} axie={el} ETH={ETH} />)
						) : (
							<Spinner />
						)}
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
