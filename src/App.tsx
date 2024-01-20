import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

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
