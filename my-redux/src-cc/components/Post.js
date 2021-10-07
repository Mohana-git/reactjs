import React from 'react'

export const Post = ({post}) => {
    return(
    
        <li key ={post.id}>{post.title}</li>    
    )
}