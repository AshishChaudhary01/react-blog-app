const UserRow = () => {
  return (
    <>
      <tr>
        <td>Bob E</td>
        <td>bobe@gmail.com</td>
        <td>2025/01/01</td>
        <td className="action-btn-container">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </td>
      </tr>
    </>
  );
}

export default UserRow;