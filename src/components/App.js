import React from 'react';
import Counter from './Counter'
import store from './store'
const App = () => {
    return (
        <div>
            <h1>Counter using Redux</h1>
            <Counter store={store} />
        </div>
    )
}
export default App; 