import React from 'react';
import './mystyle.css'

function StyleSheet (props){
    let classname=props.primary?'primary':""
return (
    <div>
        <h1 className={`${classname} font-xl`}>this is style sheet</h1>
        <h3 className='secondary'>thi is seconday text</h3>
    </div>
)
}
export default StyleSheet;