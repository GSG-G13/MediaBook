const { Build, signupQuery } = require("../server/database");
const connection = require("../server/database/connection/connection");

beforeEach(() => Build());
afterAll(() => connection.end());

describe("testing signupQuery", () => {
    test("signupQuery said return Array", (done)=>{
        signupQuery({
            "firstname": "alaa",
            "surname": "ahmdae",
            "email": "alaaahgasdasdsade@gmail.com",
            "password": "",
            "date": "2023-04-19",
            "gender": "male"
            
             }).then(data => {
                expect(Array.isArray(data.rows)).toBe(true);
                done()
             }).catch(error => {
                done(error);
             })
    })
     test("signupQuery said return Array", (done)=>{
        signupQuery({
            "firstname": "alaa",
            "surname": "ahmdae",
            "email": "alaaahgasdasdsade@gmail.com",
            "password": "asiohfas141ixlnc",
            "date": "2023-04-19",
            "gender": "male"
            
             }).then(data => {
                expect(data.rows[0].email).toBe('alaaahgasdasdsade@gmail.com');
                expect(data.rows[0].firstname).toBe('alaa');
                done()
                
             }).catch(error => {
                done(error);
             })
    })
})