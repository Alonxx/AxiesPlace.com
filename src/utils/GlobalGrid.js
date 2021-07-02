import styled from 'styled-components';
const GlobalGrid = styled.div`
	width: 100%;
	height: fit-content;
	display: grid;
	grid-template-areas:
		'nav     nav    nav'
		'news    news    news'
		'content   content   content'
		'footer footer footer';

	.nav {
		grid-area: nav;
		margin-bottom: 0.2rem;
	}

	.news {
		grid-area: news;
		margin-bottom: 3rem;
	}

	.content {
		grid-area: content;
	}
	.footer {
		grid-area: footer;
	}
`;

export default GlobalGrid;
