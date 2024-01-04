import { useState } from "react";
import data from "../mock-data.json";
const useTableMethod = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editContactId, setEditContactId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  // Adding data to form
  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormData = (e) => {
    e.preventDefault();
    const newFormData = {
      id: data.length + 2,
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContact = [...contacts, newFormData];
    setContacts(newContact);
  };

  // Editing form data
  const handleEditClick = (e, item) => {
    e.preventDefault();
    setEditContactId(item.id);

    const formValues = {
      fullName: item.fullName,
      address: item.address,
      phoneNumber: item.phoneNumber,
      email: item.email,
    };

    setEditFormData(formValues);
  };

  const handleEditFormData = (e) => {
    e.preventDefault();
    const formField = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[formField] = fieldValue;

    setEditFormData(newFormData);
  };

  // Updating form data after editing it
  const handleUpdateTableRowData = (e, item) => {
    e.preventDefault();
    const indexToUpdate = contacts.findIndex((x) => x.id === item.id);
    let tempContacts = [...contacts];
    const updateObj = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    tempContacts[indexToUpdate] = updateObj;
    setContacts(tempContacts);
    setEditContactId(null);
  };

  // Deleting contact
  const handleDeleteContact = (e, item) => {
    e.preventDefault();
    const indexToDelete = contacts.findIndex((x) => x.id === item.id);
    let tempContacts = [...contacts];
    tempContacts.splice(indexToDelete, 1);
    setContacts(tempContacts);
  };
  return {
    handleAddFormChange,
    handleEditClick,
    handleEditFormData,
    handleUpdateTableRowData,
    handleDeleteContact,
    handleAddFormData,
    contacts,
    setContacts,
    addFormData,
    setAddFormData,
    editContactId,
    setEditContactId,
    editFormData,
    setEditFormData,
  };
};

export default useTableMethod;
