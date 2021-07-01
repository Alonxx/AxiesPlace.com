import {StyledContainer} from './styled';
import AbilitiesCard from '../AbilitiesCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {useState} from 'react';
import {useEffect} from 'react';
import HP from '../../assets/HP.svg';
import MORALE from '../../assets/MORALE.svg';
import SKILL from '../../assets/SKILL.svg';
import SPEED from '../../assets/SPEED.svg';

const arraystats = [
	{img: HP, stat: 'hp'},
	{img: MORALE, stat: 'morale'},
	{img: SKILL, stat: 'skill'},
	{img: SPEED, stat: 'speed'},
];

const SaleCard = ({axie, ETH}) => {
	const [purity, setPurity] = useState(0);
	const months = ['❤️', '💔', '💩', '💤', '🤒', '🤢', '🤑', '😭', 'Grrr...'];

	const random = Math.floor(Math.random() * months.length);

	useEffect(() => {
		const result =
			axie &&
			axie.parts.reduce((acum, part) => {
				if (part.class === axie.class) {
					acum++;
				}
				return acum;
			}, 0);

		setPurity(result);
	}, []);

	return (
		<StyledContainer>
			<div className='container_card'>
				<div className='grid'>
					<div className='stats'>
						{arraystats.map((el) => (
							<span>
								<img src={el.img} alt='stats' />
								<span className='stats_text'>{axie.stats[el.stat]}</span>
							</span>
						))}
					</div>
					<div className='img'>
						<div className='tooltip'>{months[random]}</div>
						<img src={axie.image} alt='axie' />
					</div>
					<div className='id'>#{axie.id}</div>
					<div className='info'>
						Breed Count: {axie.breedCount}/7 Purity: {purity}/6
					</div>
					<div className='price'>
						<h2 className='price_eth'>
							Ξ{(axie.auction && axie.auction.currentPriceUSD / ETH).toFixed(2)}
						</h2>
						<h3 className='price_dollar'> ${axie.auction.currentPriceUSD} </h3>
					</div>

					<div className='cards'>
						{axie.parts &&
							axie.parts.map((el, i) =>
								i > 1 ? (
									<AbilitiesCard
										abilitie={el.abilities[0]}
										clase={el.class === 'Aquatic' ? 'aqua' : el.class}
									/>
								) : null
							)}
					</div>
				</div>
			</div>
		</StyledContainer>
	);
};

export default SaleCard;
