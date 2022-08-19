import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;

	img {
		width: 400px;
	}

	span {
		display: flex;
		flex-direction: column;
		align-items: center;

		.error-status {
			font-size: 50px;
			padding: 20px;
		}
		font-size: 25px;
	}
`;

export default function Error({ message }: { message?: string }) {
	return (
		<Container>
			<img
				src="https://pbs.twimg.com/media/FKBDeCEWYAEBiMJ?format=jpg"
				alt="이미지"
			></img>
			<span>
				<div className="error-status">404</div>
				<div>{message ? message : "존재하지 않는 페이지입니다."}</div>
			</span>
		</Container>
	);
}
