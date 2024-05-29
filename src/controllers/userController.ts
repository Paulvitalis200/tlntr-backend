import { Op } from "sequelize";
import db from "../models";

// models path depend on your structure
const User = db.users;

export const createUser = async (req: any, res: any) => {
  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({
      message: "Firstname can not be empty!",
    });
    return;
  }

  const user = {
    firstName: req.body.firstName,
    lastName: "Vitalis",
  };

  try {
    const response = await User.create(user);
    res.status(201).json({ data: response });
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the user.",
    });
  }
};

export const getUsers = async (req: any, res: any) => {
  const firstName = req.query.firstName;
  var condition = firstName
    ? { firstName: { [Op.like]: `%${firstName}%` } }
    : null;

  try {
    const response = await User.findAll({ where: condition });

    if (!response.length) {
      res.status(404).json({ message: "No users" });
      return;
    }
    res.status(200).json({ data: response });
  } catch (err: any) {
    console.log(err.message);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials.",
    });
  }
};
