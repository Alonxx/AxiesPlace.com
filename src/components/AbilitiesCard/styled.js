import styled from 'styled-components';
export const StyledContainer = styled.div`
	margin-left: 0.1rem;
	.div_card {
		.card_name {
			font-size: 0.17rem;
			position: relative;
			top: 0.29rem;
			left: 0.67rem;
			text-shadow: 0 0 1px black;
			-moz-text-shadow: 0 0 1px #000;
			-webkit-text-shadow: 0 0 1px #000;
		}
		.card_energy {
			font-size: 0.4rem;
			position: relative;
			top: -0.1rem;
			right: -0.28rem;
			text-shadow: 0 0 1px black;
			-moz-text-shadow: 0 0 1px #000;
			-webkit-text-shadow: 0 0 1px #000;
		}
		.card_attack {
			background-position: center; /* Center the image */
			background-repeat: no-repeat; /* Do not repeat the image */
			background-size: 100%; /* Resize the background image to cover the entire container */
			width: fit-content;

			font-size: 0.3rem;
			position: relative;
			top: 0rem;
			left: 0rem;
			text-shadow: 0 0 1px red;
			-moz-text-shadow: 0 0 1px #000;
			-webkit-text-shadow: 0 0 1px #000;
		}
		.card_defense {
			background-position: center; /* Center the image */
			background-repeat: no-repeat; /* Do not repeat the image */
			background-size: 100%; /* Resize the background image to cover the entire container */
			width: fit-content;

			font-size: 0.3rem;
			position: relative;
			top: 0.1rem;
			left: 0rem;
			text-shadow: 0 0 1px green;
			-moz-text-shadow: 0 0 1px #000;
			-webkit-text-shadow: 0 0 1px #000;
		}
		.card_description {
			position: relative;
			width: 1.5rem;
			font-size: 0.14rem;
			left: 0.5rem;
			bottom: 0.88rem;
		}
		.card_icon {
			position: relative;
			left: 0.05rem;
			top: 0.1rem;
			width: 0.35rem;
		}
		.background_card {
			position: relative;
			width: 2.5rem;
			height: 3.5rem;
			background-position: center; /* Center the image */
			background-repeat: no-repeat; /* Do not repeat the image */
			background-size: 100%; /* Resize the background image to cover the entire container */
			transition: transform 0.5s;
		}
	}
`;
