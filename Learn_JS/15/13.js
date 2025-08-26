// 설명: 랜덤한 게시물의 제목을 가져와 출력하는 getRandomPostTitle 함수
// API: https://jsonplaceholder.typicode.com/posts

async function getRandomPostTitle() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const posts = await response.json();
        const randomIndex = Math.floor(Math.random() * posts.length);
        const randomPost = posts[randomIndex];
        console.log(`Random Post Title: ${randomPost.title}`);
    } catch (error) {
        console.error("Error:", error);
    }
}

getRandomPostTitle();

// 설명: 사용자 ID를 입력받아 해당 사용자의 정보를 가져와 출력하는 getUserInfo 함수
// API: https://jsonplaceholder.typicode.com/users/${userId}

async function getUserInfo(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const user = await response.json();
        console.log(`Name: ${user.name}, Email: ${user.email}`);
    } catch (error) {
        console.error("Error:", error);
    }
}

getUserInfo(1);

// 설명: 게시물의 ID를 입력받아 해당 게시물의 내용을 가져와 출력하는 getPostDetails 함수
// API: https://jsonplaceholder.typicode.com/posts/${postId}

async function getPostDetails(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const post = await response.json();
        console.log(`Post Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
    } catch (error) {
        console.error("Error:", error);
    }
}

getPostDetails(1);

// 설명: 모든 사용자의 이름과 이메일을 출력하는 getAllUsers 함수
// API: https://jsonplaceholder.typicode.com/users

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const users = await response.json();
        users.forEach(user => {
            console.log(`Name: ${user.name}, Email: ${user.email}`);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

getAllUsers();

// 설명: 특정 게시물의 ID를 입력받아 해당 게시물의 댓글을 가져와 출력하는 getPostComments 함수
// API: https://jsonplaceholder.typicode.com/comments?postId=${postId}

async function getPostComments(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const comments = await response.json();
        comments.forEach(comment => {
            console.log(`Comment by ${comment.name}: ${comment.body}`);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

getPostComments(1);

// 설명: 모든 댓글의 내용을 가져와 출력하는 getAllCommentBodies 함수
// API: https://jsonplaceholder.typicode.com/comments

async function getAllCommentBodies() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const comments = await response.json();
        comments.forEach(comment => {
            console.log(`Comment: ${comment.body}`);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

getAllCommentBodies();

// 설명: 모든 게시물의 제목을 정렬하여 출력하는 getSortedPostTitles 함수
// API: https://jsonplaceholder.typicode.com/posts

async function getSortedPostTitles() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const posts = await response.json();
        const titles = posts.map(post => post.title);
        titles.sort();
        titles.forEach(title => {
            console.log(title);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

getSortedPostTitles();

// 설명: 모든 사용자의 주소 정보를 가져와 출력하는 getAllUserAddresses 함수
// API: https://jsonplaceholder.typicode.com/users

async function getAllUserAddresses() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const users = await response.json();
        users.forEach(user => {
            const address = user.address;
            const fullAddress = `${address.street} ${address.suite}, ${address.city}, ${address.zipcode}`;
            console.log(`Address of ${user.name}: ${fullAddress}`);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

getAllUserAddresses();

// 설명: 특정 사용자가 작성한 모든 게시물의 제목을 출력하는 getUserPostTitles 함수
// API: https://jsonplaceholder.typicode.com/posts?userId=${userId}

async function getUserPostTitles(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const posts = await response.json();
        posts.forEach(post => {
            console.log(`Post Title: ${post.title}`);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

getUserPostTitles(1);