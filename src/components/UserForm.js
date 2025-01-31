import React, { useState, useEffect } from 'react';

const UserForm = ({ onSave, userToEdit }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    department: ''
  });

  useEffect(() => {
    if (userToEdit) {
      setUserData({
        name: userToEdit.name,
        email: userToEdit.email,
        department: userToEdit.company.name
      });
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{userToEdit ? 'Edit User' : 'Add User'}</h2>
      <label>
        Name:
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </label>
      <br />
      <label>
        Department:
        <input
          type="text"
          value={userData.department}
          onChange={(e) => setUserData({ ...userData, department: e.target.value })}
        />
      </label>
      <br />
      <button type="submit">{userToEdit ? 'Save Changes' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;