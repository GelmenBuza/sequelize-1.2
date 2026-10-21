import {DataTypes} from 'sequelize';
import sequelize from "../database.js";


const Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    genre: DataTypes.STRING,
})

export default Book;