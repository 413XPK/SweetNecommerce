require('dotenv').config();
require('./config/database');

const Entry = require('./models/entry');
const faker = require('faker');

Entry.deleteMany({}).then(res => {
    const entries = [];
    for(let i = 0; i < 10; i++){
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const position = faker.name.jobTitle();
        const email = faker.internet.email();
        const extension = faker.datatype.number(999);
        const obj = {
          firstName: firstName,
          lastName: lastName,
          position: position,
          email: email,
          extension: extension
        }
        entries.push(obj);
      }

    return Entry.create(entries)
})
.then(result => {
    console.log('Entries: ', result);
    console.log(`${result.length} entries have been added to the database`)
    process.exit();
})
.catch(err => {
    console.error(err);
});