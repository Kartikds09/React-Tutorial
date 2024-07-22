import ComponentB from "./ComponentB";
import React,{useState,createContext} from "react";

export const UserContext = createContext();


function ComponentA() {

    const [user,setUser] = useState("Kartik")

  return (
    <>
      <div className="box">
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>

        <ComponentB user={user}/>
        </UserContext.Provider>
      </div>
    </>
  );
}
export default ComponentA;
