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
      const { title, description, time, date, userId } = req.body;
      await Date.create({ title, description, date, time, userId });

      res.sendStatus(201)

    } catch (error) {
      console.log("error in addDate");
      console.log(error);
      res.sendStatus(400);
    }
  },

  editDate: async (req, res) => {
    try {
      const { id } = req.params
      const { title, description, date, time} = req.body

      await Date.update(
        { title, description, date, time }, { where: { id: +id }}
      )

      res.sendStatus(200)
    } catch (error) {
      console.log("error in editDate");
      console.log(error);
      res.sendStatus(400);
    }
  },

  deleteDate: async (req, res) => {
    console.log('deletedDate ran')
    try {
      const { id } = req.params
      await Date.destroy({ where: { id: +id }})

      res.sendStatus(200)

    } catch (error) {
      console.log('error in deleteDate')
      console.log(error)
      res.sendStatus(400)
    }
  },
};
