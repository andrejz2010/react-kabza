import React from 'react';
/*import './App.css';*/
import Rating from '../src/Components/Rating'
import Accordion from "./Components/Accordion";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAcordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log('App rendering')
    return (
        <div className="App">

            {/*<Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />
            <UncontrolledAccordion title={'Hello'} />
            <UncontrolledRating />
            {/*<OnOff on={true} />
            <OnOff on={false} />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: any) {
    return (
        <div>
            <h1> {props.title} </h1>
        </div>
    )
}

export default App;
