import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }

  :root {
    --white: #f5f5f5;
    --vanilla: #F1EDE0;
    --light-blue: #4EA4D7;
    --medium-blue: #3158B3;
    --dark-blue: #16225B;
    --beige: #D2C6B6;
    --black:#0C090C;
    --red: #bc0c3a;
    --light-brown: #9C5236;
    --medium-brown: #6D443C;
    --dark-brown: #3E211D;
    --orange: #BB863C;
    --gray: #445774;
    --green: #0d730d;
    --box-shadow: inset 0 0 4px #000;
  }

  body {
    background-color: var(--white);
    font-family: 'Ubuntu Mono', monospace;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`