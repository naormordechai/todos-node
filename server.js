const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
var cookieParser = require('cookie-parser')

const addTodoRoutes = require('./routes/todo-route')
// const addParkingRoutes = require('./routes/parking-route')
// const addUserRoutes = require('./routes/user-route')


// const baba = require('./services/test-service')


const app = express()
app.use(cookieParser())
app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie
}));
app.use(bodyParser.json())
app.use(express.static('dist'));
app.use(session({
  secret: 'puki muki',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

addTodoRoutes(app)
// addParkingRoutes(app);
// addUserRoutes(app);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))