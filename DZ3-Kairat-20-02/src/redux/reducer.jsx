

const initialState = {
    count: 0
}


export default function reducer(state=initialState, action)
{
    if (action.type === "PLUS_COUNTER") {
        return {...state, count: state.count+1}
    }
    else if (action.type === "RESTART_COUNTER") {
        return {...state, count: 0}
    }
    else if (action.type === "MINUS_COUNTER") {
        if(state.count === 0) return state
        else return {...state, count: state.count-1}
    }
 
    return state
}