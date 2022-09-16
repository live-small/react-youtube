import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;

	a {
		color: #065fd4;
		padding-right: 3px;
		font-size: 13px;
	}
`;

export default function Tag({ tags }: { tags: string[] }) {
	return (
		<Container>
			{tags.map((tag) => (
				<Link to={`/search/${tag}`} key={tag}>
					#{tag}
				</Link>
			))}
		</Container>
	);
}
