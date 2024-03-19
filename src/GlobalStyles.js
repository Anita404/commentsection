import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        height: 100vh;
        font-family: 'Rubik';
        background-color: #334253;
    }
    * {
        margin: 0;
        padding: 0;
    }

    input {
        all: unset;
    }

    button {
        all: unset;
    }
`;
