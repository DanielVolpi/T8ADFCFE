import IUserForm from '@/interfaces/IUserForm';

const submitUser = async (
  formData: IUserForm
): Promise<{ id: string | null }> => {
  const submitUserToDataBase = async () => {
    const response = await fetch(`${process.env.BACKEND_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data._id;
    }

    return null;
  };

  const id = await submitUserToDataBase();
  return { id };
};

export default submitUser;
