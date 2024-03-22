const deleteUser = async (id) => {
  try {
    const url = `${process.env.BACKEND_URL}/users/${id}`;

    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return true;
  } catch (error) {
    console.error('There was a problem deleting the user:', error);
    return false;
  }
};

export default deleteUser;
