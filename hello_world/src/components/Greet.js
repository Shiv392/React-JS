import React from 'react';

// function Greet(){
//     return <h1>this is first component : shivsoni</h1>
// }
let Greet=(props)=>{
    // console.log(props);
    const {name,role}=props;
    return (
        <div>
    <h1>This Is First Component : Hello {name} as {role}</h1>
    {props.children}

        </div>
    )
}
export default Greet;