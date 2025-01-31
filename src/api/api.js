import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const addUser = async (userData) => {
  try {
    const response = await axios.post(BASE_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

export const editUser = async (id, updatedUserData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedUserData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};