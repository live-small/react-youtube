declare module "*.svg" {
	import * as React from "react";

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>; // {}로 import하면 ReactComponent로 받아와서 이용

	const src: any;
	export default src;
	// default로 import하면, string으로 이용
	//-> img src로 이용할 수 있어야하는거 아닌가? 왜 에러가 나오지
}
