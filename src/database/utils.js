const fs = require('fs');

//overwrite JSON file to persist the data
const saveToDatabase = (DB) =>{
    fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2), { encoding: 'utf8'})
};

module.exports = {saveToDatabase}