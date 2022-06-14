import styled from "styled-components";

export default function FilterItem({
	tag,
	isSelected,
	onClickTag,
}: {
	tag: string;
	isSelected: boolean;
	onClickTag: (tag: string) => void;
}) {
	return (
		<Item
			isSelected={isSelected}
			type="button"
			onClick={() => onClickTag(tag)}
		>
			{tag}
		</Item>
	);
}

const Item = styled.button<{ isSelected: boolean }>`
	border: 0.5px solid gray;
	border-radius: 16px;
	padding: 10px;
	font-weight: 400;
	margin: 12px;
	margin-left: 0;
	font-size: 14px;
	color: ${(props) => (props.isSelected ? "white" : "black")};
	background-color: ${(props) =>
		props.isSelected ? "black" : props.theme.color.gray};
	${(props) =>
		!props.isSelected &&
		`:hover {
		background-color: #f0f0f0;
	}`}
`;
