module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("post", {
    caption: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  post.associate = (models) => {
    post.hasMany(models.comment, {
      onDelete: "cascade",
    });
  };

  return post;
};
