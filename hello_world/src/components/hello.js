import React from "react";

const Hello=()=>{
    // return <h1 className="dummy">hello shiv this is jsx</h1>
    //without using jsx
    return React.createElement('div',{id:'hello div',className:'hello'},React.createElement('h1',{id:'jsx id'},'This is jsx file'))
}
export default Hello;