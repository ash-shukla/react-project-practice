const EditableRow = ({
  editFormData,
  handleUpdateTableRowData,
  handleEditFormData,
  setEditContactId,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          placeholder="Enter a name"
          required={true}
          value={editFormData.fullName}
          onChange={handleEditFormData}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          placeholder="Enter an address"
          required={true}
          value={editFormData.address}
          onChange={handleEditFormData}
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter a phone number"
          required={true}
          value={editFormData.phoneNumber}
          onChange={handleEditFormData}
        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          placeholder="Enter an email"
          required={true}
          value={editFormData.email}
          onChange={handleEditFormData}
        />
      </td>
      <td>
        <button onClick={handleUpdateTableRowData}>Save</button>
        <button onClick={() => setEditContactId(null)}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
