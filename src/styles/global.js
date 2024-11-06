import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    /* Importando a fonte do Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        color: whitesmoke;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: #2c2c34;
        font-size: 14px;
        font-family: 'Roboto', sans-serif; /* Aplicando a fonte Roboto */
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
