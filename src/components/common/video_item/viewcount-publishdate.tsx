import styled from "styled-components";
import {
	getDateFormat,
	getGapTimeCurrent,
	numberIntoUnit,
} from "@components/service/utils";

const Container = styled.div`
	display: flex;

	.divide-dot {
		padding: 0 6px 0 6px;
	}
`;

export default function ViewcountAndPublishDate({
	viewCount,
	publishedAt,
	detail,
}: {
	viewCount: number;
	publishedAt: string;
	detail?: boolean;
}) {
	return (
		<Container>
			{detail ? (
				<>
					<div>{Number(viewCount).toLocaleString()}회</div>
					<span className="divide-dot"> · </span>
					<div>{getDateFormat(publishedAt)}</div>
				</>
			) : (
				<>
					<div>{numberIntoUnit(viewCount)}</div>
					<span className="divide-dot"> · </span>
					<div>{getGapTimeCurrent(publishedAt)} 전</div>
				</>
			)}
		</Container>
	);
}
