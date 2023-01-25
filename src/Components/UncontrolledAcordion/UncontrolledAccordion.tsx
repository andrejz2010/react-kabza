import React, {useState} from 'react';
import {Debugger} from "inspector";


type UnconrolledAccordionPropsType = {
    title: string

}

function UncontrolledAccordion(props: UnconrolledAccordionPropsType) {
    const [collapsed, SetCollapsed]=useState(false);
    return (<div>
            <AccordionTitle title={props.title} setCollapsed={SetCollapsed} collapsed={collapsed}/>
            {/*<button  onClick={()=>{SetCollapsed(!collapsed)}}>Toggle</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTtileType={
    setCollapsed: (value: boolean)=> void;
    collapsed: boolean;
}

function AccordionTitle(props: any) {
    return (
        <h3 onClick={()=>{props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
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