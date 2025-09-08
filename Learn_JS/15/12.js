fetch("https://jsonholder.typicode.com/post")
    .then((res) = res.json())
    .then(console.log);

async function getPosts(params) {
    try {
        const res = await fetch("https://jsonholder.typicode.com/post");
        const data = await res.json();
        console.log(data);
    } catch(e) {
        console.error(e);
    }
}
getPosts();