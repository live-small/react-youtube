import LeftSection from "@components/common/header/left_section";
import RightSection from "@components/common/header/right_section";
import Search from "@components/common/header/search";
import styled from "styled-components";

export default function Header() {
	return (
		<Container>
			<LeftSection />
			<Search />
			<RightSection />
		</Container>
	);
}

const Container = styled.header`
	height: 56px;
	padding: 0 16px;
	width: 100%;
	display: flex;
	align-items: center;
	border-bottom: 0.5px solid gray;
	justify-content: space-between;
`;
