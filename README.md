## 프로젝트 목적

-   open API 이용해 리액트 프로그램 만들기

## 구현할 기능

-   [x] 랜딩페이지는 검색가능한 header, 업로드된 영상들을 볼 수 있다.
    -   [x] header 컴포넌트
    -   [x] 업로드된 영상 컴포넌트 (썸네일, 영상제목, 채널명, 조회수, 업로드 날짜 등이 **세로**로
            위치함)
    -   [x] `연결` mock data
    -   [x] `연결` youtube api
-   [x] 영상을 클릭하면, 그 영상이 왼쪽에 크게 재생되고, 오른쪽엔 클릭하지 않은 영상들이 리스트 형태로 되어있다.
    -   [ ] 다음에 볼 영상 컴포넌트 (업로드된 영상 컴포넌트와 동일한데, 썸네일은 왼쪽에, 나머지 정보는 오른쪽에 세로로 위치함)
-   [x] header에 검색 키워드를 넣고 클릭하면, 아래 검색에 맞는 영상들을 볼 수 있다.
    -   [x] `연결` mock data
    -   [x] `연결` youtube api

## 추가 기능

-   [ ] 스켈레톤 로딩
-   [ ] 무한 스크롤(영상) - nextToken 이용?
-   [ ] 렌더링 줄이기

## 관계

-   결국, 유튜브 영상을 불러와서 저장 -> 이용하는 곳: 영상 컴포넌트, 다음에 볼 영상 컴포넌트
-   검색으로 저장해놨던 영상 상태 변경

#### 정리: 영상 상태값, 초기화(무작위로 불러옴) -> (이용) 영상 컴포넌트 \*(검색)영상 상태값 변경

## 구현 중 고민

-   유튜브 api 할당량 존재 -> 더미 데이터 만들어서 작업하고, 연결 해보기 -> postman으로 mock server 생성완료!
-   영상 상태값 관리 필요(전역) -> context API 이용 : 전역 상태값 필요한지 모르겠음. 작업해보고 필요할 때 생기면, context 이용
-   유튜브 video src를 어떻게 가져오지? https://developers.google.com/youtube/youtube_player_demo 참고

    -   유튜브 video 컴포넌트를 클릭했을 때, onClick 이벤트를 videos에서 받아와서 이용할지, video 컴포넌트 내에서 만들어 이용할까? -> react-router-dom(v6) Link 이용!!
    -   `문제` embed/videoId로 url을 바꾸는데, 현재 url이 embed/videoId일 경우에 다른 동영상으로 할 때, embed/videoId/embed/videoId 이렇게 누적됨
    -   `해결` /embed/videoId 로 해야함.

-   API key를 어떻게 보관해야.. 깃허브에 안보일 수 있지? api 키 저장파일을 gitignore에 올리고, 변수로 받아와서 url에 넣으면 되지 않을까?

    -   api 키 저장파일은 어떤거로? `.env`
    -   `문제` 근데.. network > request에선 api키를 확인할 수 있다. -> 이것도 안보이게 하려면 ?!
    -   `문제` gh-pages로 배포하니까 build 파일에 api키 노출됨 -> 음.. 일단 다른거로 배포해보자 -> netlify

-   랜딩페이지에서 보여질 video는, 인기있는 영상들(video api 이용)

    -   검색한 후에 보여질 video는, 검색결과로 나온 영상들(search api 이용)
    -   동일한 Video 컴포넌트를 이용하려고 했는데, video data form이 다르다.
    -   컴포넌트를 확장해서 재사용하고 싶은데...어떻게 하지 ? -> 검색결과를 받아올 때, id 타입을 통일시켜 video 상태값에 저장하기 !

        ```javascript
        // response type of video api
        {
        	"kind": "youtube#video",
        	"etag": "9hhzh23Mij22XnTxsST-uhU69Lc",
        	"id": "jaNaWklhUHQ",
        	"snippet": {
        	"publishedAt": "2022-06-06T15:00:31Z",
        	"channelId": "UCjn-VbcIkAeXQKCmLJV8YwQ",
        	"title": "칠레 전 하이라이트 | 2022 축구 국가대표 평가전 대한민국 vs 칠레 하이라이트 | 디지털 독점 생중계 | 쿠팡플레이 | 쿠팡",
        	"description": "🇰🇷 대한민국 2 - 0 칠레 🇨🇱\n\n2022 축구 국가대표 평가전 하이라이트 더 보고 싶다면? \n지금 쿠팡플레이에서 확인하기!\n🚩https://coupangplay.app.link/0m52ZHyIDqb\n\n인기 드라마, 예능, 스포츠 중계까지\n쿠팡플레이에서 지금 플레이하세요\n\n#칠레 #국가대표평가전 #쿠팡플레이 #쿠팡",
        	"thumbnails": {
        	"default": {
        		"url": "https://i.ytimg.com/vi/jaNaWklhUHQ/default.jpg",
        		"width": 120,
        		"height": 90
        	},
        	"medium": {
        		"url": "https://i.ytimg.com/vi/jaNaWklhUHQ/mqdefault.jpg",
        		"width": 320,
        		"height": 180
        	},
        	"high": {
        		"url": "https://i.ytimg.com/vi/jaNaWklhUHQ/hqdefault.jpg",
        		"width": 480,
        		"height": 360
        	},
        	"standard": {
        		"url": "https://i.ytimg.com/vi/jaNaWklhUHQ/sddefault.jpg",
        		"width": 640,
        		"height": 480
        	},
        	"maxres": {
        		"url": "https://i.ytimg.com/vi/jaNaWklhUHQ/maxresdefault.jpg",
        		"width": 1280,
        		"height": 720
        	}
        	},
        	"channelTitle": "쿠팡플레이 Coupang Play",
        	"tags": [
        	"축구",
        	"하이라이트",
        	"쿠팡플레이",
        	"칠레전",
        	"칠레",
        	"대한민국",
        	"국가대표",
        	"평가전",
        	"손흥민",
        	"정우영",
        	"황희찬",
        	"골 장면"
        	],
        	"categoryId": "24",
        	"liveBroadcastContent": "none",
        	"localized": {
        	"title": "칠레 전 하이라이트 | 2022 축구 국가대표 평가전 대한민국 vs 칠레 하이라이트 | 디지털 독점 생중계 | 쿠팡플레이 | 쿠팡",
        	"description": "🇰🇷 대한민국 2 - 0 칠레 🇨🇱\n\n2022 축구 국가대표 평가전 하이라이트 더 보고 싶다면? \n지금 쿠팡플레이에서 확인하기!\n🚩https://coupangplay.app.link/0m52ZHyIDqb\n\n인기 드라마, 예능, 스포츠 중계까지\n쿠팡플레이에서 지금 플레이하세요\n\n#칠레 #국가대표평가전 #쿠팡플레이 #쿠팡"
        	},
        	"defaultAudioLanguage": "ko"
        	}
        },

        // response type of search api
        {
          "kind": "youtube#searchResult",
          "etag": "pfZBymraZtIF3XC_soaMRPQjU-w",
          "id": {
            "kind": "youtube#video",
            "videoId": "4lHyjiBCMr0"
          },
          "snippet": {
            "publishedAt": "2022-06-07T09:00:03Z",
            "channelId": "UCLkAepWjdylmXSltofFvsYQ",
            "title": "[PRACTICE RECORD] BTS (방탄소년단) ‘Pied Piper’ #2022BTSFESTA",
            "description": "Connect with BTS: https://ibighit.com/bts http://twitter.com/BTS_bighit http://twitter.com/BTS_twt ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/4lHyjiBCMr0/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/4lHyjiBCMr0/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/4lHyjiBCMr0/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "BANGTANTV",
            "liveBroadcastContent": "none",
            "publishTime": "2022-06-07T09:00:03Z"
          }
        },
        ```

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
