const { Log } = require("../models/practice-logs");

module.exports = {
  getDailyLogs: async (req, res) => {
    try { 
      const { userId } = req.params
      const logs = await Log.findAll({ where: { userId }})

      res.status(200).send(logs)
    } catch (error) {
      console.log("error in getDailyLogs");
      console.log(error);
      res.sendStatus(400);
    }
  },

  addLog: async (req, res) => {
    try {
      const {
        parsedDate,
        sentQuality,
        hours,
        minutes,
        sentScales,
        sentExercises,
        sentRepertoire,
        sentNotes,
        userId,
      } = req.body;

      console.log(req.body)

      await Log.create({
        date: parsedDate,
        quality: sentQuality,
        time_hr: hours,
        time_min: minutes,
        scales: sentScales,
        exercises: sentExercises,
        repertoire: sentRepertoire,
        notes: sentNotes,
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
