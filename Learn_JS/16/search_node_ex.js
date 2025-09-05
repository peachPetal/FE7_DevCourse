// ---

// ### 1. **문제 1: 첫 번째 `div` 요소 찾기**

// ### 문제 설명

// 페이지에서 첫 번째 `<div>` 요소를 찾아 콘솔에 출력하세요.

// ### 기본 제공 코드

// ```html
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <title>문제 1</title>
// </head>
// <body>
//   <div>첫 번째 div</div>
//   <div>두 번째 div</div>
//   <script>
//     const firstDiv = document.querySelector('div');
//     console.log(firstDiv);
//   </script>
// </body>
// </html>

// ```

// ---

// ### 2. **문제 2: 특정 ID의 요소 찾기**

// ### 문제 설명

// `id="main-content"`인 요소를 찾아 콘솔에 출력하세요.

// ### 기본 제공 코드

// ```html
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <title>문제 2</title>
// </head>
// <body>
//   <div id="main-content">이것은 메인 콘텐츠입니다.</div>
//   <script>
//     const mainContent = document.getElementById('main-content');
//     console.log(mainContent);
//   </script>
// </body>
// </html>

// ```

// ---

// ### 3. **문제 3: 특정 클래스 이름을 가진 요소 찾기**

// ### 문제 설명

// `class="item"`을 가진 모든 요소를 찾아 콘솔에 출력하세요.

// ### 기본 제공 코드

// ```html
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <title>문제 3</title>
// </head>
// <body>
//   <div class="item">아이템 1</div>
//   <div class="item">아이템 2</div>
//   <div class="item">아이템 3</div>
//   <script>
//     const items = document.getElementsByClassName('item');
//     console.log(items);
//   </script>
// </body>
// </html>

// ```

// ---

// ### 4. **문제 4: 부모 요소 찾기**

// ### 문제 설명

// `<span>` 요소의 부모 요소를 찾아 콘솔에 출력하세요.

// ### 기본 제공 코드

// ```html
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <title>문제 4</title>
// </head>
// <body>
//   <div>
//     <p>본문 내용</p>
//     <span>이것은 span입니다</span>
//   </div>
//   <script>
//     const spanElement = document.querySelector('span');
//     const parentElement = spanElement.parentNode;
//     console.log(parentElement);
//   </script>
// </body>
// </html>

// ```

// ---

// ### 5. **문제 5: 형제 요소 찾기**

// ### 문제 설명

// `<p>` 요소의 형제 요소인 `div` 요소를 찾아 콘솔에 출력하세요.

// ### 기본 제공 코드

// ```html
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <title>문제 5</title>
// </head>
// <body>
//   <p>이것은 p 요소입니다.</p>
//   <div>이것은 div 요소입니다.</div>
//   <script>
//     const pElement = document.querySelector('p');
//     const siblingDiv = pElement.nextElementSibling;
//     console.log(siblingDiv);
//   </script>
// </body>
// </html>

// ```

// ---

// ### 6. **문제 6: 특정 태그 이름을 가진 요소 찾기**

// ### 문제 설명

// 페이지에서 모든 `<h2>` 태그를 찾아 콘솔에 출력하세요.

// ### 기본 제공 코드

// ```html
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <title>문제 6</title>
// </head>
// <body>
//   <h2>헤딩 1</h2>
//   <h2>헤딩 2</h2>
//   <h2>헤딩 3</h2>
//   <script>
//     const headings = document.getElementsByTagName('h2');
//     console.log(headings);
//   </script>
// </body>
// </html>

// ```

// ---

// ### 7. **문제 7: 특정 요소의 자식 요소 찾기**

// ### 문제 설명

// `<div id="container">` 요소의 모든 자식 요소를 찾아 콘솔에 출력하세요.

// ### 기본 제공 코드

// ```html
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <title>문제 7</title>
// </head>
// <body>
//   <div id="container">
//     <p>자식 요소 1</p>
//     <span>자식 요소 2</span>
//   </div>
//   <script>
//     const container = document.getElementById('container');
//     const children = container.children;
//     console.log(children);
//   </script>
// </body>
// </html>

// ```

// ---

// ### 8. **문제 8: 특정 속성을 가진 요소 찾기**

// ### 문제 설명

// `data-role="admin"` 속성을 가진 모든 요소를 찾아 콘솔에 출력하세요.

// ### 기본 제공 코드

// ```html
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <title>문제 8</title>
// </head>
// <body>
//   <div data-role="admin">관리자</div>
//   <div data-role="user">사용자</div>
//   <div data-role="admin">관리자 2</div>
//   <script>
//     const admins = document.querySelectorAll('[data-role="admin"]');
//     console.log(admins);
//   </script>
// </body>
// </html>

// ```

// ---

// ### 9. **문제 9: 텍스트 내용으로 요소 찾기**

// ### 문제 설명

// 텍스트 내용이 "사용자"인 요소를 찾아 콘솔에 출력하세요.

// ### 기본 제공 코드

// ```html
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <title>문제 9</title>
// </head>
// <body>
//   <div>관리자</div>
//   <div>사용자</div>
//   <div>게스트</div>
//   <script>
//     const divs = document.querySelectorAll('div');
//     let userElement;
//     divs.forEach(div => {
//     if (div.textContent === '사용자') {
//         userElement = div;
//     }
//     });
//     console.log(userElement);
//   </script>
// </body>
// </html>

// ```

// ---

// ### 10. **문제 10**

// ### 문제 설명

// 두 번째 `<li>` 요소를 찾아 콘솔에 출력하세요.

// ### 기본 제공 코드

// ```html
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <title>문제 10</title>
// </head>
// <body>
//   <ul>
//     <li>항목 1</li>
//     <li>항목 2</li>
//     <li>항목 3</li>
//   </ul>
//   <script>
//     const secondItem = document.querySelector('ul').children[1];
//     console.log(secondItem);
//   </script>
// </body>
// </html>

// ```

// ---