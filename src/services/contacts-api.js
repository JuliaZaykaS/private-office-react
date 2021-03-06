import axios from 'axios';

axios.defaults.baseURL = 'https://backend-for-phonebook.herokuapp.com/';

const tokenForFetch = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export { tokenForFetch };
