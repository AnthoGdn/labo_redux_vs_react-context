import React, {FC, useEffect} from 'react';
import PropsComponent4 from "./PropsComponent4";
import {State} from "./state";

type Props = {
    state: State
    setState: (state: State) => void
}
const PropsComponent3: FC<Props> = ({ state, setState }) => {

    console.log('Rerender PropsComponent3')

    useEffect(() => {
        console.log('PropsComponent3 request an api via http.')
    }, [])

    return <PropsComponent4 state={state} setState={setState} />
}

export default PropsComponent3