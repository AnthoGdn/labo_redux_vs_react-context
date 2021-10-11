import React from 'react';
import ReduxComponent2 from "./ReduxComponent2";
import ReduxComponent3 from "./ReduxComponent3";


const ReduxComponent1 = () => {

    console.log('ReduxComponent1')

    return <>
        <ReduxComponent2 />
        <ReduxComponent3 />
        </>
}

export default ReduxComponent1