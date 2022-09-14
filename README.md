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

-   [ ] 랜딩 페이지 UI

    -   [x] Header 컴포넌트 구현
    -   [x] Nav 컴포넌트 구현
    -   [x] Video 컴포넌트 구현
    -   [ ] 반응형
    -   [ ] 소셜 로그인 연결

-   [x] 검색 페이지 UI
    -   [x] 검색에 맞는 video 컴포넌트
-   [ ] watch 페이지 UI

    -   [ ] 비디오 플레이어 컴포넌트
    -   [ ] 연관 동영상 컴포넌트

-   [ ] 무한스크롤
-   [ ] 반응형 최적화
-   [ ] 소셜 로그인
-   [ ] 베포

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

### 컴포넌트 재사용

video 컴포넌트를 landing, search, 다음에 볼 영상에 재사용하고 싶은데, UI 디테일이 조금 다르다..(flex-direction, margin, font-size, etc..) 새로운 컴포넌트를 만들지않고, 재사용하기 위해서는 어떻게 해야할까?

#### 다루는 데이터, 기본적인 UI 구조는 비슷하지만, 디테일한 부분이 살짝씩 다를 때, 기존의 컴포넌트를 어떻게 바꿔야 재사용할 수 있을까?

-   style을 여러가지 만들어놓고, props에 따라 적절한 style이 부여되도록 할까? -> 가독성 괜찮을까? No!

[재사용 높은, 변경에 유연하게 대응할 수 있는 컴포넌트를 위해서는 컴포넌트를 제대로 나눠야한다](https://jbee.io/web/components-should-be-flexible/)
-> 컴포넌트 분리를 어떻게해야할까?

-   공통된 부분을 묶고, 다른 부분을 외부에서 주입받아 적용한다. <- 컴포넌트가 너무 작게 분리되는 거 아닌가?

-   내가 원하는 확장

    -   container 크기에 맞게 내부 폰트 크기 적용 -> px 대신 em 쓰면 되지 않을까? -> container 크기 주입!
    -   추가할 UI, 삭제할 UI -> 상태값 유무에 따라 UI 제어
    -   UI 구조 변경\*\* (조금 다름)
        -   flex-direction: row, column
        -   데이터 위치 변경
            -> 이거 때문에 새 컴포넌트 만들어야할듯! **대신 공통된 부분 만들어서 조합하는 방향으로 작업하기**
            -> 영상 설명부분만 다름, 영상 설명부분 compoenent를 주입받아서 렌더링만 하도록 하자

-   참고
    [변경에 유연한 컴포넌트](https://jbee.io/web/components-should-be-flexible/)

#### props가 union 타입일 경우, 컴포넌트 내에서 어떻게 추론해서 이용할까?

-   props가 union인 경우, 컴포넌트 내에선 공통된 속성만 접근가능

-   방법
    -   동일한 속성에 다른 값으로 체크하는 방법. video.type === "channel" -> 속성값 추가안하고 할 수 있는 방법은 없을까!
        -> 추가로 속성 생성 x, 구분하는 속성값인 channel의 data | null 로 나눠서, null이 아닐때만 channel 이용하도록 수정

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

#### Youtube api class 호출 위치 \*\*

현재 최상단에서만 youtube를 props로 넘겨 이용중
근데 그냥 필요한 곳에서 쓰면 안되나? class인데 굳이 props로 계쏙 넘길 필요를 모르겠군

### 타입 관리

-   상황: 유튜브 api 호출하는 로직을 제공하는 class를 js  
    -> ts로 변경하니, 호출 후 응답값의 타입이 없다는 에러가 떴다.  
     -> 응답값 등 타입은 어디서 관리하는 게 좋을까?

#### `어떻게 타입을 나눠 정의하는 게 이용할 때 좋을까?`

-   응답 타입 중 items 속성을 많이 사용 -> items 타입만 정의해 data.items으로 리턴하니, 해당 함수 내에서는 any 타입으로 됨.
    -> 응답 타입의 전체 타입을 만들자

## 상태관리

### 전역상태관리 언제 필요할까?

당연하게도, 전역적으로 관리해야할 상태값이 있을 때

#### 내가 생각한 상황

**다른 라우터 간 데이터를 주고받을 때** --> X
`현재 상황` landing, search page에서 클릭한 video를 보여줄 때, 보여줄 video 정보를 다시 불러올 필요가 없다. 왜냐하면 landing, search video UI를 위해서 많은 video 데이터를 가지고있기 때문이다. 이 정보를 넘겨주면 되는데, 다른 라우터기 때문에..어떻게 넘겨줘야할까?

-   불러온 video 정보를 전역적으로 저장해두고, videoId로 필터링해 데이터를 넘길까?
    -   그럼 불필요한 video 리스트가 저장되는 거 아닌가? 딱 클릭한 그 정보만, 다른 라우터에게 넘겨줄 수 없을까?
        -> 가능, [라우터 간 state 전달](https://dev.to/thatfemicode/passing-data-states-through-react-router-8dh)
        -> 타입보장은 어떻게 하지? `as`로 타입단언

### 상태관리, 내부 vs 전역

상태값을 관리할 때, 컴포넌트 내부 혹은 전역적으로 관리할 수 있다.
그렇다면 어떤 값을 어디에 관리하는 게 좋을까? 또, 두 상태관리의 장,단점을 생각해보자.

#### 내부

`장점` 상태값을 변경할 때, 내부에서 상태값을 관리한다면 해당 값이 어디서 사용되는지 추적하는 데 쉽다.
`단점` **props drilling(프로퍼티 내려꽂기)** 필요한 상태값이 있는 컴포넌트까지 props으로 넘겨줘야한다.

> 변경할 때 발생하는 문제
>
> 1. 중간에 값이 변경되어서 값을 추적하기 어려운 경우
> 2. 상태값의 일부 자료형이 바뀌게 되는 경우

`이용방법` - 관련 상태값은 가능한 가까이 보관하기 -> props drilling의 깊이를 낮출 수 있다

#### 전역

`장점`

-   참고한 글
    [프로퍼티 내리꽂기 (prop drilling)](https://edykim.com/ko/post/prop-drilling/)

## reference

[typescript-hand-book](https://joshua1988.github.io/ts/config/tsconfig.html#%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%84%A4%EC%A0%95-%ED%8C%8C%EC%9D%BC-tsconfig-json)

[폴더구조-참고](https://github.com/react-boilerplate/react-boilerplate-cra-template)
