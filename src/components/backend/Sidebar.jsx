import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <>
      <aside class="sidebar">
        <ul>
          <li>
            <NavLink to={"/admin/blog"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/setting"}>Setting</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Logout</NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;