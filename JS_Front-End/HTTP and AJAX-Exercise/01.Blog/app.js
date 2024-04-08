function attachEvents() {
    const postsUrl = "http://localhost:3030/jsonstore/blog/posts"
    const commentUrl = "http://localhost:3030/jsonstore/blog/comments"
    const loadPostsButton = document.getElementById("btnLoadPosts")
    const postBodyElement = document.getElementById("post-body")
    const commentListElement = document.getElementById("post-comments")
    const postViewButton = document.getElementById("btnViewPost")
    const selectPostElement = document.getElementById("posts")
    loadPostsButton.addEventListener('click', () => {
        fetch(postsUrl)
            .then(response => response.json())
            .then(posts => {
                Object.values(posts)
                    .forEach(post => {
                        const optionElement = document.createElement("option")
                        optionElement.value = post.id;
                        optionElement.text = post.title;
                        selectPostElement.appendChild(optionElement)
                    })
            })
    })
    postViewButton.addEventListener('click', async () => {
        
    })
}


attachEvents();