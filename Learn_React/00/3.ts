// 컴포넌트
// UI를 구성하는 가장 작은 단위이며 재사용이 가능한 독립적인 블록
// 클래스 컴포넌트
// 함수형 컴포넌트

// React.Component를 상속받아 만들어 render() 메서드 안에 JSX 반환
// 함수형 컴포넌트
// 함수로 정의하며, props를 받아 JSX 반환
// 컴포넌트의 공통적인 특징
// JSX 문법을 리턴한다는 것
// JSX 문법은 Javascript + XML 확장 문법으로 
// 자바스크립트 안에서 HTML과 비슷한 구문을 작성할 수 있게 해주는 확장 문법

// 클래스형 컴포넌트는 리액트 초창기부터 존재
// 함수형 컴포넌트는 리액트 0.14 버전(2015)
// React 16.8 (2019년 2월) 리액트 훅(react hooks)

// JSX(Syntatic Sugar)
// React.createElement() 보다 편리함

// JSX 규칙
// 반드시 하나의 루트 태그 
// 여러 줄을 리턴할 때 소괄호
// HTML 4 <-> HTML 5 <br>
// <p>Hello World</p>, <br /> -> 빈태그, <br>
// 반드시 태그는 닫음
// 태그의 속성은 카멜 케이스로 작성한다
// class -> className, for -> HtmlFor
// readonly -> readOnly, maxlength -> maxLength
// data-> , aria-> 원래 그대로 사용
// jsx는 표현식을 사용할 수 있다.
// 인라인 스타일은 속성으로 표시한다.

// 컴포넌트
// UI를 구성하는 독립적이며 재사용 가능한 작은 단위

// 스타일링
// 전통적인 스타일링 방법
// 인라인 스타일
// style 속성
// 외부 스타일(글로벌 스타일)
// 별도의 css파일을 작성 후 import

// CSS Modules (*.mocule.css)
// Classnames

// Tailwind CSS
// CSS-IN-JS

// 리액트 스타일링
// 외부(글로벌) 스타일
// CSS Module(*.module.css) 
// Classnames
// Tailwind CSS - Utility First 방식으로 설계된 프레임워크
// Bootstrap처럼 이미 만들어진 컴포넌트를 제공하는 대신
// Tailwind는 아주 작은 유틸리티 클래스 제공
// 유틸리티 퍼스트는 작고 단일한 역할만 하는 CSS를 조합해서 UI를 만드는 방식

// .btn-primary{background-color: blue; color: white; padding: 10px;},
// <button class="btn-primary"></button>
// <button class="bg-blue-500 text-white p-2.5"></button>

// twMerge{'px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]'}
// 'px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]'
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'

// CSS-IN-JS
// CSS를 자바스크립트 코드 안에서 작성하고 시뮬하는 방식
// 유명한 CSS-IN-JS
// styled-components 개발 공식 종료 -> 유지보수만 함
// emotion
// vanilla extract - zero run time(빌드할 때만 css를 생성)

// 컴포넌트 데이터 전달
// properties, props