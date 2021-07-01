import styled from 'styled-components';
export const StyledContainer = styled.div`
	display: flex;
	position: fixed;
	z-index: 1;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 2.8rem;
	overflow: hidden;
	background-color: #161b22;
	box-shadow: 0px 1px 15px 2px rgba(0, 0, 0, 0.2);
	a {
		text-decoration: none;
		color: #eaeaeb;
	}
	.div_container {
		display: flex;
		align-items: center;
		width: 60%;
		justify-content: center;
		font-size: 0.7rem;
		.div_buttons {
			width: 60%;
			display: flex;
			justify-content: space-between;
			.div_link {
				&:hover {
					transform: translateY(-0.1rem);
				}
			}
		}
	}
	.div_logo {
		display: flex;
		justify-content: flex-start;
		width: 30%;
		height: fit-content;
		align-items: center;
		margin-left: 4rem;

		.logo {
			display: flex;
			text-decoration: none;
			color: white;
			text-shadow: 1px 2px 2px black;
		}
	}

	@media (min-width: 720px) and (max-width: 1126px) {
		.div_container {
			.div_buttons {
				margin-left: 8rem;
			}
		}
	}
	@media screen and (max-width: 719px) {
		overflow: hidden;
		.div_container {
			position: absolute;
			width: 90%;
			.div_buttons {
				margin-left: 0;
				width: 90%;
				display: flex;
				justify-content: space-between;
			}
		}
	}
`;
