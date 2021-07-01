import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getAxieLatest, getEthPrice} from '../../redux/actions';
import {StyledContainer} from './styled';
import SaleCard from '../../components/SaleCard';

const RecentlyListed = ({getEthPrice, getAxieLatest, axies, ETH}) => {
	useEffect(() => {
		getAxieLatest();
		getEthPrice();
	}, [getAxieLatest, getEthPrice]);
	console.log(axies);

	return (
		<div className='content'>
			<StyledContainer>
				<div className='div_title'>
					<h2>AXIES RECENTLY LISTED</h2>
					<p>Los Axies mas nuevos</p>
				</div>
				<div className='div_container_cards'>
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
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAxieLatest: () => dispatch(getAxieLatest()),
		getEthPrice: () => dispatch(getEthPrice()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyListed);
