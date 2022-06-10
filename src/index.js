import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import App from "./app";
import { GlobalStyle } from "./styles/global_style";
import Youtube from "@components/service/youtube";

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
