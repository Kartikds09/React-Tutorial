import React,{useState} from 'react'

function App_updArrState(){

    const[foods,setFoods] = useState(["Apple","orange","banana"])

    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => ([...f,newFood]));
    }

    function handleDeleteFood(index){
        setFoods(f => f.filter((_,i)=> i!== index))

    }

    return(
        <>
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food,index) => <li key={index} style={{marginBottom:"5px"}}>{food}
                <button onClick={() => handleDeleteFood(index)} style={{marginLeft:"10px"}}>Delete Food</button>
                </li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter food name'/>
            <button onClick={handleAddFood}>Add Food</button>
            
        </div>
        </>
    )
}

export default App_updArrState