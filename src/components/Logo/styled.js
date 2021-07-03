import styled from 'styled-components';
export const StyledContainer = styled.div`
	display: flex;
	width: fit-content;
	text-decoration: none;
	color: white;
	text-shadow: 1px 2px 2px black;

	display: flex;
	justify-content: flex-start;
	position: relative;
	bottom: 0.5rem;
	width: 30%;
	height: fit-content;
	align-items: center;
	margin-left: 4rem;

	.logo_description {
		color: whitesmoke;
		font-size: 0.4rem;
		text-shadow: 0;
	}

	.image_logo {
		position: relative;
		width: 2.3rem;
		bottom: -0.5rem;
	}

	.version {
		font-size: 0.5rem;
		position: relative;
		bottom: -0.3rem;
		right: 0rem;
	}

	@media screen and (max-width: 719px) {
	
		display: flex;
		justify-content: center;
		text-align: center;
		width: 100%;
		margin-left: 0rem;
	}
`;
