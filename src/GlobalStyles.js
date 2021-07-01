import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

* { margin: 0; 
  padding: 0; 
  list-style: none;  
  box-sizing: border-box; }


  body {
    min-height: 100vh;
    background: #0d1117;
    color: #eaeaeb;
    //transition: all 0.50s linear;
    

  }


html {
  font-size: 24px;
  scroll-behavior: smooth;
}



@media (max-width: 1921px) {
  html {
    font-size: 22px;

  }
}

@media (max-width: 1441px) {
  html {
    font-size: 20px;
  }
}



@media (max-width: 1127px) {
  html {
    font-size: 18px;

  }
}

 @media (min-width: 720px) and (max-width: 1126px){
  html {
    font-size: 13.5px;

  }
}

  `;
