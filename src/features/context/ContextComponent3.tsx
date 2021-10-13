import React, {FC, useEffect} from 'react';
import ContextComponent4 from "./ContextComponent4";

const ContextComponent3: FC = () => {

    console.log('Rerender ContextComponent3')

    useEffect(() => {
        console.log('ContextComponent3 request an api via http.')
    }, [])

    return <div><ContextComponent4 /></div>
}

export default ContextComponent3