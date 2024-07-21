import React,{useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function increment(){
        // setCount(count+1);

        //using updater which is better as updates variable also
        setCount(c => c+1);
        
        setCount(c => c+1);
        setCount(c => c+1);
    }

    function decrement(){
        // setCount(count -1);

        //updater
        setCount(c => c -1);

        setCount(c => c -1);
        setCount(c => c -1);
    }

    function reset(){
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
export default Counter