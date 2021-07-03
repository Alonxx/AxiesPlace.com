import styled, {css} from 'styled-components';

export const Dropwmenu = styled.div`
	display: flex;
	justify-content: flex-end;
	position: relative;
	right: 12rem;

	.dropwmenu {
		position: absolute;
		font-size: 0.8rem;
		height: 1.6rem;
		transition: all 200ms linear;
		border-radius: 4px;
		width: 7rem;
		letter-spacing: 1px;
		display: -webkit-inline-flex;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		align-items: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		-ms-flex-pack: center;
		text-align: center;
		border: none;
		background-color: #129092;
		cursor: pointer;
		color: #eaeaeb;
		box-shadow: 0 12px 35px 0 rgba(255, 235, 167, 0.15);
		.icon {
			margin-top: 0.5rem;
		}
	}

	.dropdown-content {
		pointer-events: none;
		cursor: pointer;
		position: relative;
		padding: 0.3rem;
		background-color: #0d1117;
		left: 0rem;
		top: 2.3rem;
		width: 7rem;
		border-radius: 4px;
		box-shadow: 0 14px 35px 0 rgba(9, 9, 12, 0.4);
		z-index: 2;
		opacity: 0;
		transition: all 200ms linear;
		&:after {
			content: '';
			position: absolute;
			top: -1.5%;
			left: 5%;
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
			border-bottom: 8px solid #111;
		}

		.sub_title {
			font-size: 0.8rem;
		}
	}
	.sub_dropdown {
		position: relative;
		width: 90%;
		transition: all 200ms linear;
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
		font-size: 0.65rem;
		border-radius: 2px;
		padding: 5px 0;
		padding-left: 20px;
		padding-right: 15px;
		text-align: left;
		text-decoration: none;
		display: -ms-flexbox;
		display: flex;
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		align-items: center;
		justify-content: space-between;
		-ms-flex-pack: distribute;
		cursor: pointer;
	}

	.show {
		pointer-events: auto;
		transition: all 200ms linear;
		opacity: 1;
		transform: translateY(0);
	}

	@media screen and (max-width: 719px) {
		right: 0;
	}
`;

export const Button = styled.button`
	margin-left: 0.6rem;
	cursor: pointer;
	background-color: Transparent;
	background-repeat: no-repeat;
	border: none;
	cursor: pointer;
	overflow: hidden;
	outline: none;
	color: #eaeaeb;

	${(props) =>
		props.text === 'All' &&
		css`
			color: black;
			background-color: yellow;
		`}
	${(props) =>
		props.text === 'Aquatic' &&
		css`
			background-color: #00b8ce;
		`}
			${(props) =>
		props.text === 'Beast' &&
		css`
			background-color: #ffb812;
		`}
				${(props) =>
		props.text === 'Bird' &&
		css`
			background-color: #ff8bbd;
		`}
			 ${(props) =>
		props.text === 'Bug' &&
		css`
			background-color: #ff5341;
		`}
			${(props) =>
		props.text === 'Dawn' &&
		css`
			background-color: #beceff;
		`}
			${(props) =>
		props.text === 'Dusk' &&
		css`
			background-color: #129092;
		`}
			${(props) =>
		props.text === 'Mech' &&
		css`
			background-color: #c6bdd4;
		`}
			${(props) =>
		props.text === 'Plant' &&
		css`
			background-color: #6cc000;
		`}
			${(props) =>
		props.text === 'Reptile' &&
		css`
			background-color: #dc8be4;
		`}
			${(props) =>
		props.text === 'Lowest' &&
		css`
			background-color: red;
		`}
			${(props) =>
		props.text === 'Highest' &&
		css`
			background-color: orange;
		`}

		
	&:hover {
		${(props) =>
			props.color === 'All' &&
			css`
				color: black;
				background-color: yellow;
			`}

		${(props) =>
			props.color === 'Aquatic' &&
			css`
				background-color: #00b8ce;
			`}
			${(props) =>
			props.color === 'Beast' &&
			css`
				background-color: #ffb812;
			`}
				${(props) =>
			props.color === 'Bird' &&
			css`
				background-color: #ff8bbd;
			`}
			 ${(props) =>
			props.color === 'Bug' &&
			css`
				background-color: #ff5341;
			`}
			${(props) =>
			props.color === 'Dawn' &&
			css`
				background-color: #beceff;
			`}
			${(props) =>
			props.color === 'Dusk' &&
			css`
				background-color: #129092;
			`}
			${(props) =>
			props.color === 'Mech' &&
			css`
				background-color: #c6bdd4;
			`}
			${(props) =>
			props.color === 'Plant' &&
			css`
				background-color: #6cc000;
			`}
			${(props) =>
			props.color === 'Reptile' &&
			css`
				background-color: #dc8be4;
			`}
			${(props) =>
			props.color === 'Lowest' &&
			css`
				background-color: red;
			`}
			${(props) =>
			props.color === 'Highest' &&
			css`
				background-color: orange;
			`}
	}
`;
