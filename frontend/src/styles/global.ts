import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        font-size: 16px;
    }

    h1 {
        text-align: center;
    }

    table {
        width: 100%;
        max-width: 950px;
        margin: 0 auto;
    }

    table th {
        text-align: center;
        font-size: 1.3em;
        background-color: #afafafaf;
    }

    table td {
        text-align: center;
    }

`;

export default GlobalStyle;