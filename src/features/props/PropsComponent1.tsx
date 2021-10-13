import React, { useState } from 'react';
import PropsComponent2 from "./PropsComponent2";
import PropsComponent3 from "./PropsComponent3";
import {State} from "./state";


const PropsComponent1 = () => {
    const [state, setState] = useState<State>({ text: 'My state' })

    console.log('PropsComponent1')

    return <div className="tool-container tool-container__props">
        <h1>Props</h1>
        <PropsComponent2 state={state} />
        <PropsComponent3 state={state} setState={setState} />
        </div>
}

export default PropsComponent1