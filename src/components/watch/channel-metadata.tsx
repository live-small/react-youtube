import { numberIntoUnit } from "@components/service/utils";
import ChannelProfile from "@components/common/video_item/channel-profile";
import { ChannelType } from "types/youtube";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 16px 0 12px 0;

	.metadata {
		display: flex;
		align-items: center;

		.id-subscriber {
			display: flex;
			flex-direction: column;

			.channel-id {
				font-weight: 600;
				font-size: 15px;
				line-height: 20px;
			}

			.subscriber {
				color: gray;
				font-size: 13px;
			}
		}
	}
`;

export default function ChannelMetadata({ channel }: { channel: ChannelType }) {
	const [isSubscribe, setIsSubscribe] = useState<boolean>(false);

	return (
		<Container>
			<div className="metadata">
				<ChannelProfile
					channel={channel}
					width={"48px"}
					height={"48px"}
				/>
				<div className="id-subscriber">
					<span className="channel-id">{channel.snippet.title}</span>
					<span className="subscriber">
						{numberIntoUnit(
							Number(channel.statistics.subscriberCount)
						)}
						명
					</span>
				</div>
			</div>
			<button
				className="subscribe-button"
				onClick={() => setIsSubscribe(!isSubscribe)}
			>
				{isSubscribe ? "구독중" : "구독"}
			</button>
		</Container>
	);
}
