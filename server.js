// 모듈 불러오기
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

// express 객체 생성
const app = express();

//view 폴더(build 복사)
// const viewPath = __dirname + '/app/views/static';
const viewPath = __dirname + '/app/views/';
app.use(express.static(viewPath));

var corsOptions = {
  //origin: "http://localhost:8081"
  origin: "https://airang-web-test1.herokuapp.com"
};

app.use(cors(corsOptions));
// app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 미들웨어 함수를 특정 경로에 등록
app.use('/api/data', function(req, res) {
    res.json({ greeting: 'Hello World' });
});

// 리액트 정적 파일 제공
// app.use(express.static(path.join(__dirname, 'client/build')));

//연결안됨
var {sequelize} = require('./app/models/index')
sequelize.sync();

app.get('/', function (req,res) {
  res.sendFile(viewPath + "index.html");
});

// production
// db.sequelize.sync();
// development
const Role = db.role;
const User = db.user;
var bcrypt = require("bcryptjs");

db.sequelize.sync({force: true}).then(() => {
  // force: true will drop the table if it already exists
  console.log('********** Drop and Resync Db **********');
  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
// require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080; // 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
  console.log('********** Create Role done. Now create admin ...');
  User.create({
    username: "admin",
    email: "admin@airang.com",
    password: bcrypt.hashSync("password", 8)
  }).then(user => {
    user.setRoles([1]);
    user.setRoles([2]);
    user.setRoles([3]);
    console.log('********** admin set roles');
  }).catch(err => {
    console.log('********** admin error at server.js');
  });
}
/*
// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
*/
// app.listen(port);
