import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/api';
import UserItem from './UserItem';

const UserList = ({ onEdit, onDelete }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        alert('Failed to fetch users.');
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      alert('Failed to delete user.');
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;