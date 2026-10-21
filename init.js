import sequelize from './database.js';
import {Author} from "./model/index.js";


async function init() {
    try {
        await sequelize.sync({force: true});
        console.log('Sequelize done');

        const Author1 = await Author.create({
            name: 'John',
            country: 'UK',
        });

        const Author2 = await Author.create({
            name: 'Ivan',
            country: 'Russia',
        });

        const Book1 = await Author1.createBook({
            title: 'John book 1',
            year: 2020,
            genre: 'Isekai',
        });

        const Book2 = await Author1.createBook({
            title: 'John book 2',
            year: 2021,
            genre: 'Isekai',
        });

        const Book3 = await Author2.createBook({
            title: 'Ivan book',
            year: 2021,
            genre: 'Action',
        });

    } catch (error) {
        console.error('Error: ', error);
    } finally {
        await sequelize.close();
    }
}

init();