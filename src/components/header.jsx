import { useRef } from "react";
import { ReactComponent as YoutubeLogo } from "../images/youtube.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default function Header({ onSearch }) {
	const inputRef = useRef();
	const onSearchHandler = (event) => {
		event.preventDefault();
		onSearch(inputRef.current.value);
		inputRef.current.value = "";
	};

	return (
		<HeaderLayout>
			<div className="logo">
				<Link to="/">
					<YoutubeLogo />
				</Link>
			</div>
			<form onSubmit={onSearchHandler}>
				<input placeholder="검색" ref={inputRef}></input>
				<button>검색</button>
			</form>
		</HeaderLayout>
	);
}
