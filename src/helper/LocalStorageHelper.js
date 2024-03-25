export const GetDataFromLocalStorageByKey = (key) => {
  return localStorage.getItem(key);
};

export const SetDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
  return GetDataFromLocalStorageByKey(key);
};

export const localStorageHelper = {
  SetDataToLocalStorage,
  GetDataFromLocalStorageByKey
}