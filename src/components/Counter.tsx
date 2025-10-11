import { useState } from 'react';
import './Counter.scss';

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1);
    }

  return (
        <div>
            <h1>Count: {count}</h1>
            <div>
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
            </div>
        </div>
    )
}
