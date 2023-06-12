export function getPosts() {
    return async function(dispatch) {
        const response = await fetch('https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts');
        const data = await response.json();
        dispatch({
            type: 'GET_POSTS',
            payload: data
        });
    }
}

export function createPost(post) {
    return async function(dispatch) {
        const response = await fetch('https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        dispatch({
            type: 'CREATE_POST',
            payload: data
        });
    }
}
  