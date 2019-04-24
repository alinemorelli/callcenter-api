module.exports = (sequelize, DataTypes) =>
  sequelize.define('Customer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false
    },
    phone: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'Customers'
  })
