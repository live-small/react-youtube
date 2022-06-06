import React from "react";
import { useEffect, useState } from "react";
import "./app.css";
import Header from "./components/header";
import Videos from "./components/videos";

function App() {
	const [videos, setVideos] = useState(null);

	useEffect(() => {
		// mock server연결 -> setVideos(data)
		const loadVideos = async () => {
			try {
				fetch(
					`https://014cde81-0256-44b7-9107-6c7687cd5edc.mock.pstmn.io/popular/video`
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
		<>
			<Header onHandleVideos={setVideos} />
			{videos && <Videos videos={videos} />}
		</>
	);
}

export default App;
