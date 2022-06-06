import React from "react";
import styled from "styled-components";
import Video from "./video";

const VideosLayout = styled.main`
	display: flex;
	flex-wrap: wrap;
	padding: 30px;
	justify-content: space-between;
`;

// 여기 각 video에 onClick 이벤트 걸어야함
export default function Videos({ videos }) {
	return (
		<VideosLayout>
			{videos.map((video) => {
				return <Video key={video.id} video={video} />;
			})}
		</VideosLayout>
	);
}
