import axios from 'axios';

// axios.defaults.baseURL = 'https://backend-for-phonebook.up.railway.app/';
axios.defaults.baseURL = 'https://backendforphonebook-sys55.b4a.run/';

const tokenForFetch = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export { tokenForFetch };
