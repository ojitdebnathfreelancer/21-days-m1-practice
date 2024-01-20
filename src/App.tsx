import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex gap-x-5">
        <button
          onClick={() => dispatch(decrement())}
          type="button"
          className="border border-purple-600 rounded-md p-2 "
        >
          Decrement
        </button>
        <p>{count}</p>
        <button
          onClick={() => dispatch(increment())}
          type="button"
          className="border border-purple-600 rounded-md p-2 "
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(5))}
          type="button"
          className="border border-purple-600 rounded-md p-2 "
        >
          Increment By Value
        </button>
      </div>
    </div>
  );
}

export default App;
