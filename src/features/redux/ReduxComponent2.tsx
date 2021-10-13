import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectText} from "./textSlice";


const ReduxComponent2 = () => {
    const text = useAppSelector(selectText);

    console.log('Rerender ReduxComponent2')

    return <div className="component2">
        State: { text }
    </div>
}

export default ReduxComponent2