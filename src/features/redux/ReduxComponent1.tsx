import React from 'react';
import ReduxComponent2 from "./ReduxComponent2";
import ReduxComponent3 from "./ReduxComponent3";


const ReduxComponent1 = () => {

    console.log('Rerender ReduxComponent1')

    return <div className="tool-container tool-container__redux">
        <h1>Redux</h1>
        <ReduxComponent2 />
        <ReduxComponent3 />
    </div>
}

export default ReduxComponent1