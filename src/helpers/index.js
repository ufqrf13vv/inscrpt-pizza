import data from './data.json';

const db = openDatabase('Pizza', '1.0', 'Test DB', 2 * 1024 * 1024);

function createDB() {   
    db.transaction(tx => { 
        tx.executeSql('CREATE TABLE IF NOT EXISTS Orders (name, surname, phone, address, ordercomp, total)', [], 
            () => console.log('Table created Successfully!'),
            error => console.log(error));
    })
}

function dropTable() {
    db.transaction(tx => {
        tx.executeSql("DROP TABLE Orders",[], 
            function(tx,results) {console.log("Successfully Dropped")},
            function(tx,error) {console.log("Could not delete")}
        );
    })
}

function saveOrderToDB (name, surname, phone, address, data, total) {
    db.transaction(tx => {
        tx.executeSql('INSERT INTO Orders (name, surname, phone, address, ordercomp, total) values(?, ?, ?, ?, ?, ?)', 
            [name, surname, phone, address, JSON.stringify(data), total], 
            () => console.log('Order inserted'), 
            error => console.log(error));
    });
}

function getOrdersFromDB() {
    return new Promise((resolve, reject) => {
        if (!db) return reject('no database.');

        db.transaction(tx => {
            tx.executeSql('SELECT * FROM Orders', [], (tx, results) => {
                let rows = [];

                for (let i=0; i<results.rows.length; i++) {
                    rows.push(results.rows.item(i));
                }

                resolve(rows);
            }, 
            (tx, err) => reject(err.message));
        });
    });
}

function getJSON() {
    return data
}

export { 
    createDB,
    saveOrderToDB,
    getOrdersFromDB,
    dropTable,
    getJSON,
}