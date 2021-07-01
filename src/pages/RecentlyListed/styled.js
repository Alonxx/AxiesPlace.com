import styled from 'styled-components';
export const StyledContainer = styled.div`
	.div_title {
		text-align: center;
	}
	.div_container_cards {
		display: flex;
		justify-content: center;
		.div_cards {
			margin-top: 3rem;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
			grid-gap: 0.5rem;
			width: 65rem;
			height: fit-content;
		}
	}
`;
