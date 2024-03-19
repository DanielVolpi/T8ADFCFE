const getCountries = async () => {
  try {
    const response = await fetch(
      'https://restcountries.com/v3/all?fields=name'
    );
    const data = await response.json();
    return data.map((country) => country.name.common);
  } catch (error) {
    console.error('Error Fetching Data:', error);
    return [];
  }
};

export default getCountries;
