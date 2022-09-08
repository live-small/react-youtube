import styled from "styled-components";
import { ChannelType } from "types/youtube";

const Container = styled.img`
	border-radius: 50%;
	margin-right: 12px;
`;

export default function ChannelProfile({ channel }: { channel: ChannelType }) {
	return (
		<Container
			alt="channel-profile"
			src={channel.snippet.thumbnails.default.url}
			width="36px"
			height="36px"
		/>
	);
}
