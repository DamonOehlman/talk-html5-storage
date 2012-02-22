function initDB(db) {
    // initialise the database version
    db.changeVersion('', '1.0', function (t) {
        t.executeSql(
            'CREATE TABLE task(name TEXT NOT NULL, ' +
            '  description TEXT, ' + 
            '  due DATETIME);'
        );
    });
}