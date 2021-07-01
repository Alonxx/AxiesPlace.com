import {StyledContainer} from './styled';

const arrayMenu = ['Recently Listed'];

const Nav = () => {
	return (
		<div className='nav'>
			<StyledContainer>
				<div className='div_logo'>
					<div className='logo'>
						<h3>AxiesPlace.com</h3>
					</div>
				</div>
				<div className='div_container'>
					<div className='div_buttons'>
						{arrayMenu &&
							arrayMenu.map((el) => (
								<div className='div_link' key={el}>
									{el}
								</div>
							))}
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

export default Nav;
