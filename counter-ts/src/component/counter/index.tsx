import React, { useEffect } from "react";
import './style.css';
const Counter: React.FC = () => {

    const [count, setCount] = React.useState(0);   
    
    useEffect(() => {
        console.log('Counter component mounted');    
        return function(){
         console.log('Counter component unmounted');
        };
    }, []); 
            useEffect(() => {
        console.log('Counter component during updte');    }, [count]); 

    const increment = () => {
        setCount(count + 1);        }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );

}

export default Counter;