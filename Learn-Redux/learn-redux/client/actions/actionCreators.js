// ACTION CREATORS = functionality that uses an action (event object) to update

// Increment Likes Action Creator
export function increment(index) {
    // Action Creator (returned event object)
    return {
        type: 'INCREMENT_LIKES', // Action Value (object key/value)
        index // same as 'index: index' in ES6
    }
}

// Add Comment Action Creator
export function addComment(postId, author, comment) {
    console.log('Dispating add comment')
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// Remove Comment Action Creator
export function removeComment(postId, i) {  // (what post should we remove the comment from, what comment should we remove)
    return {
        type: 'REMOVE_COMMENT',
        i, // [i]
        postId
    }
}