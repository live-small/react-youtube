import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		// styled-component에 있던 DefaultTheme를 확장해서 이용
		color: {
			darkGray: string;
			gray: string;
			black: string;
			blue: string;
		};
	}

	// 다크모드 추가하기**
}
