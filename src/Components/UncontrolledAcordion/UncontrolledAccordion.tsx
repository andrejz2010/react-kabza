import React, {useState} from 'react';
import {Debugger} from "inspector";


type UnconrolledAccordionPropsType = {
    title: string

}

function UncontrolledAccordion(props: UnconrolledAccordionPropsType) {
    const [collapsed, SetCollapsed]=useState(false);
    return (<div>
            <AccordionTitle title={props.title}/>
            <button  onClick={()=>{SetCollapsed(!collapsed)}}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}



function AccordionTitle(props: any) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    )
}


export default UncontrolledAccordion;