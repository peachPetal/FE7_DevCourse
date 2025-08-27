### 1. **문제 1: 텍스트 콘텐츠 변경하기**

### 문제 설명

HTML 페이지에 있는 `<h1>` 태그의 텍스트를 "Hello, DOM!"으로 변경하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 1</title>
</head>
<body>
  <h1>기존 제목</h1>
  <script>
   document.querySelector('h1').textContent = "Hello, DOM!";
  </script>
</body>
</html>

```

---

### 2. **문제 2: 새로운 요소 추가하기**

### 문제 설명

`<div>` 요소를 새로 생성하여, 그 안에 "새로운 콘텐츠"라는 텍스트를 추가하고 `<body>`의 마지막 자식으로 삽입하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 2</title>
</head>
<body>
  <script>
    const newDiv = document.createElement('div');
    newDiv.textContent = "새로운 콘텐츠";
    document.body.appendChild(newDiv);
  </script>
</body>
</html>
```

---

### 3. **문제 3: 클래스 추가하기**

### 문제 설명

`<p>` 요소에 "highlight"라는 클래스를 추가하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 3</title>
</head>
<body>
  <p>이 문단에 클래스를 추가하세요.</p>
  <script>
    document.querySelector('p').classList.add('highlight');
  </script>
</body>
</html>
```

---

### 4. **문제 4: 클래스 제거하기**

### 문제 설명

`<p>` 요소에서 "highlight" 클래스를 제거하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 4</title>
</head>
<body>
  <p class="highlight">이 문단에서 클래스를 제거하세요.</p>
  <script>
    document.querySelector('p').classList.remove('highlight');
  </script>
</body>
</html>
```

---

### 5. **문제 5: 스타일 변경하기**

### 문제 설명

`<h2>` 요소의 배경색을 "yellow"로 변경하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 5</title>
</head>
<body>
  <h2>배경색을 변경하세요.</h2>
  <script>
    document.querySelector('h2').style.backgroundColor = 'yellow';
  </script>
</body>
</html>
```

---

### 6. **문제 6: 새로운 목록 항목 추가하기**

### 문제 설명

`<ul>` 요소에 새로운 `<li>` 항목을 추가하세요. 추가된 항목의 내용은 "새로운 항목"입니다.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 6</title>
</head>
<body>
  <ul>
    <li>기존 항목</li>
  </ul>
  <script>
    const newLi = document.createElement('li');
    newLi.textContent = "새로운 항목";
    document.querySelector('ul').appendChild(newLi);
  </script>
</body>
</html>
```

---

### 7. **문제 7: 속성 변경하기**

### 문제 설명

`<a>` 요소의 `href` 속성을 "[https://www.example.com](https://www.example.com/)"으로 변경하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 7</title>
</head>
<body>
  <a href="#">링크</a>
  <script>
    document.querySelector('a').setAttribute('href', 'https://www.example.com/');
  </script>
</body>
</html>
```

---

### 8. **문제 8: 요소 삭제하기**

### 문제 설명

`<p>` 요소를 DOM에서 삭제하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 8</title>
</head>
<body>
  <p>삭제할 요소입니다.</p>
  <script>
    document.querySelector('p').remove();
  </script>
</body>
</html>
```

---

---

### 10. **문제 10: 기존 요소의 텍스트 변경**

### 문제 설명

`<div>` 요소의 텍스트 콘텐츠를 "새로운 텍스트"로 변경하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 10</title>
</head>
<body>
  <div>기존 텍스트</div>
  <script>
    document.querySelector('div').textContent = "새로운 텍스트";
  </script>
</body>
</html>
```

---

### 11. **문제 11: 템플릿 리터럴을 사용한 HTML 삽입**

### 문제 설명

템플릿 리터럴을 사용하여 다음과 같은 HTML 구조를 추가하세요.

```html
<div class="card">
  <h3>카드 제목</h3>
  <p>카드 내용</p>
</div>
```

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 11</title>
</head>
<body>
  <script>
    const newCardHtml = 
        `<div class="card">
            <h3>카드 제목</h3>
            <p>카드 내용</p>
        </div>`;
    document.body.innerHTML += newCardHtml;
  </script>
</body>
</html>
```

---

### 12. **문제 12: 요소의 부모 요소 찾기**

### 문제 설명

`<p>` 요소의 부모 요소를 찾고, 그 부모 요소의 배경색을 "lightgray"로 변경하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 12</title>
</head>
<body>
  <div>
    <p>이 요소의 부모를 찾고 배경색을 변경하세요.</p>
  </div>
  <script>
    const paragraph = document.querySelector('p');
    paragraph.parentNode.style.backgroundColor = 'lightgray';
  </script>
</body>
</html>
```

---

### 13. **문제 13: 새로운 `li` 항목을 앞에 추가하기**

### 문제 설명

`<ul>` 요소의 첫 번째 자식으로 "첫 번째 항목"이라는 텍스트를 가진 `<li>` 요소를 추가하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title

>문제 13</title>
</head>
<body>
  <ul>
    <li>기존 항목 1</li>
    <li>기존 항목 2</li>
  </ul>
  <script>
    const newLi = document.createElement('li');
    newLi.textContent = "첫 번째 항목";
    document.querySelector('ul').prepend(newLi);
  </script>
</body>
</html>
```

---

### 14. **문제 14: `querySelectorAll` 사용하기**

### 문제 설명

`<p>` 태그가 여러 개 있을 때, 모든 `<p>` 태그의 텍스트를 "모든 문단의 텍스트"로 변경하세요.

### 기본 제공 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>문제 14</title>
</head>
<body>
  <p>첫 번째 문단</p>
  <p>두 번째 문단</p>
  <script>
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.textContent = "모든 문단의 텍스트";
    });
  </script>
</body>
</html>
```

---