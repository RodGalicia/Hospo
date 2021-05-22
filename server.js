const routes = require('./controller');
const path = require("path");
/*  EXPRESS SETUP  */

const express = require('express');
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const bodyParser = require('body-parser');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('App listening on port ' + port));

/*  PASSPORT SETUP  */

const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

/* MONGOOSE SETUP */

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/hospodb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

/* PASSPORT LOCAL AUTHENTICATION */
const {User} = require('./models');

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* ROUTES */

const connectEnsureLogin = require('connect-ensure-login');



// app.get('/login',
//   (req, res) => res.sendFile('html/login.html',
//   { root: __dirname })
// );

// app.get('/',
//   connectEnsureLogin.ensureLoggedIn(),
//   (req, res) => res.sendFile('html/index.html', {root: __dirname})
// );

// app.get('/private',
//   connectEnsureLogin.ensureLoggedIn(),
//   (req, res) => res.sendFile('html/private.html', {root: __dirname})
// );

// app.get('/user',
//   connectEnsureLogin.ensureLoggedIn(),
//   (req, res) => res.send({user: req.user})
// );

app.use("/api",routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// User.register({name:'Testy', lastname: 'Test',email:'test@test.com',username:'test',password:'test'},'test'); 