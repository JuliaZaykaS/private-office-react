import axios from 'axios';

// axios.defaults.baseURL = 'https://backend-for-phonebook.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:5555/';

const tokenForFetch = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export { tokenForFetch };
