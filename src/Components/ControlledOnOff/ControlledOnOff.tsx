import React, {useState} from 'react';

type OnOffPropsType={
    On: boolean;
    OnClick: (On: boolean)=>void
}
const ControlledOnOff=(props: OnOffPropsType)=>{


const onStyle={
    width:'30px',
    height: '20px',
    border: '1px solid black',
    display:'inline-block',
    padding: '2px',
    backgroundColor: props.On ? 'green' : 'white'
};
const offStyle={
    width:'30px',
    height: '20px',
    border: '1px solid black',
    display:'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: props.On ? 'white' : 'red'
};
const indicatorStyle={
    width: '10px',
    height: '10px',
    borderRadius: '15px',
    border: '1px solid black',
    display:'inline-block',
    marginLeft: '5px',
    backgroundColor: props.On ? 'green' : 'red'

};

    return (
<div>
    <div style={onStyle} onClick={()=>{props.OnClick(true)}}>on</div>
    <div style={offStyle} onClick={()=>{props.OnClick(false)}}>off</div>
    <div style={indicatorStyle}></div>
</div>
    )
}
export default ControlledOnOff;