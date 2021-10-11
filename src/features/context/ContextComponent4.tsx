import React, {FC, useContext} from 'react';
import {Context} from "./ContextComponent1";

const ContextComponent4: FC = () => {
    const { text, setText } = useContext(Context)

    console.log('ContextComponent4')

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
                    setText(event.target.value)
                }}
            />
        </div>
    </div>
}

export default ContextComponent4