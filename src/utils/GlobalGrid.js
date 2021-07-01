import styled from "styled-components";
const GlobalGrid = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-areas:
    "nav     nav    nav"
    "content   content   content"
    "footer footer footer";

  .nav {
    grid-area: nav;
    margin-bottom: 5rem;
  }

  .content {
    grid-area: content;
  }
  .footer {
    grid-area: footer;
  }
`;

export default GlobalGrid;
