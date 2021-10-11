import React from 'react';
import './App.css';
import PropsComponent1 from "./features/props/PropsComponent1";
import ReduxComponent1 from "./features/redux/ReduxComponent1";
import ContextComponent1 from "./features/context/ContextComponent1";

function App() {
  return (
    <div className="App">
        <PropsComponent1 />
        <ReduxComponent1 />
        <ContextComponent1 />
    </div>
  );
}

export default App;
