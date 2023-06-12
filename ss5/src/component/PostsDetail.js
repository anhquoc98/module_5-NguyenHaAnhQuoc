import React, {useEffect, useState} from 'react';
import {findById} from "../service/PostsService";
import {useNavigate, useParams} from "react-router";

export function PostsDetail() {
    let navigate = useNavigate()
    let param = useParams()
    const [byId, setFindById] = useState(null)

    useEffect(() => {
        const getId = async () => {
            const rs = await findById(param.id)
            setFindById(rs.data)
        }
        getId()
    }, [param.id])
    if (!byId) {
        return null
    }
    return (
        <div>
            <table className='table table-primary' border='5px'>
                <tbody>
                <tr>
                    <th>id</th>
                    <th>{byId.id}</th>
                </tr>
                <tr>
                    <th>title</th>
                    <th>{byId.title}</th>
                </tr><tr>
                    <th>category</th>
                    <th>{byId.category}</th>
                </tr>
                <tr>
                    <th>updatedAt</th>
                    <th>{byId.updatedAt}</th>
                </tr>
                <tr>
                    <th>slug</th>
                    <th>{byId.slug}</th>
                </tr><tr>
                    <th>content</th>
                    <th>{byId.content}</th>
                </tr>
                </tbody>

            </table>

        </div>
    );
}

export default PostsDetail;