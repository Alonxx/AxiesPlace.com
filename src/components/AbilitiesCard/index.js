import {StyledContainer} from './styled';

const AbilitiesCard = ({abilitie, clase}) => {
	const {
		attack,
		defense,
		description,
		energy,
		name,
		backgroundUrl,
		effectIconUrl,
	} = abilitie;

	return (
		<StyledContainer>
			<div className='div_card card'>
				<div
					className='background_card
				'
					style={{backgroundImage: `url(${backgroundUrl})`}}
				>
					<h2 className='card_name'>{name}</h2>
					<h2 className='card_energy'>{energy}</h2>
					<h2
						className='card_attack'
						style={{
							backgroundImage: `url(https://marketplace.axieinfinity.com/static/image/card-material/bg-${clase.toLowerCase()}.png)`,
						}}
					>
						{attack}
					</h2>
					<h2
						className='card_defense'
						style={{
							backgroundImage: `url(https://marketplace.axieinfinity.com/static/image/card-material/bg-${clase.toLowerCase()}.png)`,
						}}
					>
						{defense}
					</h2>
					<img className='card_icon' src={effectIconUrl} alt='card-icon' />

					<h2 className='card_description'>{description}</h2>
				</div>
			</div>
		</StyledContainer>
	);
};

export default AbilitiesCard;
