import AddForm from "./components/AddForm";
import { fetchPosts } from "../src/api/index";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { increment, decrement } from "./store/index";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = () => fetchPosts().then((res) => setData(res.data));
    data();
  }, []);

  // const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const logout = () => {
    axios
      .get("http://localhost:4000/auth/logout", {
        withCredentials: true,
      })
      .then((res) => console.log(res));
  };

  // const incrementFn = () => {
  //   dispatch(increment());
  // };

  // const decrementFn = () => {
  //   dispatch(decrement());
  // };
  return (
    <div>
      {/* {counter.counter}
      <br />
      {user?.details?.username} */}
      {/* <button onClick={incrementFn}>increment</button>
      <button onClick={decrementFn}>decrement</button> */}
      <a href="#" onClick={logout}>
        Logout
      </a>
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
