import { useEffect, useState } from "react";
import axios from "axios";

function Info(props) {
  const [id] = props.userId;
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((error) => console.log("error:", error));
    }
  }, [id]);

  return (
    <div style={{ display: id ? "block" : "none" }}>
      <h1 className="text-center display-1 text-success">User Information</h1>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <td>
              <h3 className="text-success">Name: </h3>
            </td>
            <td>
              <h4> {userInfo.name}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="text-success">Email: </h3>
            </td>
            <td>
              <h4> {userInfo.email}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="text-success">Site: </h3>
            </td>
            <td>
              <h4> {userInfo.website}</h4>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
export default Info;
