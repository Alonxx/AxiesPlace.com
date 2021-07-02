import logo from '../../assets/logo.png';
import {StyledContainer} from './styled';

const borderColor = {
	Beast: '#ffb812',
	Plant: '#6cc000',
	Aquatic: '#00b8ce',
	Reptile: '#dc8be4',
	Dusk: '#129092',
	Bird: '#ff8bbd',
	Mech: '#c6bdd4',
	Bug: '#ff5341',
	Dawn: '#beceff',
};

const Color = [
	'#ffb812',
	'#6cc000',
	'#00b8ce',
	'#dc8be4',
	'#129092',
	'#ff8bbd',
	'#ff5341',
];
const random = Math.floor(Math.random() * Color.length);

const Logo = () => {
	return (
		<StyledContainer>
			<h3 style={{color: `${Color[random]}`}}>
				AXIES
				<img className='image_logo' src={logo} alt='logo' />
				PLACE
				<span className='version'> BETA</span>
			</h3>
		</StyledContainer>
	);
};

export default Logo;
