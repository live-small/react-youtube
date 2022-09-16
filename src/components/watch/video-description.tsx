import styled from "styled-components";
import Tag from "@components/watch/tag";
import ViewcountAndPublishDate from "@components/common/video_item/viewcount-publishdate";

const Container = styled.section`
	.title {
		font-size: 18px;
		margin-top: 6px;
	}

	.viewCount-publishAt {
		display: flex;
		color: gray;
		font-size: 14px;
		padding: 20px 0 20px 0;
	}
`;

export default function VideoDescription({
	title,
	tags,
	viewCount,
	publishedAt,
}: {
	title: string;
	tags: string[];
	viewCount: number;
	publishedAt: string;
}) {
	return (
		<Container>
			<div className="tags-title">
				{tags && <Tag tags={tags.slice(0, 5)} />}
				<h1 className="title">{title}</h1>
			</div>
			<div className="viewCount-publishAt">
				<div>조회수&nbsp;</div>
				<ViewcountAndPublishDate
					viewCount={viewCount}
					publishedAt={publishedAt}
					detail={true}
				/>
			</div>
		</Container>
	);
}
