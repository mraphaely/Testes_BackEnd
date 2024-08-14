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

app.get('/users', (request, response) => {
    response.status(200).json(users)
});

app.delete('/users/:id', (request, response) => {
    const id = request.params.id
    users =  users.filter((user) => user.id === id)
    response.status(204).json({ message: 'User deleted successfully' })
    // const index = users.findIndex(user => user.id === id)
    // if (index !== -1) {
    //     users.splice(index, 1)
    //     response.status(200).json({ message: 'User deleted successfully' })
    // } else {
    //     response.status(404).json({ message: 'User not found' })
    // }
});

export default app;
