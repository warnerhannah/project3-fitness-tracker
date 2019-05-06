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

  getCalories: () => {
    return axios.get(`/calories`);
  },

  createCalories: (consumed, burned, date) => {
    return axios.post(`/api/calories`, {consumed: consumed, burned: burned, date: date});
  },

  deleteCalories: (id, title, start, end) => {
    return axios.post(`/api/delete/calories/${id}`, {title: title, start: start, end: end});
  },

  updateCalories: (id, title, start, end) => {
    return axios.put(`/api/update/calories/${id}`, {title: title, start: start, end: end});
  },

  getWeight: () => {
    return axios.get(`/weight`);
  },

  createWeight: (weight, date) => {
    console.log("got here!");
    return axios.post(`/api/weight`, {weight: weight, date: date});
    
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
