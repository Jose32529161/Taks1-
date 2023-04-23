const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize({}  => {
     db.run('CREATE TABLE greetings(message text)')
     .run('INSERT INTO greetings (message)')
     	VALUES ('Hi')
     	        ('Hello')
     	        ('welcome')

     .each('SELECT message FROM * greetings', (err, row) =>{
     	if (err) {
     		throw err;
     	}
     	console.log(row.message);

     });	        
     	        
     console.log(row.id + "\t" + row.name);
});

// close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

export default db;