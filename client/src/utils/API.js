import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },

  updateUser: (id, name, weight, feet, inches, age ) => {
    return axios.post(`api/update/${id}`, {name: name, weight: weight, feet: feet, inches: inches, age: age});
  },

  sendMessage: (username, message, sender) => {
    return axios.post(`/api/sendmessage`, { username: username, message: message, sender: sender });
  },

  displayMessages: (username) => {
    return axios.get(`/api/messages/${username}`, { username: username})
  },

  deleteMessage: (id) => {
    return axios.post(`/api/delete/${id}`)
  },

  markRead: (id) => {
    return axios.post(`/api/messages/${id}`)
  }
};
