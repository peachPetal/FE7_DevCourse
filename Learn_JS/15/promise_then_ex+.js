// # 연습문제(jsonplaceholder++)

// ### 문제 1

// **설명**: 모든 사용자의 이메일을 가져온 후, 중복된 이메일을 제거하여 출력하는 `getUniqueEmails` 함수를 작성하세요.

// ```jsx
function getUniqueEmails() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if(!res.ok) throw new Error("Network Error");
            return res.json();
        })
        .then((users) => {
            const emails = users.map((user) => user.email);
            const uniqueEmails = [...new Set(emails)];
            console.log(uniqueEmails);
        })
        .catch((err) => {
            console.error("Error", err);
        });
}

getUniqueEmails();

// ```

// ### 

// ---

// ### 문제 2

// **설명**: 특정 사용자의 댓글을 가져와, 각 댓글의 작성자 이름과 이메일을 포함한 객체 배열로 반환하는 `getUserCommentsWithEmails` 함수를 작성하세요.

// ```jsx
function getUserCommentsWithEmails(userId) {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            if(!res.ok) throw new Error("Network Error");
            return res.json();
        })
        .then((comments) => {
            targetUser = comments.find((comment) => comment.id === userId);
            if(!targetUser) throw new Error("User not found");

        })
}

getUserCommentsWithEmails(1);

// ```

// ### 

// ---

// ### 문제 3

// **설명**: 모든 게시물의 댓글 수를 세고, 댓글 수가 가장 많은 게시물의 제목과 댓글 수를 출력하는 `getMostCommentedPost` 함수를 작성하세요.

// ```jsx
// function getMostCommentedPost() {
//     // 여기에 코드를 작성하세요
// }

// getMostCommentedPost(); // Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit, Comment Count: 5

// ```

// ### 

// ---

// ### 문제 4

// **설명**: 모든 게시물의 제목과 각 게시물의 첫 번째 댓글을 함께 출력하는 `getPostTitlesWithFirstComment` 함수를 작성하세요.

// ```jsx
// function getPostTitlesWithFirstComment() {
//     // 여기에 코드를 작성하세요
// }

// getPostTitlesWithFirstComment();

// ```

// ```bash
// Title: .... , First Comment: ....
// Title: .... , First Comment: ....
// Title: .... , First Comment: ....
// Title: .... , First Comment: ....
// Title: .... , First Comment: ....
// ```

// ### 

// ---

// ### 문제 5

// **설명**: 모든 사용자의 주소를 도시별로 그룹화하여 출력하는 `groupUsersByCity` 함수를 작성하세요.

// ```jsx
// function groupUsersByCity() {
//     // 여기에 코드를 작성하세요
// }

// groupUsersByCity();
// ```

// ```bash
// {
//   Gwenborough: [ 'Leanne Graham' ],
//   Wisokyburgh: [ 'Ervin Howell' ],
//   McKenziehaven: [ 'Clementine Bauch' ],
//   'South Elvis': [ 'Patricia Lebsack' ],
//   Roscoeview: [ 'Chelsey Dietrich' ],
//   'South Christy': [ 'Mrs. Dennis Schulist' ],
//   Howemouth: [ 'Kurtis Weissnat' ],
//   Aliyaview: [ 'Nicholas Runolfsdottir V' ],
//   Bartholomebury: [ 'Glenna Reichert' ],
//   Lebsackbury: [ 'Clementina DuBuque' ]
// }
// ```

// ### 

// ---

// ### 문제 6

// **설명**: 특정 사용자가 작성한 게시물의 댓글을 가져와, 댓글 내용과 작성자의 이름을 함께 출력하는 `getUserPostComments` 함수를 작성하세요.

// ```jsx
// function getUserPostComments(userId) {
//     // 여기에 코드를 작성하세요
// }

// getUserPostComments(1); 
// ```

// ```bash
// Comment: .... , Name: ....
// ```

// ### 

// ---

// ### 문제 7

// **설명**: 댓글의 작성자 이름을 기준으로 댓글을 정렬하여 출력하는 `getSortedCommentsByAuthor` 함수를 작성하세요.

// ```jsx
// function getSortedCommentsByAuthor() {
//     // 여기에 코드를 작성하세요
// }

// getSortedCommentsByAuthor();

// ```

// ```bash
// Author: .... , Comment: ....
// Author: .... , Comment: ....
// Author: .... , Comment: ....
// Author: .... , Comment: ....
// ```

// ### 

// ---

// ### 문제 8

// **설명**: 각 사용자의 게시물 수와 댓글 수를 함께 출력하는 `getUsersPostAndCommentCount` 함수를 작성하세요.

// ```jsx
// function getUsersPostAndCommentCount() {
//     // 여기에 코드를 작성하세요
// }

// getUsersPostAndCommentCount();

// ```

// ```bash
// {
//   '1': { postCount: 100, commentCount: 50 },
//   '2': { postCount: 100, commentCount: 50 },
//   '3': { postCount: 100, commentCount: 50 },
//   '4': { postCount: 100, commentCount: 50 },
//   '5': { postCount: 100, commentCount: 50 },
//   '6': { postCount: 100, commentCount: 50 },
//   '7': { postCount: 100, commentCount: 50 },
//   '8': { postCount: 100, commentCount: 50 },
//   '9': { postCount: 100, commentCount: 50 },
//   '10': { postCount: 100, commentCount: 50 }
// }
// ```

// ### 

// ---

// ### 문제 9

// **설명**: 모든 게시물의 제목과 각 게시물의 댓글 수를 함께 출력하는 `getPostTitlesWithCommentCount` 함수를 작성하세요.

// ```jsx
// function getPostTitlesWithCommentCount() {
//     // 여기에 코드를 작성하세요
// }

// getPostTitlesWithCommentCount();

// ```

// ```bash
// Title: sunt ... , Comment Count: 5
// Title: qui ... , Comment Count: 5
// ...생략...
// ```

// ### 

// ---