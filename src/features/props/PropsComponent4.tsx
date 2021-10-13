import React, { FC } from 'react';
import {State} from "./state";

type Props = {
    state: State
    setState: (state: State) => void
}
const PropsComponent4: FC<Props> = ({ state, setState }) => {

    console.log('Rerender PropsComponent4')

    return <div className="component4">
        <div>
            ---------
        </div>
        <div>
            State: { state.text }
        </div>
        <div>
            ---------
        </div>
        <div>
            <input
                value={state.text}
                onChange={(value) => {
                    setState({ ...state, text: value.target.value})
                }}
            />
        </div>
    </div>
}

export default PropsComponent4