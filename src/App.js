import { useSelector, useDispatch } from "react-redux";
import { changeUsersName } from "./redux/actions";
import { changeUsersAge } from "./redux/actions";
import { useState } from "react";



function App() {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.addUserReducer.name);
  const [age, setAge] = useState(user.addUserReducer.age);
  console.log('user', user)
  
  const handleChange = () =>{
    dispatch({ type: 'counter/incremented' });
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <div>Value:{user.counter.value}</div>
      <button onClick={handleChange}>Click</button>

      <div className="App">
      <h1>Name: {user.addUserReducer.name}</h1>
      <h1>Age: {user.addUserReducer.age}</h1>
      <hr></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeUsersName(name));
          dispatch(changeUsersAge(age));
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Change name"
        ></input>
        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Change age"
        ></input>
        <input type="submit" value="Change user details" />
      </form>
    </div>
    </div>
  );
}

export default App;