import { createStore } from 'redux';

const initialState = {
    Count: 3
}

const reducer = (state = initialState, action) => {
    console.log(`reducer working ${action}`)
    return state
}

const store = createStore(reducer)
export default store; 