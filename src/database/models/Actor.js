module.exports = (sequelize, DataTypes) => {
    const alias = "Actor";
    const cols = {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    firs_name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    rating:{
        type: DataTypes.DECIMAL(3,1).UNSIGNED,
    },
    favorite_movie_id:{
        type: DataTypes.INTEGER(10).UNSIGNED,
    }
    }

    const config = {
        tableName: "actors",
        createdAt: "created_at",
        updatedAt: "update_at"
    }

    const Actor =sequelize.define(alias,cols,config);

    return Actor
};