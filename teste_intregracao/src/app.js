import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json());

let users = []

app.post("/users", (request, response) => {
    const user = {
        id: users.length + 1,
        ...request.body
    }
    users.push(user)
    response.status(201).json(user)
});

export default app;
