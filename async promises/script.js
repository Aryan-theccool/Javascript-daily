function profileLekarAao(username, cb) {
  // ...
}

function saarePostLekarAao(id, cb) {
  setTimeout(() => {
    console.log(`Fetching posts for user id: ${id}`);
    const posts = [
      { id: 1, title: "Post 1", likes: 10 },
      { id: 2, title: "Post 2", likes: 25 },
      { id: 3, title: "Post 3", likes: 5 }
    ];
    cb(posts);
  }, 1500);
}

function savedPostsNikaalo(id, cb) {
  // ...
}

profileLekarAao("harsh", function (data) {
  // sa function savedPostsNikaalo (id: any, cb: any): void
  savedPostsNikaalo(data._id, function (saved) {
    // ...
  });
});