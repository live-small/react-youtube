import styled from "styled-components";
import { ThumbnailsType } from "types/youtube";
import { convertISO8601ToTime } from "@components/videoItem/utils";

const Container = styled.div`
	position: relative;

	.duration {
		position: absolute;
		right: 6px;
		bottom: 10px;
		color: white;
		background-color: black;
		font-size: 0.8rem;
		padding: 0.25rem;
		font-weight: 600;
	}
`;

export default function Thumbnails({
	thumbnails,
	duration,
}: {
	thumbnails: ThumbnailsType;
	duration: string;
}) {
	return (
		<Container>
			<img
				alt="thumbnails"
				src={thumbnails.medium.url}
				width={thumbnails.medium.width}
				height={thumbnails.medium.height}
			></img>
			<span className="duration">{convertISO8601ToTime(duration)}</span>
		</Container>
	);
}
