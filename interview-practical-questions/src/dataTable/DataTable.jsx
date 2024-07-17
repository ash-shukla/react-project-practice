const DataTable = () => {
  return (
    <div className="container-table">
      <div className="add-container">
        <div className="info-container">
          <input type="text" placeholder="Name" name="name" value={""} />
          <input type="text" placeholder="Gender" name="gender" value={""} />
          <input type="text" placeholder="Age" name="age" />
        </div>
        <button className="add">Add</button>
      </div>

      <div className="search-table-container">
        <input type="text" placeholder="Search by name" value={""} />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="pagination"></div>
      </div>
    </div>
  );
};

export default DataTable;
