
// useState() = Re-renders the component when the state value changes.

// useRef() =  "use Reference" Does not cause re-renders when its value changes.
//              When you want a component to "remember" some information,
//              but you don't want that information to trigger new renders.
//              1.Accessing/ Interacting with DOM elements
//              2.Handling Focus, Animations, and Transitions
//              3.Managing Timers and Intervals


import React,{useState,useEffect,useRef} from "react";

function App_useRef(){

    // let [number,setNumber] = useState(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=>{
        console.log('component rendered');
        console.log(inputRef1)
    },)

    function handleClk1(){
        // setNumber(n => n + 1);
        // ref.current++;
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "Yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }
    
    function handleClk2(){
        // setNumber(n => n + 1);
        // ref.current++;
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "Yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClk3(){
        // setNumber(n => n + 1);
        // ref.current++;
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "Yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
    }

    return(
        <>
        <div>
        <button onClick={handleClk1}>Click Me1</button>
        <input ref={inputRef1} />
        <br />
        <button onClick={handleClk2}>Click Me2</button>
        <input ref={inputRef2} />

        <br />
        <button onClick={handleClk3}>Click Me3</button>
        <input ref={inputRef3} />
        </div>
        </>
    )
}

export default App_useRef