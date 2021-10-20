import { useEffect, useState } from "react";
import axios from "axios";
import Info from "./components/Info";

function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState([]);

  const getId = (e) => {
    let id = e.target.value.toLowerCase();
    return setUserId(id);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="container">
      <h1 className="text-center display-2 text-primary">Dynamic select box</h1>
      <select
        onChange={(e) => getId(e)}
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option value="">select name</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <hr />
      <Info userId={userId} />
    </div>
  );
}
export default App;
