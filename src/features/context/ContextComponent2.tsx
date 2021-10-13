import React, {useContext} from 'react';
import {Context} from "./ContextComponent1";


const ContextComponent2 = () => {
    const { text } = useContext(Context)

    console.log('ContextComponent2')

    return <div className="component2">
        State: { text }
    </div>
}

export default ContextComponent2