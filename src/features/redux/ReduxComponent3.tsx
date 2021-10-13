import React, {FC, useEffect} from 'react';
import ReduxComponent4 from "./ReduxComponent4";

const ReduxComponent3: FC = () => {

    console.log('Rerender ReduxComponent3')

    useEffect(() => {
        console.log('ReduxComponent3 request an api via http.')
    }, [])

    return <ReduxComponent4 />
}

export default ReduxComponent3