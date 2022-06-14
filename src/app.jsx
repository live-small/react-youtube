import Landing from "./pages/landing";
import Watch from "./pages/watch";
import Search from "./pages/search";
import Header from "@components/common/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App({ youtube }) {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Landing youtube={youtube} />} />
				<Route
					path="search/:query"
					element={<Search youtube={youtube} />}
				/>
				<Route
					path="/watch/:videoId"
					element={<Watch youtube={youtube} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
