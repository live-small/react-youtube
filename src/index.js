import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.jsx";
import Youtube from "./components/service/youtube";

const youtube = new Youtube();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App youtube={youtube} />
	</React.StrictMode>
);
