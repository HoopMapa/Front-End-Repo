import React from "react"
import { CardBody,CardHeader } from 'grommet';


function PostCard({post}) {
    return (
        <>
        <CardHeader>
            <h2>{post.username}</h2>
        </CardHeader>
        <CardBody>
            <h2>{post.post_body}</h2>
        </CardBody>
        </>
    )
}

export default PostCard