const { Date } = require("../models/important-dates");

module.exports = {
  getAllImportantDates: async (req, res) => {
    try {
      const { userId } = req.params;
      const dates = await Date.findAll({ where: { userId: userId } });

      res.status(200).send(dates)
    } catch (error) {
      console.log("error in getAllImportantDates");
      console.log(error);
      res.sendStatus(400);
    }
  },

  addDate: async (req, res) => {
    try {
      const { description, time, date, userId } = req.body;
      await Date.create({ description, date, time, userId });
    } catch (error) {
      console.log("error in addDate");
      console.log(error);
      res.sendStatus(400);
    }
  },

  editDate: (req, res) => {
    console.log("edit date");
  },

  deleteDate: (req, res) => {
    console.log("delete date");
  },
};
