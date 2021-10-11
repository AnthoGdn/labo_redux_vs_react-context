import React, { FC } from 'react';
import PropsComponent4 from "./PropsComponent4";
import {State} from "./state";

type Props = {
    state: State
    setState: (state: State) => void
}
const PropsComponent3: FC<Props> = ({ state, setState }) => {

    console.log('PropsComponent3')

    return <PropsComponent4 state={state} setState={setState} />
}

export default PropsComponent3