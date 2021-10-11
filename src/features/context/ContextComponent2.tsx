import React, {useContext} from 'react';
import {Context} from "./ContextComponent1";


const ContextComponent2 = () => {
    const { text } = useContext(Context)

    console.log('ContextComponent2')

    return <>
        Layout: { text }
    </>
}

export default ContextComponent2