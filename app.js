import {Author, Book} from './model/index.js';
import sequelize from './database.js';


async function app() {

    const authors = await Author.findAll({
        include: [{
            model: Book,
            as: 'books',
        }]
    })

    authors.forEach(author => {
        console.log(author.name, author.books.map(b => b.title));
    })

    const bookWithAuthor = await Book.findOne({
        where: { id: 1 },
        include: [{
            model: Author,
            as: 'author',
        }]
    })

    console.log(bookWithAuthor.author.name)

    await sequelize.close().then(
        console.log('Соединение разорвано')
    ).catch(
        console.error
    )
}

app()