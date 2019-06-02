import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('/api/signup', {username: username, email: email, password: password});
  },

  createUser: (id, name, feet, inches, age) => {
    return axios.put(`/api/create/${id}`, {name: name, feet: feet, inches: inches, age: age});
  },

  updateUser: (id, name, weight, feet, inches, age ) => {
    return axios.put(`/api/update/${id}`, {name: name, weight: weight, feet: feet, inches: inches, age: age});
  },

  getCalendar: (id) => {
    return axios.get(`/calendar/${id}`);
  },

  createCalendar: (id, title, start, end) => {
    return axios.post(`/api/calendar/${id}`, {title: title, start: start, end: end});
  },

  deleteCalendar: (id, title, start, end) => {
    return axios.post(`/api/delete/calendar/${id}`, {title: title, start: start, end: end});
  },

  updateCalendar: (id, title, start, end) => {
    return axios.put(`/api/update/calendar/${id}`, {title: title, start: start, end: end});
  },

  getCalories: (id) => {
    return axios.get(`/calories/${id}`);
  },

  createCalories: (id, consumed, burned, date) => {
    return axios.post(`/api/calories/${id}`, {consumed: consumed, burned: burned, date: date});
  },

  deleteCalories: (id, title, start, end) => {
    return axios.post(`/api/delete/calories/${id}`, {title: title, start: start, end: end});
  },

  updateCalories: (id, title, start, end) => {
    return axios.put(`/api/update/calories/${id}`, {title: title, start: start, end: end});
  },

  getWeight: (id) => {
    return axios.get(`/weight/${id}`);
  },

  createWeight: (id, weight, date) => {
    console.log("got here!");
    return axios.post(`/api/weight/${id}`, {weight: weight, date: date});
  },

  deleteWeight: (id, weight, labels) => {
    return axios.post(`/api/delete/weight/${id}`, {weight: weight, labels: labels});
  },

  updateWeight: (id, weight, labels) => {
    return axios.put(`/api/update/weight/${id}`, {weight: weight, labels: labels});
  },

  sendMessage: (username, message, sender) => {
    return axios.post(`/api/sendmessage`, { username: username, message: message, sender: sender });
  },

  displayMessages: (username) => {
    return axios.get(`/api/messages/${username}`, { username: username})
  },

  countUnreadMessages: (username) => {
    return axios.get(`/api/count/${username}`, { username: username})
  },

  deleteMessage: (id) => {
    return axios.post(`/api/delete/${id}`)
  },

  markRead: (id) => {
    return axios.post(`/api/messages/${id}`)
  },

  getFood: (quantity, size, food) => {
    return axios.get(`/api/foodcalories/${quantity}/${size}/${food}`);
  }
};
