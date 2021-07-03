import {StyledContainer} from './styled';

const Spinner = () => {
	return (
		<StyledContainer>
			<div className='spinner'>
				<div className='double-bounce1'></div>
				<div className='double-bounce2'></div>
			</div>
		</StyledContainer>
	);
};

export default Spinner;
