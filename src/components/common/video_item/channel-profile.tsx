import styled from "styled-components";
import { ChannelType } from "types/youtube";

const Container = styled.img`
	border-radius: 50%;
	margin-right: 12px;
`;

export default function ChannelProfile({
	channel,
	width,
	height,
}: {
	channel: ChannelType;
	width?: string;
	height?: string;
}) {
	return (
		<Container
			alt="channel-profile"
			src={channel.snippet.thumbnails.default.url}
			width={width || "36px"}
			height={height || "36px"}
		/>
	);
}
