const express = require("express");
const mysql = require("mysql")
const app = express();
const port = 3000
const dbConfig = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.get('/', (req, res) => {
    const connection = mysql.createConnection(dbConfig)
    connection.query("INSERT INTO PEOPLE (name) VALUES ('Jhonatan da Silva Nunes')")
    connection.query("SELECT * FROM PEOPLE", (error, results, fields) => {
        const peopleList = results.map(people => `<li>${people.name}</li>`).join('')

        res.send(`
            <h1>Full Cycle Maroto!</h1>
            <ul>
                ${peopleList}
            </ul>
        `)
    })
    connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})