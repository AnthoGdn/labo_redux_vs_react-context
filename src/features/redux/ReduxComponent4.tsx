import React, { FC } from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectText, set} from "./textSlice";

const ReduxComponent4: FC = () => {
    const text = useAppSelector(selectText);
    const dispatch = useAppDispatch();

    console.log('ReduxComponent4')

    return <div>
        <div>
            ---------
        </div>
        <div>
            { text }
        </div>
        <div>
            ---------
        </div>
        <div>
            <input
                value={text}
                onChange={(event) => {
                    dispatch(set(event.target.value))
                }}
            />
        </div>
    </div>
}

export default ReduxComponent4