import Book from "./Book.js";
import Author from "./Author.js";

Author.hasMany(Book, {
    foreignKey: "authorId",
    as: "books",
})

Book.belongsTo(Author, {
    foreignKey: "authorId",
    as: "author",
})

export {Book, Author}