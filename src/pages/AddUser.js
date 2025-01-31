import React from 'react';
import UserForm from '../components/UserForm';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../api/api';

const AddUser = () => {
  const navigate = useNavigate();

  const handleSave = async (userData) => {
    try {
      await addUser(userData);
      navigate('/');
    } catch (error) {
      alert('Failed to add user.');
    }
  };

  return <UserForm onSave={handleSave} />;
};

export default AddUser;