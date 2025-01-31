import React, { useState } from 'react';
import UserList from '../components/UserList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (user) => {
    setSelectedUser(user);
    navigate(`/edit/${user.id}`);
  };

  const handleDelete = (id) => {
    setSelectedUser(null); 
  };

  return (
    <div>
      <h1>DashiFy</h1>
      <button onClick={() => navigate('/add')}>Add User</button>
      <UserList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Home;