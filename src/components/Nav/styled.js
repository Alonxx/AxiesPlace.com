import styled from 'styled-components';
export const StyledContainer = styled.div`
	display: flex;
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

	@media screen and (max-width: 719px) {
		width: 99vw;
		overflow: hidden;
		.div_container {
			width: 0%;
			.div_buttons {
				display: none;
			}
		}
	}
`;
