import AddForm from "./components/AddForm";
import { fetchPosts } from "../src/api/index";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = () => fetchPosts().then((res) => setData(res.data));
    data();
  }, [data]);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };
  return (
    <div>
      {counter}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <AddForm />
      {data &&
        data.map((item) => {
          return (
            <div
              key={item._id}
              style={{
                display: "grid",
                gridTemplateColumns: "20% 40% 40%",
              }}
            >
              <p>{item.createdAt}</p>
              <p>{item.title}</p>
              <p>{item.message}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
