import { NavLink } from "react-router";
import UserRow from "../../components/backend/UserRow";

const User = () => {
  return (
    <>
      <div className="title">
        <h3 className="page-title">User:</h3>
      </div>
      <div className="content">
        <div className="addBtnContainer">
          <NavLink to={"/admin/user/create"} />
        </div>
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created on</th>
              <th>Action</th>
            </tr>
            <UserRow />
          </table>
        </div>
      </div>
    </>
  );
}

export default User;