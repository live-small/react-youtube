import styled from "styled-components";
import FilterItem from "@components/common/filter/filterItem";
import { useState } from "react";
import { VideoAndChannelType, Youtube } from "types/youtube";

const filterTag = [
	"인기동영상",
	"FEconf",
	"리액트",
	"타입스크립트",
	"스터디윗미",
	"플레이리스트",
	"디즈니오케스트라",
];

// handle event 여기서 정의 -> 재사용
// - search 호출 -> videoItem 변경 -> recoil으로 전역 관리해보는게 어때?

export default function Filter({
	onSetVideoList,
	youtube,
}: {
	onSetVideoList: (list: VideoAndChannelType[]) => void;
	youtube: Youtube;
}) {
	const [isSelected, setIsSelected] = useState("인기동영상");

	const handleClickTag = (tag: string) => {
		youtube
			.onSearch(tag) //
			.then((list) => onSetVideoList(list));
		setIsSelected(tag);
	};

	return (
		<Container>
			{filterTag.map((tag, key) => (
				<FilterItem
					key={key} // unique key로 바꾸기**
					tag={tag}
					isSelected={tag === isSelected}
					onClickTag={handleClickTag}
				/>
			))}
		</Container>
	);
}

const Container = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 0.5px solid gray;
	user-select: none;
`;
