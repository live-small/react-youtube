import styled from "styled-components";
import { ReactComponent as NavIcon } from "@images/nav_bar.svg";
import { ReactComponent as YoutubeLogo } from "@images/youtube.svg";
import { Link } from "react-router-dom";

export default function LeftSection() {
	return (
		<Container>
			<button type="button">
				<NavIcon />
			</button>
			<Link to="/">
				<YoutubeLogo />
			</Link>
		</Container>
	);
}

const Container = styled.div`
	height: 40%;
	display: flex;
	button {
		background-color: white;
	}
	a {
		padding-left: 20px;
	}
`;
