import { useAppDispatch, useAppSelector } from "../services/store/hooks";
import {
  decrement,
  increment,
  incrementByNumber,
  resetInitialState,
} from "../services/store/slices/counter";

export const Counter = () => {
  const dispatch = useAppDispatch();

  const counter = useAppSelector((state) => state.counter.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const hanldeIncrementBy = () => {
    dispatch(
      incrementByNumber({
        value: 5,
      })
    );
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(resetInitialState());
  };

  return (
    <>
      <h2>El contador es: {counter}</h2>

      <button onClick={handleIncrement}>+1</button>
      <button onClick={hanldeIncrementBy}>+5</button>
      <button onClick={handleReset}>Resetear</button>
      <button onClick={handleDecrement}>-1</button>
    </>
  );
};
