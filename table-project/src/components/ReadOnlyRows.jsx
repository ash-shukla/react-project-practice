const ReadOnlyRows = ({ item, handleEditClick, handleDeleteContact }) => {
  return (
    <tr key={item.id}>
      <td>{item.fullName}</td>
      <td>{item.address}</td>
      <td>{item.phoneNumber}</td>
      <td>{item.email}</td>
      <td>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteContact}>Delete</button>
      </td>
    </tr>
  );
};

ReadOnlyRows.p;

export default ReadOnlyRows;
