// ### 문제 1

// **설명**: 랜덤한 게시물의 제목을 가져와 출력하는 `getRandomPostTitle` 함수를 작성하세요.

// **API**: https://jsonplaceholder.typicode.com/posts

function getRandomPostTitle() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then(posts => {
            const randomIndex = Math.floor(Math.random() * posts.length);
            const randomPost = posts[randomIndex];
            console.log(`Random Post Title: ${randomPost.title}`);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat

// ### 문제 2

// **설명**: 사용자 ID를 입력받아 해당 사용자의 정보를 가져와 출력하는 `getUserInfo` 함수를 작성하세요.

// **API:** [https://jsonplaceholder.typicode.com/users/${userId}](https://jsonplaceholder.typicode.com/users/$%7BuserId%7D)

function getUserInfo(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then(user => {
            console.log(`Name: ${user.name}, Email: ${user.email}`);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz

// ---

// ### 문제 3

// **설명**: 게시물의 ID를 입력받아 해당 게시물의 내용을 가져와 출력하는 `getPostDetails` 함수를 작성하세요.

// **API**: [https://jsonplaceholder.typicode.com/posts/${postId}](https://jsonplaceholder.typicode.com/posts/$%7BpostId%7D)

function getPostDetails(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then(post => {
            console.log(`Post Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}


getPostDetails(1); // 출력 예상 결과는 아래에

// Post Title: sunt aut facere repella...생략..., Body: quia et suscipit ...생략...

// ---

// ### 문제 4

// **설명**: 모든 사용자의 이름과 이메일을 출력하는 `getAllUsers` 함수를 작성하세요.

// **API:** https://jsonplaceholder.typicode.com/users

function getAllUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then(users => {
            users.forEach(user => {
                console.log(`Name: ${user.name}, Email: ${user.email}`);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

getAllUsers();

// ame: Leanne Graham, Email: Sincere@april.biz
// Name: Ervin Howell, Email: Shanna@melissa.tv
// Name: Clementine Bauch, Email: Nathan@yesenia.net
// Name: Patricia Lebsack, Email: Julianne.OConner@kory.org
// Name: Chelsey Dietrich, Email: Lucio_Hettinger@annie.ca
// Name: Mrs. Dennis Schulist, Email: Karley_Dach@jasper.info
// Name: Kurtis Weissnat, Email: Telly.Hoeger@billy.biz
// Name: Nicholas Runolfsdottir V, Email: Sherwood@rosamond.me
// Name: Glenna Reichert, Email: Chaim_McDermott@dana.io
// Name: Clementina DuBuque, Email: Rey.Padberg@karina.biz

// ---

// ### 문제 5

// **설명**: 특정 게시물의 ID를 입력받아 해당 게시물의 댓글을 가져와 출력하는 `getPostComments` 함수를 작성하세요.

// **API**: [https://jsonplaceholder.typicode.com/comments?postId=${postId}](https://jsonplaceholder.typicode.com/comments?postId=$%7BpostId%7D)

function getPostComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then(comments => {
            comments.forEach(comment => {
                console.log(`Comment by ${comment.name}: ${comment.body}`);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
getPostComments(1);

// Comment by id labore ex et quam laborum: laudantium enim quasi est quidem magnam voluptate ipsam eos
// tempora quo necessitatibus
// dolor quam autem quasi
// reiciendis et nam sapiente accusantium
// Comment by quo vero reiciendis velit similique earum: est natus enim nihil est dolore omnis voluptatem numquam
// et omnis occaecati quod ullam at
// voluptatem error expedita pariatur
// nihil sint nostrum voluptatem reiciendis et
// Comment by odio adipisci rerum aut animi: quia molestiae reprehenderit quasi aspernatur
// aut expedita occaecati aliquam eveniet laudantium
// omnis quibusdam delectus saepe quia accusamus maiores nam est
// cum et ducimus et vero voluptates excepturi deleniti ratione
// Comment by alias odio sit: non et atque
// occaecati deserunt quas accusantium unde odit nobis qui voluptatem
// quia voluptas consequuntur itaque dolor
// et qui rerum deleniti ut occaecati
// Comment by vero eaque aliquid doloribus et culpa: harum non quasi et ratione
// tempore iure ex voluptates in ratione
// harum architecto fugit inventore cupiditate
// voluptates magni quo et

// ---

// ### 문제 6

// **설명**: 모든 댓글의 내용을 가져와 출력하는 `getAllCommentBodies` 함수를 작성하세요.

// **API:** https://jsonplaceholder.typicode.com/comments

function getAllCommentBodies() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then(comments => {
            comments.forEach(comment => {
                console.log(`Comment: ${comment.body}`);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

getAllCommentBodies();

// Comment: laudantium enim quasi est quidem magnam voluptate ipsam eos
// tempora quo necessitatibus
// dolor quam autem quasi
// reiciendis et nam sapiente accusantium
// Comment: est natus enim nihil est dolore omnis voluptatem numquam
// et omnis occaecati quod ullam at
// voluptatem error expedita pariatur
// nihil sint nostrum voluptatem reiciendis et
// Comment: quia molestiae reprehenderit quasi aspernatur
// ...생략...


// ### 

// ---

// ### 문제 7

// **설명**: 모든 게시물의 제목을 정렬하여 출력하는 `getSortedPostTitles` 함수를 작성하세요.

// **API**: https://jsonplaceholder.typicode.com/posts

function getSortedPostTitles() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then(posts => {
            const titles = posts.map(post => post.title);
            titles.sort();
            titles.forEach(title => {
                console.log(title);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

getSortedPostTitles();


// a quo magni similique perferendis
// ad iusto omnis odit dolor voluptatibus
// adipisci placeat illum aut reiciendis qui
// aliquid eos sed fuga est maxime repellendus
// asperiores ea ipsam voluptatibus modi minima quia sint
// at nam consequatur ea labore ea harum
// aut amet sed
// ...생략...

// ### 

// ---

// ### 문제 8

// **설명**: 모든 사용자의 주소 정보를 가져와 출력하는 `getAllUserAddresses` 함수를 작성하세요.

// API: https://jsonplaceholder.typicode.com/users

function getAllUserAddresses() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then(users => {
            users.forEach(user => {
                const address = user.address;
                const fullAddress = `${address.street} ${address.suite}, ${address.city}, ${address.zipcode}`;
                console.log(`Address of ${user.name}: ${fullAddress}`);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}


getAllUserAddresses();


// Address of Leanne Graham: Apt. 556 Kulas Light, Gwenborough, 92998-3874
// Address of Ervin Howell: Suite 879 Victor Plains, Wisokyburgh, 90566-7771
// Address of Clementine Bauch: Suite 847 Douglas Extension, McKenziehaven, 59590-4157
// Address of Patricia Lebsack: Apt. 692 Hoeger Mall, South Elvis, 53919-4257
// Address of Chelsey Dietrich: Suite 351 Skiles Walks, Roscoeview, 33263
// Address of Mrs. Dennis Schulist: Apt. 950 Norberto Crossing, South Christy, 23505-1337
// Address of Kurtis Weissnat: Suite 280 Rex Trail, Howemouth, 58804-1099
// Address of Nicholas Runolfsdottir V: Suite 729 Ellsworth Summit, Aliyaview, 45169
// Address of Glenna Reichert: Suite 449 Dayna Park, Bartholomebury, 76495-3109
// Address of Clementina DuBuque: Suite 198 Kattie Turnpike, Lebsackbury, 31428-2261


// ### 

// ---

// ### 문제 9

// **설명**: 특정 사용자가 작성한 모든 게시물의 제목을 출력하는 `getUserPostTitles` 함수를 작성하세요.

// **API:** [https://jsonplaceholder.typicode.com/posts?userId=${userId}](https://jsonplaceholder.typicode.com/posts?userId=$%7BuserId%7D)


function getUserPostTitles(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then(posts => {
            posts.forEach(post => {
                console.log(`Post Title: ${post.title}`);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}


getUserPostTitles(1);


// Post Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// Post Title: qui est esse
// Post Title: ea molestias quasi exercitationem repellat qui ipsa sit aut
// Post Title: eum et est occaecati
// Post Title: nesciunt quas odio
// Post Title: dolorem eum magni eos aperiam quia
// Post Title: magnam facilis autem
// Post Title: dolorem dolore est ipsam
// Post Title: nesciunt iure omnis dolorem tempora et accusantium
// Post Title: optio molestias id quia eum

