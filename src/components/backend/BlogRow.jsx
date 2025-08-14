const BlogRow = () => {
  return (
    <>
      <tr>
        <td>Title 1</td>
        <td>Author 1</td>
        <td>2025/01/01</td>
        <td className="action-btn-container">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </td>
      </tr>
    </>
  );
}

export default BlogRow;