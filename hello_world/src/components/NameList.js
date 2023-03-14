import React from 'react';
import Person from './person';

function NameList() {
    const name=['shivsoni','aliyasoni','riyasoni','pushu','dhakdhak'];
    const person=[
        {
            id:1,name:'bruce',age:25,skills:'react'
        },{
            id:2,name:'clark',age:22,skills:'angular'
        },{
            id:3,name:'diana',age:44,skills:'vue'
        }
    ]
    const personlist=person.map(person=><Person person={person}></Person>)
  return (
    <div>
    {
        name.map(name=><li>{name+'new'}</li>)
    }
    {
        personlist
    }
    </div>
  )
}

export default NameList
