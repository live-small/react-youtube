## 프로젝트 목적

-   ReactJS 프로젝트에 typescript를 적용
-   상태관리 라이브러리 적용
-   유튜브 UI 클론

## 컴포넌트 분리

-   Header
-   Nav
-   Video
    -   랜딩페이지 영상 (썸네일, 정보가 세로로 배치)
    -   다음에 볼 영상 (썸네일, 정보가 가로로 배치)
    -   비디오 재생 영상 (비디오, 댓글이 세로로 배치)

## 구현기능

-   [ ] 랜딩 페이지 레이아웃

    -   [ ] Header 컴포넌트 구현
    -   [ ] Nav 컴포넌트 구현
    -   [ ] Video 컴포넌트 구현

-   [ ] Video 컴포넌트

    -   [ ] 다음에 볼 영상
    -   [ ] 비디오 재생 영상

-   [ ] Routing 처리
    -   [ ] 랜딩 `/`
    -   [ ] 검색 `/search`
    -   [ ] 보기 `/watch`

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

## reference

[typescript-hand-book](https://joshua1988.github.io/ts/config/tsconfig.html#%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%84%A4%EC%A0%95-%ED%8C%8C%EC%9D%BC-tsconfig-json)

[폴더구조-참고](https://github.com/react-boilerplate/react-boilerplate-cra-template)
