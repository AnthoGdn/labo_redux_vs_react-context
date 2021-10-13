import React, { FC } from 'react';
import {State} from "./state";

type Props = {
    state: State
}

const PropsComponent2: FC<Props> = ({ state }) => {

    console.log('Rerender PropsComponent2')

    return <div className="component2">
        State: { state.text }
    </div>
}

export default PropsComponent2