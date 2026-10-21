import {DataTypes} from "sequelize";
import sequelize from "../database.js";

const Author = sequelize.define("Author", {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
})

export default Author;