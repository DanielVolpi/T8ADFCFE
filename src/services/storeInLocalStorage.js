const storeInLocalStorage = (key, dataToStore) => {
  const jsonObject = JSON.stringify(dataToStore);
  localStorage.setItem(key, jsonObject);
};

export default storeInLocalStorage;
