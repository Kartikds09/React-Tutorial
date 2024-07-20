function Button(){
    let count=0;
    // const handleClick = () => console.log("Ouch!!") ;

    // const handleClick2 = (name) =>{
        
    //     if(count<5)
    //     {
    //         count++;
    //         console.log(`${name}, you have clicked me ${count} times`) ;

    //     }
    //     else{
    //         console.log(`${name} now it's enough`)
    //     }
        
    // } 
    const handleClick = (e) => e.target.textContent = "Ouch🥺" ;


    return(
        <>
        {/* <button onClick={() => handleClick2("Kartik")}>Click Me 😏</button> */}
        <button onDoubleClick={(e) => handleClick(e)}>Click Me 😏</button>
        </>
    )
}
export default Button