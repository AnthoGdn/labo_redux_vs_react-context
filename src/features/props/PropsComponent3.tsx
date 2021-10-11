import React, { FC } from 'react';
import PropsComponent4 from "./PropsComponent4";

type Props = {
    state: string
    setState: (state: string) => void
}
const PropsComponent3: FC<Props> = ({ state, setState }) => {

    console.log('PropsComponent3')

    return <PropsComponent4 state={state} setState={setState} />
}

export default PropsComponent3