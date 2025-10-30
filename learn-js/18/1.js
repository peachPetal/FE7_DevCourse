async function getDocuments() {
  const res = await fetch("https://kdt-api.fe.dev-cos.com/documents", {
    method: "GET",
    headers: {
      "x-username": "uky",
    },
  });
  const data = await res.json();
  console.log(data);
}

async function postDocuments() {
  const res = await fetch("https://kdt-api.fe.dev-cos.com/documents", {
    method: "POST",
    headers: {
      "x-username": "uky",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "세 번째 문서",
      parent: null,
    }),
  });
  const data = await res.json();
  console.log(data);
}

async function putDocuments() {
  const res = await fetch("https://kdt-api.fe.dev-cos.com/documents/155398", {
    method: "PUT",
    headers: {
      "x-username": "uky",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "세 번째 문서(1)",
    }),
  });
  const data = await res.json();
  console.log(data);
}

async function deleteDocuments() {
  const res = await fetch("https://kdt-api.fe.dev-cos.com/documents/155398", {
    method: "DELETE",
    headers: {
      "x-username": "uky",
    },
  });
  const data = await res.json();
  console.log(data);
}
// getDocuments();
// postDocuments();
// putDocuments();
// deleteDocuments();
