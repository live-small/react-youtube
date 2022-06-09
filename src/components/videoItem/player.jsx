import { useParams } from "react-router-dom";
import styled from "styled-components";
import Videos from "@/components/videoItem/videos";

const PlayerLayout = styled.main`
	display: grid;
	grid-template-columns: 880px 450px;
	justify-content: center;
	padding-top: 30px;

	.video-player {
		width: 868px;
		height: 488px;
		padding-bottom: 30px;
	}
	.description {
		display: flex;
		flex-direction: column;
		.video-description {
			padding-bottom: 30px;
			border-bottom: 0.2px solid gray;
			.title {
				font-weight: 600;
				font-size: 20px;
				padding-bottom: 5px;
			}
			.publish-time {
				font-size: 12px;
				color: gray;
			}
		}
		.channel {
			padding: 20px 0 0 0;
			.name {
				font-weight: 700;
				font-size: 15px;
				padding-bottom: 20px;
			}
			.more-description {
				font-size: 14px;
			}
		}
	}
`;

const getCurrentAndNextVideo = (allVideos, currentVideoId) => {
	let currentVideo = {};
	const nextVideos = allVideos.filter((video) => {
		if (video.id === currentVideoId) {
			currentVideo = { ...video }; // ! 1depth만 복사되는 얕은복사임 **(수정필요)
		}
		return video.id !== currentVideoId;
	});
	return { currentVideo, nextVideos };
};

export default function Player({ videos }) {
	const { videoId } = useParams();
	const {
		currentVideo: {
			snippet: { title, publishedAt, channelTitle, description },
		},
		nextVideos,
	} = getCurrentAndNextVideo(videos, videoId);

	return (
		<PlayerLayout>
			<article>
				<div className="video-player">
					<iframe
						type="text/html"
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/${videoId}`}
						frameBorder="0"
						title="video"
						allowFullScreen
					/>
				</div>
				<div className="description">
					<div className="video-description">
						<div className="title">{title}</div>
						<span className="publish-time">
							최초 공개: {publishedAt}
						</span>
					</div>
					<div className="channel">
						<div className="name">{channelTitle}</div>
						<div className="more-description">{description}</div>
					</div>
				</div>
			</article>
			<article>
				<span>다음에 볼 영상</span>
				{nextVideos && <Videos videos={nextVideos} />}
			</article>
		</PlayerLayout>
	);
}
