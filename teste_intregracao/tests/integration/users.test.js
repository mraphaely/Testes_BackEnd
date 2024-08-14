// npm install --save-dev supertest
import app from '../../src/app.js'
import request from 'supertest'

describe("Testa a API users", () => {
   
    it("Pode add um novo user", async() => {
      const reponse = await request(app).post("/users").send({
        name: "Marjory",
        email: "marjory@gmail.com"
      })
      expect(reponse.statusCode).toBe(201);
   })

});