import { NavLink } from "react-router";
import BlogRow from "../../components/backend/BlogRow";

const Blog = () => {
  return (
    <>
      <div className="title">
        <h3 className="page-title">Blog:</h3>
      </div>
      <div className="content">
        <div className="addBtnContainer">
          <NavLink to={"/admin/blog/create"} />
        </div>
        <div>
          <table>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Created on</th>
              <th>Action</th>
            </tr>
            <BlogRow />
          </table>
        </div>
      </div>
    </>
  )
}

export default Blog;