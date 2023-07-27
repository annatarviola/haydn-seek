const { Log } = require("../models/practice-logs");
const { User } = require("../models/user");

module.exports = {
  getDailyLogs: (req, res) => {
    console.log("get daily logs");
  },

  addLog: async (req, res) => {
    try {
      const {
        date,
        quality,
        hours,
        minutes,
        scales,
        exercises,
        repertoire,
        notes,
        userId,
      } = req.body;

      await Log.create({
        date,
        quality,
        time_hr: hours,
        time_min: minutes,
        scales,
        exercises,
        repertoire,
        notes,
        userId,
      });
    } catch (error) {
      console.log("error in addLog");
      console.log(error);
      res.sendStatus(400);
    }
  },

  editLog: (req, res) => {
    console.log("edit practice log");
  },

  deleteLog: (req, res) => {
    console.log("delete practice log");
  },
};
