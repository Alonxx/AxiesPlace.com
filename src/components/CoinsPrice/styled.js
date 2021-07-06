import styled from 'styled-components';
export const StyledContainer = styled.div`
	.div_title {
		position: relative;
		bottom: 1.3rem;
		text-align: center;
		h1 {
			font-size: 0.8rem;
		}
	}

	.div_container {
		margin-left: 11.5rem;
		width: 9rem;
		height: 4rem;
		border: 2px solid #036666;
		border-radius: 0.455rem;
		padding: 0.5rem 1rem 1rem 1rem;
		box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		display: flex;
		flex-direction: column;
	}

	.div_prices {
		position: relative;
		bottom: 1.2rem;
	}

	.text {
		font-size: 0.7rem;
		text-align: center;
	}

	.div_eth {
		margin-left: 0.1rem;
	}

	img {
		width: 1rem;
	}

	.img_eth {
		width: 0.7rem;
	}

	@media screen and (max-width: 719px) {
		.div_title {
			position: relative;
			right: 0.5rem;
			bottom: 1.1rem;
			text-align: center;
		}
		.div_container {
			width: 8rem;
			height: 3.5rem;
			padding: 0.2rem 0 1rem 1rem;
		}
	}
`;
