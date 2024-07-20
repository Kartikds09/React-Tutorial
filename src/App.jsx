import { useState } from 'react'
import Counter from './Counter.jsx'

function App(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count -1);
    }

    const reset = () => {
        setCount(0);
    }


    return(
        <>
            <div className='counter-container'>
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrease</button>
                <button className="counter-button" onClick={reset}>Reset Counter</button>
                <button className="counter-button" onClick={increment}>Increase</button>
            </div>
        </>
    )
}
export default App