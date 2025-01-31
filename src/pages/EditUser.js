import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { editUser } from '../api/api';
import { getUsers } from '../api/api';

const EditUser = () => {
  const { id } = useParams();
  const [userToEdit, setUserToEdit] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await getUsers();
        const user = users.find((user) => user.id === parseInt(id));
        setUserToEdit(user);
      } catch (error) {
        alert('Failed to fetch user.');
      }
    };
    fetchUser();
  }, [id]);

  const handleSave = async (userData) => {
    try {
      await editUser(id, userData);
      navigate('/');
    } catch (error) {
      alert('Failed to update user.');
    }
  };

  return userToEdit ? <UserForm onSave={handleSave} userToEdit={userToEdit} /> : <p>Loading...</p>;
};

export default EditUser;