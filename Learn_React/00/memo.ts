// 프론트엔드 개발의 배경

// 1. 2000년대의 웹의 모습
// - 정적인 문서 위주의 환경(HTML + CSS)
// - 2004년 Ajax, 2006년 jQuery -> 서버에 직접 페이지를 요청하지 않고도 일부만 갱신할 수 있는 동적인 웹 시대 
// - 애플리케이션의 규모가 커지면 커질수록 DOM 조작이 복잡해지고 유지보수가 어려워짐

// 2. 프레임워크, 웹을 개발하기 위한 기본적인 아키텍쳐가 적용된 프로그램

// * Angular (2010년, Google)
// - JavaScript 기반, MVC(Model - View - Controller) 아키텍처
// - 양방향 데이커 바인딩, 대규모 웹 애플리케이션에 특화된 설계 & 기능 제공
// - 프로젝트 규모가 커질수록 데이터 흐름 추적 어려움, 프레임워크 굉장히 무거움 => 성능 문제 발생

// * React (2013년, Meta - former Facebook)
// - Facebook -> Angular 사용해서 개발
// - Facebook NewsFeed처럼 자주, 부분적으로 갱신되는 초대형 UI에서는 성능 문제 발생
// - Angular의 성능 문제를 개선하고자하는 연구 -> UI Randering 로직을 순수 함수로 만들면 복잡성 줄일 수 있고 성능도 개선 가능
// - React의 핵심 아이디어는 UI 
// - 단방향 데이터 바인딩 -> 데이터 흐름 추적이 쉬움, 성능이 향상
// - 가상 돔(Virtual DOM) 
// - 스벨트(Svelt) 핵심 개발자가 가상 돔은 소규모인 경우 Randering 성능이 낮다고 함, 그러나 대규모는 여전히 좋음
 
// * Vue.JS (2014년)
// - Google의 Evan You라는 개발자가 개발
// - Angular 프로젝트 진행 중 단점을 느낌
// - Side Project로 Vue.JS Framework 개발
// - Google에서 Angular 대신 Vue.JS 도입
// - 내부 호응을 얻고 정식으로 출시
// - 어떤 Library, Framework보다도 더 빠르고 배우기 쉬운 것이 슬로건
// - Angular, React보다 배우기 쉽고 빠르게 애플리케이션을 만들 수 있다.
// - 가볍고, 가상 돔, 양방향 데이터 바인딩
// - 후발주자는 선발주자의 장점을 흡수해서 단점을 보완해야 함
// - 선발주자 -> 점유율 확보
// - Vue -> Angular의 양방향 바인딩 & React의 가상 돔 -> 점유율 급상승

// Angular, Vue, React 

// npm 패키지 설치 관리자, npx 패키지 실행
// npx(실행) create-react-app(패키지) .(현재 폴더)
// npx는 패키지가 설치되어 있지 않으면 알아서 설치 후 삭제

// vite 
// 차세대 프론트엔드 빌드 도구 / Evan You 
// CRA -> 웹팩 + 바벨
// 웹팩 -> 모듈 번들러, 바벨 -> 트랜스컴파일러(트랜스파일 + 컴파일)

// vite
// esbuild, rollup
// esbuild -> 모듈 번들러 + 트랜스컴파일러
// go 언어로 개발, 컴퓨터와 굉장히 친숙한 언어
// rollup 개발 안정적 압축 후처리
// esbuild는 모듈 최적화, 트리 새이킹 기능 부족

// SWC (Speed Web Complier), Rust
// 국내 1인 개발자 만듬 -> SWC => Vercel(Next.JS)

// Vite - Vue.js
// SWC - React 

// npm run dev
// npm run start, serve, go

// npm install 패키지명
// npm install 패키지명 --save
// npm install 패키지명 --D
// npm install 패키지명 --save-dev

// public
// 정적 파일을 보관하는 폴더
// 빌드 과정에서 번들러의 타겟이 되지 않는 폴더
// 빌드 과정에서 가공되지 않고 그대로 제공되는 폴더

// 가공 -> 파일의 압축

// src
// 애플리케이션이 동작하는데 필요한 소스

// 19.2.8 -> 19번째 공식 버전, 19버전에서 2번의 기능추가, 2번째 기능 추가에서 8번의 버그 수정