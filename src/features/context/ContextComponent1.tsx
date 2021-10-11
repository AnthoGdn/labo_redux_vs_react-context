import React, {createContext, useState} from 'react';
import ContextComponent2 from "./ContextComponent2";
import ContextComponent3 from "./ContextComponent3";

export interface ContextType {
    text: string
    setText: (text: string) => void
}

const initialContext: ContextType = {
    text: 'My state',
    setText: () => {}
}

export const Context = createContext(initialContext)

const ContextComponent1 = () => {
    const [text, setText] = useState(initialContext.text)

    console.log('ContextComponent1')

    return <Context.Provider value={{text, setText}}>
        <ContextComponent2 />
        <ContextComponent3 />
    </Context.Provider>
}

export default ContextComponent1