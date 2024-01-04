import ReadOnlyRows from "./components/ReadOnlyRows";
import EditableRow from "./components/EditableRow";
import useTableMethod from "./components/useTableMethod";

const App = () => {
  const {
    handleAddFormChange,
    handleEditClick,
    handleEditFormData,
    handleUpdateTableRowData,
    handleDeleteContact,
    handleAddFormData,
    contacts,
    editContactId,
    setEditContactId,
    editFormData,
  } = useTableMethod();

  return (
    <div className="app-container">
      <form onSubmit={handleUpdateTableRowData}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((item) => {
              return (
                <>
                  {editContactId === item.id ? (
                    <EditableRow
                      key={editContactId}
                      handleEditFormData={handleEditFormData}
                      editFormData={editFormData}
                      editContactId={editContactId}
                      setEditContactId={setEditContactId}
                      handleUpdateTableRowData={(e) =>
                        handleUpdateTableRowData(e, item)
                      }
                      item={item}
                    />
                  ) : (
                    <ReadOnlyRows
                      key={item.id}
                      editContactId={editContactId}
                      handleEditClick={(e) => handleEditClick(e, item)}
                      handleDeleteContact={(e) => handleDeleteContact(e, item)}
                      item={item}
                    />
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </form>
      <h1>Add a contact</h1>

      <form onSubmit={handleAddFormData}>
        <input
          type="text"
          name="fullName"
          placeholder="Enter a name"
          required={true}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter an address"
          required={true}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter a phoneNumber"
          required={true}
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter an email"
          required={true}
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
