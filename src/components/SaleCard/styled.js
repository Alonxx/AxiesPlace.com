import styled from 'styled-components';
export const StyledContainer = styled.div`
	display: flex;
	justify-content: center;

	a {
		color: #eaeaeb;
		text-decoration: none;
	}

	.tooltip {
		border: 1px solid whitesmoke;
		font-size: 0.67rem;
		visibility: hidden;
		width: 2rem;
		height: 1.5rem;
		background: #eaeaeb;
		color: #1c1c1c;
		text-align: center;
		border-radius: 6px;
		padding: 0.3rem 0.3rem 0 0.3rem;
		position: absolute;
		z-index: 1;
		//bottom: 85%;
		bottom: 100%;
		left: 25%;
		opacity: 0;
		transition: opacity 0.3s;
		box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);

		&:after {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			margin-left: -0.5rem;
			border-width: 0.5rem;
			border-style: solid;
			border-color: whitesmoke transparent transparent transparent;
		}
	}

	.container_card {
		background: #1a202c;
		width: 20rem;
		height: 5rem;
		border: 1.5px solid #293242;
		border-radius: 0.455rem;
		padding: 0 0 0 0;
		box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		&:hover {
			.img {
				animation: float 4s ease-in-out infinite;
			}
		}

		.grid {
			width: 100%;
			height: fit-content;
			display: grid;
			grid-template-areas:
				'img info cards'
				'id price cards'
				'stats stats stats';

			.stats {
				grid-area: stats;
				width: 9rem;
				height: 1rem;
				display: flex;
				font-size: 0.5rem;
				position: relative;
				bottom: 2.4rem;
				left: 10.2rem;
				.stats_text {
					position: relative;
					bottom: 2.1rem;
					left: 1rem;
				}
				img {
					width: 2rem;
				}
			}

			.cards {
				grid-area: cards;
				display: flex;
				width: 10rem;
				position: relative;
				right: 1.2rem;
				top: 0.3rem;
			}

			.card {
				transition: all 0.2s linear;
				&:hover {
					transform: scale(2.8);
					position: relative;
					z-index: 1;
				}
			}

			.img {
				grid-area: img;
				position: relative;
				z-index: 0;
				top: 0.1rem;
				right: 0.7rem;

				img {
					width: 5.2rem;
					height: auto;
				}
				&:hover .tooltip {
					visibility: visible;
					opacity: 1;
				}
			}

			.id {
				grid-area: id;
				font-size: 0.5rem;
				position: relative;
				bottom: 0.4rem;
				left: 0.5rem;
			}
			.info {
				width: 5rem;
				grid-area: info;
				font-size: 0.4rem;
				position: relative;
				right: 1rem;
				top: 0.5rem;
			}

			.price {
				grid-area: price;
				display: flex;
				flex-direction: column;
				position: relative;
				right: 1rem;
				bottom: 2rem;
				.price_eth {
					font-size: 0.7rem;
				}
				.price_dollar {
					color: #838ea3;
					font-size: 0.6rem;
				}
			}
		}

		.shop_icon {
			display: none;
			position: relative;
			bottom: 4.4rem;
			left: 7rem;
			font-size: 1rem;
		}

		@keyframes float {
			0% {
				transform: translatey(0px);
			}
			50% {
				transform: translatey(-15px);
			}
			100% {
				transform: translatey(0px);
			}
		}
	}

	@media screen and (max-width: 719px) {
		.container_card {
			.shop_icon {
				display: block;
			}
		}
	}
`;
