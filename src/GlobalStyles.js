import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        height: 100vh;
        font-family: 'Rubik';
        background: hsl(239, 57%, 85%);
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
