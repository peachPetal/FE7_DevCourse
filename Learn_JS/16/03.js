// DOM (Document Object Models), document
// 문서 객체를 제어하기 위한 모델
// 문서 객체? 웹 브라우저에 표시되는 HTML을 자바스크립트가 이해할 수 있는 객체 형태로 변환한 것을 말함

const { createElement } = require("react");

// DOM 핵심
// 문서 객체의 선택과 제어

// 노드
// DOM에서 모든 구성 요소를 통칭하는 단위
// DOM 트리를 구성하는 핵심 구성요소

// 문서 노드 -> document
// 요소 노드 ->  div, p, a ...
// 속성 노드 ->  id = "title" class="box"
// 텍스트 노드 -> "얀녕하세요."
// 주석 노드 -> <!-- -->

// 1. 문서 객체의 선책
// 1.1 getElement...
// 1.2 querySelector.,, -> 오늘날 권장
// 1.3 document.forms -> form 요소를 선택할 떄 좋음

// 2. 문서 객체 탐색
// 2.1 부모, 자식, 형제 노드 탐색 속성
// 2.1.1 parentNode
// 2.1.2 childNode
// 2.1.3 firstNode
// 2.1.4 lastNode
// 2.1.5 previousNode
// 2.1.6 nextSiblingNode

// 2. 문서 전용 탐색
// 2.2.1 children
// 2.2.2 firstElementChild
// 2.2.3 lastElementChild
// 2.2.4 previousElementSibling
// 2.2.5 nextElementSibling

// 3. 문서 객체 조작
// (문서객체).***
// 3.1 스타일 변경 
// (문서객체).style.***
// 3.2 속성 추가 
// (문서객체).setAttribute.***
// 3.3 속성 제거
// (문서객체).removeAttribute.***
// 3.4 속성 가져오기
// (문서객체).getAttribute.***
// 3.5 클래스 속성 전용 조작
// classList
// add remove toggle contains
// 3.6 콘텐츠 조작
// innerHTML
// innerText

// 3.7 태그 생성
// createElement(태그명)

// 3.8 기존 돔 트리와 연결
// appendChild 기존 요소의 자식으로 추가
// insertBefore 부모 요소의 특정 노드 밑에 추가

// 3.9 삭제
// remove()