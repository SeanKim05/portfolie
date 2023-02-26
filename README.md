## 프로젝트 포트폴리오
### 1. 프로젝트 소개
#### 자기소개와 작업목록을 담은 포트폴리오 페이지입니다.

### [배포 페이지로 이동](https://portfolio-delta-eight-32.vercel.app/)

<img src="https://user-images.githubusercontent.com/103613612/221344835-8d14a6a3-e153-40a4-bdbb-555508ad7577.png" width="150" height="150"/>

#### 크롬브라우저에 최적화 되어있으며 모바일 뷰 (500px)에서도 확인이 가능합니다.


<br />
### 2. 사용 툴 
- HTML, JAVASCRIPT, REACT, SCSS
- react-icon, react-router-dom
<br />

### 3. 페이지 구조도

<img src="https://user-images.githubusercontent.com/103613612/221345426-8689402e-82ca-4dc3-bdc7-4f38bbd0ea14.png" width="200" height="400" />

- asset 폴더는 이미지와 동영상을 관리하는 폴더입니다.
- components는 페이지에 사용이 되는 컴포넌트들이 정리되어 있습니다.
  - UI는 여러 컴포넌트들이 공통으로 사용하는 컴포넌트를 따로 분리하였습니다.
- context는 전역에 사용되는 상태를 관리하는 폴더 입니다.
- data는 컴포넌트에서 사용하는 json 형태의 파일을 보관하는 폴더입니다.
- pages들은 router에 정의된 페이지들이며 components 폴더의 component가 각 페이지에 사용되어 있습니다.
- styles는 전역에 사용되는 style 입니다.
  - anmation.scss 텍스트 및 페이지 에니메이션입니다.
  - 공통으로 적용된 scss 입니다.
  - 기존 css가 가진 속성을 제거하는 scss입니다.
<br />
  
### 4. 구현사항
  

![itro](https://user-images.githubusercontent.com/103613612/221390800-114db222-4019-465e-8af3-09f6dcedf2ed.gif)
- scroll-snap-type 적용으로 슬라이딩 스크롤 구현
- keyframe과 height 값 감지를 통한 text 애니메이션 효과 (fade in&out 및 sliding)

![hashtag](https://user-images.githubusercontent.com/103613612/221391039-ab376165-4eac-4b34-9b77-ec669dffb3b6.gif)
- 1초 단위로 index 값 랜덤 생성 index에 대한 data 표시
- display: grid 사용으로 masonry view 구현
- useparams 사용으로 값에 따른 동적라우팅 구현

![imageslider](https://user-images.githubusercontent.com/103613612/221391387-43b646d7-bd38-414e-8885-20a6732fc9b2.gif)
- newDate 사용으로 날짜 카운터 구현
- keyframes과 animation-play-state 속성 사용 자동이미지 슬라이더 구현
- background-attachment와 posiotion sticky 사용 작업목록 페이지 구현

![navigation](https://user-images.githubusercontent.com/103613612/221391514-4a4b2c73-9ad1-42cf-83b2-9231e404a174.gif)
- context 사용으로 navigation에 사용되는 값 전역 관리
- 스크롤 시 로고 투명도 조절
- 디테일 네비게이션 표시 시 화면에 overlay 적용

