import React from 'react';

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name.split(' ')[0]}</td>
      <td>{user.name.split(' ')[1]}</td>
      <td>{user.email}</td>
      <td>{user.company.name}</td>
      <td>
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default UserItem;