import React from "react"
import { CardBody } from 'grommet';

function PostCard({post}) {
    return (
        <>
        <CardBody>
            <h2>{post.username}</h2>
            <h2>{post.post_body}</h2>
        </CardBody>
        </>
    )
}

export default PostCard