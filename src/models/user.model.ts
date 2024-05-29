import { Sequelize } from "sequelize";

module.exports = (sequelize: any, Sequelize: any) => {
  const User = sequelize.define("user", {
    firstName: {
      type: Sequelize.STRING,
    },

    lastName: {
      type: Sequelize.STRING,
    },

    email: {
      type: Sequelize.STRING,
    },
    verified: {
      type: Sequelize.BOOLEAN,
    },

    phoneNumber: {
      type: Sequelize.STRING,
    },

    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
