import styled, { useTheme } from "styled-components";
import { ReactComponent as ProfileIcon } from "@images/empty_user.svg";

export default function RightSection() {
	const theme = useTheme(); // 컴포넌트 props으로 theme 이용할 때

	return (
		<Container>
			<div className="img">
				<ProfileIcon height="30px" fill={theme.color.blue} />
			</div>
			<span>로그인</span>
		</Container>
	);
}

const Container = styled.button`
	display: flex;
	align-items: center;
	border: 1px solid ${(props) => props.theme.color.blue};
	color: ${(props) => props.theme.color.blue};
	padding: 5px 8px;
	margin-right: 5px;

	span {
		padding-left: 5px;
	}
`;
