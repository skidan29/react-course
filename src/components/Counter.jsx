import React, {useState} from "react";
import './Counter.css';

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}