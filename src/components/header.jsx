import React from "react";
import { ReactComponent as YoutubeLogo } from "../images/youtube.svg";
import styled from "styled-components";

const HeaderLayout = styled.header`
	background-color: white;
	height: 56px;
	padding: 0 16px;
	width: 100%;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	border-bottom: 0.5px solid gray;

	.logo {
		height: 22px;
	}

	form {
		width: 400px;
		padding-left: 250px;
		display: flex;
		input {
			flex: 1;
			border-radius: 1px;
			border: 0.5px solid gray;
			padding: 10px 1px;
		}
		button {
			padding: 10px;
			border: none;
		}
	}
`;

export default function Header() {
	const onSearchHandler = (event) => {
		event.preventDefault();
		// 유튜브 search api 호출 -> 받아와서 -> 상태값 변경
	};

	return (
		<HeaderLayout>
			<div className="logo">
				<YoutubeLogo />
			</div>
			<form onSubmit={onSearchHandler}>
				<input placeholder="검색"></input>
				<button>검색</button>
			</form>
		</HeaderLayout>
	);
}
