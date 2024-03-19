const getSpecialists = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const specialists = [
        {
          id: '1',
          firstname: 'José',
          lastname: 'Perez',
          position: 'Presidente',
        },
        {
          id: '2',
          firstname: 'José',
          lastname: 'Perez',
          position: 'Customer Service Senior Manager',
        },
        {
          id: '3',
          firstname: 'José',
          lastname: 'Perez',
          position: 'Senior Customer Success Consultant',
        },
        {
          id: '4',
          firstname: 'José',
          lastname: 'Perez',
          position: 'Gerente de Consultoría de Soluciones',
        },
      ];
      resolve(specialists);
    }, 1000);
  });
};

export default getSpecialists;
