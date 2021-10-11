import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectText} from "./textSlice";


const ReduxComponent2 = () => {
    const text = useAppSelector(selectText);

    console.log('ReduxComponent2')

    return <>
        Layout: { text }
    </>
}

export default ReduxComponent2