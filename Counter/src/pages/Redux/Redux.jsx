import React from 'react'
import { increment, decrement, reset } from './counterSlice';
import { useDispatch, useSelector } from 'react-redux';
 
const Redux = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.value)

  const onInrement = () => {
    dispatch(increment());
  }

  const onDecrement = () => {
    dispatch(decrement());
  }

  const onReset = () => {
    dispatch(reset());
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={onInrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Redux