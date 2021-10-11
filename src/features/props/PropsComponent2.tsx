import React, { FC } from 'react';
import {State} from "./state";

type Props = {
    state: State
}

const PropsComponent2: FC<Props> = ({ state }) => {

    console.log('PropsComponent2')

    return <>
        Layout: { state.text }
    </>
}

export default PropsComponent2