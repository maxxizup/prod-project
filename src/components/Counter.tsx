import { useState } from 'react';
import s from "./Counter.module.scss";

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
                <button className={s.btn} onClick={() => increment()}>+</button>
                <button className={s.btn} onClick={() => decrement()}>-</button>
            </div>
        </div>
    )
}
