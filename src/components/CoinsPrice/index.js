import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {StyledContainer} from './styled';
import {setCoins} from '../../redux/actions';
import SLP from '../../assets/SLP.png';
import eth from '../../assets/eth.png';

const CoinsPrice = ({coins, setCoins}) => {
	useEffect(() => {
		setCoins();
	}, [setCoins]);

	return (
		<StyledContainer>
			<div className='div_container'>
				<div className='div_title'>
					<h1>Coins Price</h1>
				</div>
				<div className='div_prices'>
					<div className='div_slp'>
						<img src={SLP} alt='slp' />{' '}
						<span className='text'>{'$' + coins.slp + ' USD'}</span>
					</div>
					<div className='div_eth'>
						<img className='img_eth' src={eth} alt='slp' />{' '}
						<span className='text'>{'$' + coins.eth + ' USD'}</span>
					</div>
				</div>
			</div>
		</StyledContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		coins: state.coins,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setCoins: () => dispatch(setCoins()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinsPrice);
