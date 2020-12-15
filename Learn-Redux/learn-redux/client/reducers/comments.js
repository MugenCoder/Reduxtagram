// a reducer takes in 2 Things:
// 1. The Action (info about what happened)
// 2. Copy of current State


function postComments(state = [], action) {
    // console.log(state, action);
    switch(action.type){
        case 'ADD_COMMENT':
            // return the new State with a new comment
            return [...state, {
                user: action.author,  // add new author of new comment
                text: action.comment  // add new comment from new slice of state 
            }];
        case 'REMOVE_COMMENT':
            return state;
        default:
            return state;
    }
    return state;
}

// Posts Reducer
function comments(state = [], action) {
    // console.log(state, action);
    // check for post item
    if(typeof action.postId !== 'undefined') {
        return {
            // take everything from the current state
            ...state,
            // overwrite this post with a new one using the key as a variable
            [action.postId]: postComments(state[action.postId], action)  // updating with a new Slice ([postId]) of State along with the entire (action) payload
        }
    }
    return state;
}

export default comments;