const { Log } = require("../models/practice-logs");

module.exports = {
  getDailyLogs: async (req, res) => {
    try {
      const { userId } = req.params;
      const logs = await Log.findAll({ where: { userId } });

      res.status(200).send(logs);
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
        quality,
        hours,
        minutes,
        scales,
        exercises,
        repertoire,
        notes,
        userId,
      } = req.body;

      const logs = await Log.create({
        date: parsedDate,
        quality,
        time_hr: hours,
        time_min: minutes,
        scales,
        exercises,
        repertoire,
        notes,
        userId,
      });

      res.status(201).send(logs);
    } catch (error) {
      console.log("error in addLog");
      console.log(error);
      res.sendStatus(400);
    }
  },

  editLog: async (req, res) => {
    console.log("edit practice log");

    try {
      const { id } = req.params;

      const {
        parsedDate,
        quality,
        hours,
        minutes,
        scales,
        exercises,
        repertoire,
        notes,
      } = req.body;

      await Log.update(
        {
          date: parsedDate,
          quality,
          time_hr: hours,
          time_min: minutes,
          scales,
          exercises,
          repertoire,
          notes,
        },
        { where: { id: +id } }
      );

      res.sendStatus(200);
    } catch (error) {
      console.log("error in editLog");
      console.log(error);
      res.sendStatus(400);
    }
  },

  deleteLog: async (req, res) => {
    try {
      const { id } = req.params;
      await Log.destroy({ where: { id: +id } });

      res.sendStatus(200);

    } catch (error) {
      console.log("error in deleteLog");
      console.log(error);
      res.sendStatus(400);
    }
  },
};
