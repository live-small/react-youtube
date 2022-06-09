import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import Youtube from "./components/service/youtube";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global_style";

const youtube = new Youtube();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App youtube={youtube} />
		</ThemeProvider>
	</React.StrictMode>
);
