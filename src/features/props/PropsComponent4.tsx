import React, { FC } from 'react';

type Props = {
    state: string
    setState: (state: string) => void
}
const PropsComponent4: FC<Props> = ({ state, setState }) => {

    console.log('PropsComponent4')

    return <div>
        <div>
            ---------
        </div>
        <div>
            { state }
        </div>
        <div>
            ---------
        </div>
        <div>
            <input
                value={state}
                onChange={(value) => {
                    setState(value.target.value)
                }}
            />
        </div>
    </div>
}

export default PropsComponent4