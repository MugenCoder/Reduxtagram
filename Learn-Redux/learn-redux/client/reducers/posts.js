// a reducer takes in 2 Things:
// 1. The Action (info about what happened)
// 2. Copy of current State

// Posts Reducer
function posts(state = [], action) { // at beginning, the store reducer state is an empty arr to pass it's first update action
    // console.log('The post will change');
    // console.log(state, action);
    // need a switch statement to call actions specifically for this reducer since all reducers run at the same time as the cli listens for events 
    switch(action.type) {
        case 'INCREMENT_LIKES' :
        // returne the updated state 
        console.log('Incrementing Likes');
        const i = action.index;
        return [
            ...state.slice(0,i),  // before the one we are updating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1),  // after the one we are updating
        ]
        default:    // always needed when running multiple reducers
            return state;
    }
}

export default posts;