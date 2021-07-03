import {StyledContainer} from './styled';
import Logo from '../Logo';
const arrayMenu = ['Recently Listed'];

const Nav = () => {
	return (
		<div className='nav'>
			<StyledContainer>
				<Logo />
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
