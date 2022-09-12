import styled from "styled-components";
import { getGapTimeCurrent, numberIntoUnit } from "@components/videoItem/utils";

const Container = styled.div`
	display: flex;

	.divide-dot {
		padding: 0 6px 0 6px;
	}
`;

export default function ViewcountAndPublishDate({
	viewCount,
	publishedAt,
}: {
	viewCount: number;
	publishedAt: string;
}) {
	return (
		<Container>
			<div>{numberIntoUnit(viewCount)}</div>
			<span className="divide-dot"> · </span>
			<div>{getGapTimeCurrent(publishedAt)} 전</div>
		</Container>
	);
}
