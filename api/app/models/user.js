module.exports = function(sequelize, DataType) {
  var User = sequelize.define('User', {
    usuario: { type: DataType.STRING, unique: true },
    senha:   { type: DataType.STRING, unique: true }
  }
  );
  return User;
};
