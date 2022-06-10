// tsconfig.json 파일을 craco가 제어할 수 있도록 설정하는 파일
// * craco는 웹팩, 바벨 등 다양한 설정파일을 건들 수 있음 -> CRA 커스텀할 수 있는 친구
const CracoAlias = require("craco-alias");

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: "tsconfig",
				baseUrl: "./src",
				tsConfigPath: "./tsconfig.paths.json",
			},
		},
	],
};
