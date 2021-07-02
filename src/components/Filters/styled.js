import styled, {css} from 'styled-components';

export const Dropwmenu = styled.div``;

export const StyledContainer = styled.div`
	display: flex;
	justify-content: center;

	.div_filter_container {

		width: 24rem;
		height: 3rem;
		border: 1.5px solid #293242;
		border-radius: 5px;
		padding: 0 0 0 0;
		box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		.div_filter_content {
			font-size: 0.6rem;

			.div_filter_class {
				display: flex;
				padding: 0.3rem;
			}
			.div_filter_price {
				display: flex;
				padding: 0.3rem;
			}
		}
	}

	.filter_icon{
		font-size: 0.6rem;
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
			color: yellow;
		`}
	${(props) =>
		props.text === 'Aquatic' &&
		css`
			color: #00b8ce;
		`}
			${(props) =>
		props.text === 'Beast' &&
		css`
			color: #ffb812;
		`}
				${(props) =>
		props.text === 'Bird' &&
		css`
			color: #ff8bbd;
		`}
			 ${(props) =>
		props.text === 'Bug' &&
		css`
			color: #ff5341;
		`}
			${(props) =>
		props.text === 'Dawn' &&
		css`
			color: #beceff;
		`}
			${(props) =>
		props.text === 'Dusk' &&
		css`
			color: #129092;
		`}
			${(props) =>
		props.text === 'Mech' &&
		css`
			color: #c6bdd4;
		`}
			${(props) =>
		props.text === 'Plant' &&
		css`
			color: #6cc000;
		`}
			${(props) =>
		props.text === 'Reptile' &&
		css`
			color: #dc8be4;
		`}
			${(props) =>
		props.text === 'Lowest' &&
		css`
			color: red;
		`}
			${(props) =>
		props.text === 'Highest' &&
		css`
			color: orange;
		`}

		
	&:hover {
		${(props) =>
			props.color === 'All' &&
			css`
				color: yellow;
			`}

		${(props) =>
			props.color === 'Aquatic' &&
			css`
				color: #00b8ce;
			`}
			${(props) =>
			props.color === 'Beast' &&
			css`
				color: #ffb812;
			`}
				${(props) =>
			props.color === 'Bird' &&
			css`
				color: #ff8bbd;
			`}
			 ${(props) =>
			props.color === 'Bug' &&
			css`
				color: #ff5341;
			`}
			${(props) =>
			props.color === 'Dawn' &&
			css`
				color: #beceff;
			`}
			${(props) =>
			props.color === 'Dusk' &&
			css`
				color: #129092;
			`}
			${(props) =>
			props.color === 'Mech' &&
			css`
				color: #c6bdd4;
			`}
			${(props) =>
			props.color === 'Plant' &&
			css`
				color: #6cc000;
			`}
			${(props) =>
			props.color === 'Reptile' &&
			css`
				color: #dc8be4;
			`}
			${(props) =>
			props.color === 'Lowest' &&
			css`
				color: red;
			`}
			${(props) =>
			props.color === 'Highest' &&
			css`
				color: orange;
			`}
	}
`;
