require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const db = require('./models');
const PORT = process.env.PORT || 3001;

const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");

// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/appDB', { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));


// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  console.log(req.body)
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});

// UPDATE USER
app.put('/api/update/:id', (req, res) => {
  console.log(req.body)
  db.User.findByIdAndUpdate(req.params.id,

    {
      name: req.body.name,
      weight: req.body.weight,
      feet: req.body.feet,
      inches: req.body.inches,
      age: req.body.age
    }
  )
    .then(data => {
      if (data) {
        console.log(data);
        res.send(data);
      } else {
        res.status(404).send({ success: false, message: 'No user found' });
      }
    }).catch(err => res.status(400).send(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

app.post('/api/calendar', (req, res) => {
  db.Calendar.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

app.get('/calendar', (req, res) => {
  db.Calendar.find({}).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});

app.put('/api/update/calendar/:id', (req, res) => {
  db.Calendar.findByIdAndUpdate(req.params.id,
    {
      title: req.body.title,
      start: req.body.start,
      end: req.body.end
    }
  )
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: 'No user found' });
      }
    }).catch(err => res.status(400).send(err));
});

app.delete('/api/delete/calendar/:id', (req, res) => {
  db.Calendar.findByIdAndRemove(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: 'No user found' });
      }
    }).catch(err => res.status(400).send(err));
});

app.post('/api/calories', (req, res) => {
  db.Calories.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

app.get('/calories', (req, res) => {
  db.Calories.find({}).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});

app.put('/api/update/calories/:id', (req, res) => {
  db.Calories.findByIdAndUpdate(req.params.id,
    {
      title: req.body.title,
      start: req.body.start,
      end: req.body.end
    }
  )
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: 'No user found' });
      }
    }).catch(err => res.status(400).send(err));
});

app.delete('/api/delete/calories/:id', (req, res) => {
  db.Calories.findByIdAndRemove(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: 'No user found' });
      }
    }).catch(err => res.status(400).send(err));
});

app.post('/api/weight', (req, res) => {
  db.Weight.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

app.get('/weight', (req, res) => {
  db.Weight.find({}).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});

app.put('/api/update/weight/:id', (req, res) => {
  db.Weight.findByIdAndUpdate(req.params.id,
    {
      title: req.body.title,
      start: req.body.start,
      end: req.body.end
    }
  )
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: 'No user found' });
      }
    }).catch(err => res.status(400).send(err));
});

app.delete('/api/delete/weight/:id', (req, res) => {
  db.Weight.findByIdAndRemove(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: 'No user found' });
      }
    }).catch(err => res.status(400).send(err));
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});
// hello
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
