import React from "react";
import styled from "styled-components";

const VideoLayout = styled.article`
	display: flex;
	flex-direction: column;
	width: 320px;
	padding: 0 8px 40px 8px;

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
		}
		.channel-name {
			font-size: 12px;
			font-weight: 400;
		}
	}
`;

export default function Video({ video }) {
	const { snippet } = video;
	return (
		<VideoLayout>
			<div className="thumbnails">
				<img
					alt="thumbnails"
					src={snippet.thumbnails.medium.url}
					width={snippet.thumbnails.medium.width}
					height={snippet.thumbnails.medium.height}
				></img>
			</div>
			<span className="description">
				<span className="title">{snippet.title}</span>
				<span className="channel-name">{snippet.channelTitle}</span>
			</span>
		</VideoLayout>
	);
}
