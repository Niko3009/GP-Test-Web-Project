import { createGlobalStyle } from 'styled-components'

//     name: 'dark',
//     colorBasic: '#181818',
//     colorN1: '#ffffff',
//     colorN2: '#1C1C1C',
//     colorN3: '#2e2e2e',

export default createGlobalStyle`

@font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng');
    font-weight: 400;
    font-style: normal;
};

html, body {          
    background-color: #1C1C1C;

    width: 100%;
    height: 100%;   
    
    color: #ffffff;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif, 'Courier New', monospace;
    font-family: 'StratosSkyeng', sans-serif;
    


    /* scrollbar */
    * {
        scrollbar-width: thin;
        &::-webkit-scrollbar {
            width: 4px;
            height: 5px;
        }
        &::-webkit-scrollbar-track {
            border-radius: 8px;
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #ffffff;
            border-radius: 4px;
            border: 0px solid transparent;
        }
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    *:before,
    *:after {
        box-sizing: border-box;
    }
}

a {
    color: inherit;  
    text-decoration: none;
    &, &:visited{
    text-decoration: none;
    cursor: pointer;
    }
}

ul li {
    list-style: none;
}

button {
    cursor: pointer;
}
`
