module.exports = (sequelize, DataTypes) => {
    const alias = "Genre";
    const cols = {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    ranking:{
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
    },
    active:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
    }

    const config = {
        tableName: "genres",
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const Genre =sequelize.define(alias,cols,config);

    return Genre
};