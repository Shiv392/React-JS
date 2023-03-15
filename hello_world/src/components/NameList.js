import React from 'react';
import Person from './person';

function NameList() {
    const names=['bruce','clark','diana']
    const person=[
        {
            id:1,name:'bruce',age:25,skills:'react'
        },{
            id:2,name:'clark',age:22,skills:'angular'
        },{
            id:3,name:'diana',age:44,skills:'vue'
        }
    ]
    const personlist=person.map(person=><Person key={person.id} person={person}></Person>);
    const nameList=names.map((name,index)=><h3 key={index}>{name}{index}</h3>)
  return (
    <div>
    {/* {
        name.map(name=><li>{name+'new'}</li>)
    } */}
    {
        personlist
    }
    {
        nameList
    }
    </div>
  )
}

export default NameList
