import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/action';

function PostForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const post = { title, body };
        dispatch(createPost(post));
        setTitle('');
        setBody('');
    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default PostForm;