import React, {useState} from 'react';
/*import './App.css';*/
import Rating, {RatingValueType} from '../src/Components/Rating'
import Accordion from "./Components/Accordion";
import UncontrolledOnOff from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledRating from "./Components/UncontrolledRating/UncontrolledRating";
import ControlledOnOff from "./Components/ControlledOnOff/ControlledOnOff";

function App() {
    console.log('App rendering')
    const [ratingValue, setRatingValue]=useState<RatingValueType>(0);
    const [collapsedValue, SetCollapsedValue]=useState<boolean>(false);
    const [on, setOn] = useState(false);
    const [onUncontrolled, setOnUncontrolled] = useState(false);
    return (

        <div className="App">
{/*<UncontrolledRating />*/}
            <Accordion title={'Menu'} collapsed={collapsedValue} onClick={SetCollapsedValue} />
            {/*<Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <ControlledOnOff On={on} OnClick={setOn} />
            <UncontrolledOnOff onChange={setOnUncontrolled} /> <h1>{onUncontrolled.toString()}</h1>
            {/*<UncontrolledOnOff />*/}
            {/*<UncontrolledOnOff />*/}
            {/*<UncontrolledOnOff />*/}
            {/*<UncontrolledAccordion title={'Hello'} />*/}
            {/*<Rating ratingValue={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledOnOff on={true} />
            <UncontrolledOnOff on={false} />*/}
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
