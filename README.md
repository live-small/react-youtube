## 프로젝트 목적

-   ReactJS 프로젝트에 typescript를 적용
-   데이터 핸들링 (어떤 api를 호출하고, 어떻게 가공해서 이용할지)
-   유튜브 UI 클론(무한스크롤, 반응형, 모달창, 스켈레톤 로딩)
-   외부 api 이용해 소셜로그인 구현
-   recoil, react-query 써보기
-   jest로 테스트코드 작성 -> 리팩토링 하기

## 컴포넌트 분리

-   Header
-   Nav
-   Video
    -   랜딩페이지 영상 (썸네일, 정보가 세로로 배치)
    -   다음에 볼 영상 (썸네일, 정보가 가로로 배치)
    -   비디오 재생 영상 (비디오, 댓글이 세로로 배치)

## 구현기능

-   [x] Routing 처리

    -   [x] 랜딩 `/`
    -   [x] 검색 `/search`
    -   [x] 보기 `/watch`

-   [ ] 랜딩 페이지 레이아웃

    -   [x] Header 컴포넌트 구현
    -   [x] Nav 컴포넌트 구현
    -   [ ] Video 컴포넌트 구현
    -   [ ] 반응형
    -   [ ] 소셜 로그인 연결

-   [ ] Video 컴포넌트

    -   [ ] 다음에 볼 영상
    -   [ ] 비디오 재생 영상

## 구현 중 고민 기록

### ts 적용

typescript 모듈을 다운받고, IDE를 재시작했지만 typescript 적용이 안됐다.

> IDE에서 typescript version 검색해, 로컬에 이용할 version을 클릭하면 된다.
> [참고한-글](https://bobbyhadz.com/blog/react-cannot-use-jsx-unless-the-jsx-flag-is-provided)

### 데이터 관계, 흐름정리

-   랜딩페이지에 main엔 video filter, videoList 있음 | `video filter -> videoList`
    -   이용할 api
        -   videos? - 처음엔 popularVideo를 받아와서 videoList를 보여줌
        -   search? - filter 클릭 -> filter 키워드를 query로 검색, videoList를 렌더링해줌
-   검색하면, 검색결과에 맞는 videoList 있음 | `검색키워드 -> videoList`
    -   api: search? - 동적라우팅) useParams로 query 받아와 검색, videoList를 렌더링해줌
-   videoItem을 클릭하면, 해당 video가 보여지고(왼쪽에), (오른쪽엔) 보여진 비디오와 유사한 videoList가 보여짐 | `videoItem of clicked -> videoList`
    -   api
        -   videos? - 동적라우팅) useParams로 videoId를 받아와서, 해당 video 정보 받아옴(썸네일, 제목, 채널명, 설명, 좋아요 개수 등)
        -   search? - useParams로 받은 videoId를 이용해, 연관된 videoList를 받아와서 오른쪽에 렌더링함

### 비동기 로직 위치

class vs 커스텀 훅

-   class
    -   메서드에 하나의 로직을 이용
    -   메서드가 많아진다면, 상속으로 관심사끼리 나누기 (검색, 비디오가져오기 등)
    -   장점) 상속으로 적절한 모듈로 나눌 수 있고, 필요한 상태값(api key) 공유가능
-   [커스텀 훅](https://velog.io/@vvsogi/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%9B%85%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90)

    -   이게 뭐냐면, 반복되는 로직을 재사용하기 위해 나왔고, 독립적인 상태값을 가진 `컴포넌트`임
    -   장점) useState, useEffect 등 함수형 컴포넌트에서 쓸 수 있는 훅 활용가능

-   정리
    -   반복되는 로직 유무
        -   videos? search? 2개의 api를 호출하는데, params만 다름
    -   hooks 이용하는지 -> 지금으로썬 안해도 됨.
    -   그러면, 필요한 상태값도 공유가능한 class로 로직을 정리하기!

### 타입 관리

-   상황: 유튜브 api 호출하는 로직을 제공하는 class를 js  
    -> ts로 변경하니, 호출 후 응답값의 타입이 없다는 에러가 떴다.  
     -> 응답값 등 타입은 어디서 관리하는 게 좋을까?

#### `어떻게 타입을 나눠 정의하는 게 이용할 때 좋을까?`

-   응답 타입 중 items 속성을 많이 사용 -> items 타입만 정의해 data.items으로 리턴하니, 해당 함수 내에서는 any 타입으로 됨.
    -> 응답 타입의 전체 타입을 만들자

## reference

[typescript-hand-book](https://joshua1988.github.io/ts/config/tsconfig.html#%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%84%A4%EC%A0%95-%ED%8C%8C%EC%9D%BC-tsconfig-json)

[폴더구조-참고](https://github.com/react-boilerplate/react-boilerplate-cra-template)
