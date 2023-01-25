import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
}
const UncontrolledOnOff = (props: OnOffPropsType) => {
    const [on, setOn] = useState(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'

    };

    const OnClicked=()=>{
        setOn(true);
        props.onChange(true);
    };
    const OffClicked=()=>{
        setOn(false);
        props.onChange(false);
    };


    return (
        <div>
            <div style={onStyle} onClick={ OnClicked }>on</div>
            <div style={offStyle} onClick={OffClicked}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
export default UncontrolledOnOff;