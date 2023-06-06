import React, {useState} from "react";
import slugify from "slugify";

export function CreatePosts({ setUseList }) {
    const currentDateTime = new Date().toLocaleString();
    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const category = event.target.elements.category.value;
        const content = event.target.elements.content.value;

        const validationErrors = {};

        // Kiểm tra các trường bắt buộc
        if (!title) {
            validationErrors.title = 'Title is required';
        }
        if (!category) {
            validationErrors.category = 'Category is required';
        }
        if (!content) {
            validationErrors.content = 'Content is required';
        }

        if (Object.keys(validationErrors).length === 0) {
            const newMember = {
                title,
                category,
                slug:slugify(title,{lower:true,strict:true}),
                content,
                updatedAt: currentDateTime
            };
            setUseList((preData) => preData.concat(newMember));
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" name="title" />
                {errors.title && <span>{errors.title}</span>}
                <input type="text" placeholder="category" name="category" />
                {errors.category && <span>{errors.category}</span>}
                <input type="text" placeholder="content" name="content" />
                {errors.content && <span>{errors.content}</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}