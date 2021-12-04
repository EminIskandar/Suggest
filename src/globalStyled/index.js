import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

*{
    box-sizing: unset;
}
body,h1,h2,h3,h4,h5,h6,ul,li,p{
    margin: 0;
    padding: 0; 
    color: #fff;
    font-family: 'Roboto', sans-serif; 
} 
a{
    text-decoration: none; 
}
li{
    list-style: none;
}
input{
    font-family: 'Roboto', sans-serif; 
}
button:focus, input:focus{
    outline: none;
    box-shadow: none;
}
button{
    padding: 0;
    cursor: pointer;
}
body{ 
    background-color: #181818; 
    font-family: 'Roboto', sans-serif;  
}   

`

export default GlobalStyle;