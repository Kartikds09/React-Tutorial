import React,{useState,useEffect} from "react"

function App_height_width(){
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    //without useEffect - means using eventListener
    // window.addEventListener("resize",handleResize)

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("Added Event Listener");

        return () => {
            window.removeEventListener('resize',handleResize);
            console.log("Removed Event Listener");
        }
    },[])

    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`
    },[width,height])


    function handleResize()
    {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <p>Window Width: {width} px</p>
        <p>Window Height: {height} px</p>
        </>
    )
}
export default App_height_width