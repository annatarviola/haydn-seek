const { Goal } = require("../models/goals");

module.exports = {
  getAllGoals: async (req, res) => {
    try {
      const { userId } = req.params;
      const goals = await Goal.findAll({ where: { userId } });

      res.status(200).send(goals);
    } catch (error) {
      console.log("error in getAllGoals");
      console.log(error);
      res.sendStatus(400);
    }
  },

  addGoal: async (req, res) => {
    try {
      const { value, userId } = req.body;
      await Goal.create({ value, userId });
    } catch (error) {
      console.log("error in addGoal");
      console.log(error);
      res.sendStatus(400);
    }
  },

  deleteGoal: async (req, res) => {
    try {
      const { id } = req.params;
      await Goal.destroy({ where: { id: +id } });
      res.sendStatus(200)
    } catch (error) {
      console.log("error in deleteGoal");
      console.log(error);
      res.sendStatus(400);
    }
  },
};
