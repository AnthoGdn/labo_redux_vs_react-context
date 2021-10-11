import React, { useState } from 'react';
import PropsComponent2 from "./PropsComponent2";
import PropsComponent3 from "./PropsComponent3";


const PropsComponent1 = () => {
    const [state, setState] = useState('My state')

    console.log('PropsComponent1')

    return <>
        <PropsComponent2 />
        <PropsComponent3 state={state} setState={setState} />
        </>
}

export default PropsComponent1