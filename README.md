## 프로젝트 목적

-   open API 이용해 리액트 프로그램 만들기

## 구현할 기능

-   [x] 랜딩페이지는 검색가능한 header, 업로드된 영상들을 볼 수 있다.
    -   [x] header 컴포넌트
    -   [x] 업로드된 영상 컴포넌트 (썸네일, 영상제목, 채널명, 조회수, 업로드 날짜 등이 **세로**로
            위치함)
    -   [x] `연결` mock data
    -   [ ] `연결` youtube api
-   [x] 영상을 클릭하면, 그 영상이 왼쪽에 크게 재생되고, 오른쪽엔 클릭하지 않은 영상들이 리스트 형태로 되어있다.
    -   [ ] 다음에 볼 영상 컴포넌트 (업로드된 영상 컴포넌트와 동일한데, 썸네일은 왼쪽에, 나머지 정보는 오른쪽에 세로로 위치함)
-   [ ] header에 검색 키워드를 넣고 클릭하면, 아래 검색에 맞는 영상들을 볼 수 있다.
    -   [x] `연결` mock data
    -   [ ] `연결` youtube api

## 관계

-   결국, 유튜브 영상을 불러와서 저장 -> 이용하는 곳: 영상 컴포넌트, 다음에 볼 영상 컴포넌트
-   검색으로 저장해놨던 영상 상태 변경

#### 정리: 영상 상태값, 초기화(무작위로 불러옴) -> (이용) 영상 컴포넌트 \*(검색)영상 상태값 변경

## 고민할 부분

-   유튜브 video src를 어떻게 가져오지? https://developers.google.com/youtube/youtube_player_demo 참고
    -   유튜브 video 컴포넌트를 클릭했을 때, onClick 이벤트를 videos에서 받아와서 이용할지, video 컴포넌트 내에서 만들어 이용할까? -> react-router-dom(v6) Link 이용!!
    -   `문제` embed/videoId로 url을 바꾸는데, 현재 url이 embed/videoId일 경우에 다른 동영상으로 할 때, embed/videoId/embed/videoId 이렇게 누적됨
    -   `해결` /embed/videoId 로 해야함.
-   영상 상태값 관리 필요(전역) -> context API 이용 : 전역 상태값 필요한지 모르겠음. 작업해보고 필요할 때 생기면, context 이용
-   유튜브 api 할당량 존재 -> 더미 데이터 만들어서 작업하고, 연결 해보기 -> postman으로 mock server 생성완료!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
