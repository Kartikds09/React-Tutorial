import React, { useState } from "react";

function MyComponent() {

  const [name, setname] = useState("Guest");
  const [age,setAge] = useState(0);
  const [isEmployed,setIsEmployed] = useState(false);

  const updateName = () => {
    setname("Kartik");
  };

const incrementAge = () => {
    setAge(age+1);
};

const toggleStatus = () => {
    setIsEmployed(!isEmployed)
};


  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        <p>Employed or not : {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleStatus}>Change status</button>
      </div>
    </>
  );
}
export default MyComponent;
