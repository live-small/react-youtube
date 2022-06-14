import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset} // 브라우저마다 다른 초기설정값 reset 시켜줌 

* {
	box-sizing: border-box;
	font-family: "Roboto","Arial",sans-serif;
}

a {
	text-decoration: none;
	color: ${(props) => props.theme.color.blue};
}

button {
	border: none; 
	cursor: pointer; 
	background-color: white;
}

input {
	border: none; 
}

main {
	background-color: ${(props) => props.theme.color.gray};
}

`;
