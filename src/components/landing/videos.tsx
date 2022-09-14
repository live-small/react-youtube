import Video from "@components/common/video_item/video";
import VideoExplain from "@components/common/video_item/video-explain";
import styled from "styled-components";
import { VideoType } from "types/youtube";

const VideosLayout = styled.main`
	display: flex;
	flex-wrap: wrap;
	padding: 30px;
	justify-content: space-between;
`;

export default function Videos({ videos }: { videos: VideoType[] }) {
	return (
		<VideosLayout>
			{videos.map((video) => {
				return (
					<Video
						key={video.id}
						video={video}
						explainOfVideo={<VideoExplain video={video} />}
						layout={{
							videoWidth: "320px",
							margin: "0 8px 40px 8px",
						}}
					/>
				);
			})}
		</VideosLayout>
	);
}
