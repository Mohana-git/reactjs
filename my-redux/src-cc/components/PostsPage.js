import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions'
import {Post} from './Post'

const PostsPage = ({dispatch, loading, posts, hasErrors}) => {

    useEffect(() =>{
        dispatch(fetchPosts())
    }, [dispatch]

    )

    const rendorPosts = () => {
        if (loading) return <p>Loading page...</p>
        if (hasErrors) return <p>Unable to fetch or display posts.</p>
        return posts.map( (post) => <Post key={post.id} post={post} />
        )
    }


    return(
        <section>
            <ol>
            {rendorPosts()}
            </ol>
        </section>
    )
}

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,

})


export default connect(mapStateToProps)(PostsPage)