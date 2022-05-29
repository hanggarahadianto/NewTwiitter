module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define("comment", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return comment;
};
