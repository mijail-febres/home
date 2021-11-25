import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        color: black;
        outline: none;
        padding: 0;
        border: 0;
        font-size: 16px;
        font-family: Roboto, sans-serif;
        font-weight: normal;
        box-sizing: border-box;
    }
`

export const defaultTheme = {
    
    // Colors:
    blackColor: '#121212',
    aquaColor: '#8affc1',
    greenColor: '#329f5b',
    greenColorTransparent: 'rgba(50, 159, 91, 0.75)',
    brightGreenColor: '#5fff67',
    lightGreenColor: '#32b15b',
    darkGreenColor: '#245b55',
    grayColor: '#f5f5f5',
    grayColorTransparent: 'rgba(245, 245, 245, 0.75)',
    grayColorGradient: 'linear-gradient(0deg, rgba(245,245,245,1) 40%, rgba(245,245,245,0.5) 90%)',
    darkGreyColor: '#A5A5A5',
    haloGreen: '#32bf38',

    oldBlueColor: '#5D61F6',
    
    fontSizeS: "10px",
    fontSizeM: "14px",
    fontSizeL: "20px",

}