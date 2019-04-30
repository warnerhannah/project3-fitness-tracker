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
    return axios.put(`api/update/${id}`, {name: name, weight: weight, feet: feet, inches: inches, age: age});
  },

  getCalendar: () => {
    return axios.get(`/calendar`);
  },

  createCalendar: (title, start, end) => {
    return axios.post(`api/calendar`, {title: title, start: start, end: end});
  },

  deleteCalendar: (id, title, start, end) => {
    return axios.post(`api/delete/calendar/${id}`, {title: title, start: start, end: end});
  },

  updateCalendar: (id, title, start, end) => {
    return axios.put(`api/update/calendar/${id}`, {title: title, start: start, end: end});
  },

  getCalories: () => {
    return axios.get(`/calories`);
  },

  createCalories: (title, start, end) => {
    return axios.post(`api/calories`, {title: title, start: start, end: end});
  },

  deleteCalories: (id, title, start, end) => {
    return axios.post(`api/delete/calories/${id}`, {title: title, start: start, end: end});
  },

  updateCalories: (id, title, start, end) => {
    return axios.put(`api/update/calories/${id}`, {title: title, start: start, end: end});
  },

  getWeight: () => {
    return axios.get(`/weight`);
  },

  createWeight: (title, start, end) => {
    return axios.post(`api/weight`, {title: title, start: start, end: end});
  },

  deleteWeight: (id, title, start, end) => {
    return axios.post(`api/delete/weight/${id}`, {title: title, start: start, end: end});
  },

  updateWeight: (id, title, start, end) => {
    return axios.put(`api/update/weight/${id}`, {title: title, start: start, end: end});
  },

  sendMessage: (username, message, sender) => {
    return axios.post(`/api/sendmessage`, { username: username, message: message, sender: sender });
  },

  displayMessages: (username) => {
    return axios.get(`/api/messages/${username}`, { username: username})
  },

  markRead: (id) => {
    return axios.post(`/api/messages/${id}`)
  }
};
