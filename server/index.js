require("dotenv").config();
const { PORT } = process.env;

const express = require("express");
const cors = require("cors");

const { sequelize } = require("./util/database");
const { Goal } = require("./models/goals");
const { Date } = require("./models/important-dates");
const { User } = require("./models/user");
const { Log } = require("./models/practice-logs");

const { isAuthenticated } = require('./middleware/isAuthenticated')
const { register, login } = require("./controllers/auth");
const {
  getDailyLogs,
  addLog,
  editLog,
  deleteLog,
} = require("./controllers/logs");
const {
  getAllImportantDates,
  addDate,
  editDate,
  deleteDate,
} = require("./controllers/dates");
const {
  getAllGoals,
  addGoal,
  deleteGoal,
} = require("./controllers/goals");

const app = express();

app.use(express.json());
app.use(cors());

User.hasMany(Goal)
User.hasMany(Date)
User.hasMany(Log)
Goal.belongsTo(User)
Date.belongsTo(User)
Log.belongsTo(User)

// AUTH
app.post("/register", register);
app.post("/login", login);

// PRACTICE LOGS 
app.get('/practicelogs/:userId', getDailyLogs)
app.post('/practicelogs', addLog)
app.put('/practicelogs/:id', editLog)
app.delete('/practicelogs/:id', deleteLog)

// IMPORTANT DATES
app.get('/importantdates/:userId', getAllImportantDates)
app.post('/importantdates', addDate)
app.put('/importantdates/:id', editDate)
app.delete('/importantdates/:id', deleteDate)

// GOALS
app.get('/goals/:userId', getAllGoals)
app.post('/goals', addGoal)
app.delete('/goals/:id', deleteGoal)

// the force: true is for development -- it DROPS tables!!!
// sequelize.sync({ force: true })
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`db sync successful & server running on port ${PORT}`))
    })
    .catch(err => console.log(err))



