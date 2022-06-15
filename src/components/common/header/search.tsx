import { useRef, useState } from "react";

import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "@images/delete_button.svg";
import { ReactComponent as SearchIcon } from "@images/search.svg";
import { useNavigate } from "react-router-dom";

export default function Search() {
	const navigate = useNavigate();
	const inputRef = useRef<HTMLInputElement>(null);
	const [isWriting, setIsWriting] = useState(false);
	const [isFocus, setIsFocus] = useState(false);

	const handleWriting = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsWriting(e.target.value.length > 0 ? true : false);
	};
	const handleDeleteBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
		setIsWriting(false);
		inputRef.current!.value = "";
	};
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!inputRef.current) return;
		navigate(`/search/${inputRef.current.value}`);
	};

	return (
		<Container
			isWriting={isWriting}
			isFocus={isFocus}
			onSubmit={handleSearch}
			onFocus={() => setIsFocus(true)}
			onBlur={() => setIsFocus(false)}
		>
			<input placeholder="검색" onChange={handleWriting} ref={inputRef} />
			<button
				className="delete-button"
				type="button"
				onClick={handleDeleteBtn}
			>
				<DeleteIcon />
			</button>
			<button className="search-button" type="submit">
				<SearchIcon />
			</button>
		</Container>
	);
}

const Container = styled.form<{ isWriting: boolean; isFocus: boolean }>`
	display: flex;
	flex: 0 1 35%;
	border: ${(props) =>
		props.isFocus
			? `1px solid ${props.theme.color.blue}`
			: "0.5px solid gray"};
	height: 70%;
	border-radius: 2px;

	input {
		flex: 1;
		padding: 10px 2px;
		font-size: 16px;
	}

	input:focus {
		outline: none;
	}

	button {
		padding: 5px;
	}

	.delete-button {
		padding: 7px;
		display: ${(props) => (props.isWriting ? "block" : "none")};
	}

	.search-button {
		background-color: ${(props) => props.theme.color.gray};
		border-left: 0.5px solid gray;
		padding: 5px 15px;
	}

	.search-button:hover {
		background-color: #f0f0f0;
	}
`;
