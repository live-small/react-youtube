import React from "react";
import { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/header";
import Player from "./components/videoItem/player";
import Videos from "./components/videoItem/videos";

function App({ youtube }) {
	const [videos, setVideos] = useState(null);

	useEffect(() => {
		youtube
			.getPopularVideo() //
			.then((videos) => setVideos(videos));
	}, [youtube]);

	const onSearch = useCallback(
		(query) => {
			youtube
				.onSearch(query) //
				.then((videos) => setVideos(videos));
		},
		[youtube]
	);
	// video를 비동기로 받아오니까, 받아오기 전엔 스켈레톤 로딩을 시키는거구나
	return (
		<BrowserRouter>
			<Header onSearch={onSearch} />
			<Routes>
				<Route
					path="/"
					element={videos && <Videos videos={videos} />}
				/>
				<Route
					path="/embed/:videoId"
					element={videos && <Player videos={videos} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
