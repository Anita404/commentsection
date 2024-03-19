import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/rubik";

export const GlobalStyles = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: #F5F6FA;
        font-family: "Rubik Variable";
        font-size: 16px;
    }

    #root {
        height: 100%;
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
