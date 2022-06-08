import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoLayout = styled.article`
	display: flex;
	flex-direction: column;
	width: 320px;
	padding: 0 8px 40px 8px;
	a {
		text-decoration: none;
	}

	.description {
		display: flex;
		flex-direction: column;
		.title {
			font-size: 14px;
			font-weight: 600;
			line-height: 20px;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			color: black;
		}
		.channel-name {
			font-size: 12px;
			font-weight: 400;
			color: gray;
		}
	}
`;

const Video = memo(function Video({ video }) {
	const {
		snippet: { thumbnails, title, channelTitle },
	} = video;

	return (
		<VideoLayout>
			<Link to={`/embed/${video.id}`}>
				<div className="thumbnails">
					<img
						alt="thumbnails"
						src={thumbnails.medium.url}
						width={thumbnails.medium.width}
						height={thumbnails.medium.height}
					></img>
				</div>
				<span className="description">
					<span className="title">{title}</span>
					<span className="channel-name">{channelTitle}</span>
				</span>
			</Link>
		</VideoLayout>
	);
});

export default Video;
