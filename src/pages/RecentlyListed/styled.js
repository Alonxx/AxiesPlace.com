import styled from 'styled-components';
export const StyledContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: grid;
	grid-template-areas:
		'title title title'
		'filters filters filters'
		'cards cards cards';

	.title {
		grid-area: title;
		text-align: center;
		color: #eaeaeb;
		font-size: 0.7rem;
	}

	.filters {
		grid-area: filters;
		margin-top: 1.5rem;
	}
	.cards {
		grid-area: cards;
		display: flex;
		justify-content: center;
		.div_cards {
			margin-top: -17rem;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
			grid-gap: 0.5rem;
			width: 65rem;
			height: fit-content;
		}
	}

	@media screen and (max-width: 719px) {
		width: 99vw;
		overflow: hidden;
		grid-template-areas:
			'title'
			'filters'
			'cards';
		.title {
			grid-area: title;
			text-align: center;
			color: #eaeaeb;
			font-size: 0.7rem;
		}

		.cards {
			.div_cards {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(20rem, 0fr));
				grid-gap: 0.5rem;
				width: 20rem;
				height: fit-content;
			}
		}
	}
`;
