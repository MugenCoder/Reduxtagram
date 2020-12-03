import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Main = React.createClass({
    render() {
        // destructure in variable form (best practice)
        const { postId } = this.props.params;

        // index of the post
        const i = this.props.posts.findIndex((post) => post.code === postId);
        console.log(i)
        // fetch the post
        const post = this.props.posts[i] || [];
        console.log(post)

        const postComments = this.props.comments[postId]
        
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} /> 
                <Comments postComments={postComments} />
            </div>
        )
    }
})

export default Main;