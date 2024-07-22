import React,{useState,useEffect} from "react";

function App_useEffect(){

    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");

    //Case -1 only on re-render
    // useEffect(()=>{
    //     document.title = `Count: ${count}`
    // })

    //Case -2 run only when mount the first time
    // useEffect(()=>{
    //     document.title = `Count: ${count}`
    // },[])

// Case -3 Runs on mount + when value changes
    useEffect(()=>{
        document.title = `Count: ${count} ${color}`
    },[count,color])

    function addCount()
    {
        setCount(c => c+1);
    }

    function subCount()
    {
        setCount(c => c - 1);
    }

    function chngColor(){
        setColor(c => c === 'green' ? "red" : "green");
    }

    return(
        <>
            <p style={{color: color}}>Count : {count}</p>
            <button onClick={addCount} style={{marginRight:'5px'}}>Add</button>
            <button onClick={subCount} >Subtract</button>
            <button onClick={chngColor} style={{marginTop:'5px'}}>Change Color</button>
        </>
    )
}
export default App_useEffect;