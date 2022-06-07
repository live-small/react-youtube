import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/header";
import Player from "./components/player";
import Videos from "./components/videos";

function App() {
	const [videos, setVideos] = useState(null);

	useEffect(() => {
		// mock server연결 -> setVideos(data)
		const loadVideos = async () => {
			try {
				fetch(
					`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
				)
					.then((response) => response.json())
					.then((data) => setVideos(data.items));
			} catch (error) {
				console.log(error);
			}
		};
		loadVideos();
	}, []);
	// video를 비동기로 받아오니까, 받아오기 전엔 스켈레톤 로딩을 시키는거구나
	return (
		<BrowserRouter>
			<Header onHandleVideos={setVideos} />
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
