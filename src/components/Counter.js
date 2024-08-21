import React,{useState} from 'react';

const Counter = () => {
    const [state,setState]=useState(0);
    return (
        <>
        <p>Button clicked {state} times</p>
        <button onClick={()=>setState(state+1)}>Click me</button>
        </>
    );
};

export default Counter;