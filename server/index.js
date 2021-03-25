const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');


//middleware 
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a contact //it works !!!! 
app.post('/contacts', async(req, res) => {
    //await 
    try {
        const {first_name, last_name, phone_number, email} = req.body;
        const newContact = await pool.query(
            "INSERT INTO contact (first_name, last_name, phone_number, email) VALUES($1, $2, $3, $4) RETURNING *",
            [first_name, last_name, phone_number, email]
        );
        res.json(newContact)

        //console.log(req.body) gets the whole json blob 
    } catch (err) {
        console.log(err.message)
    }
});



//Get all contacts 
app.get('/contacts', async (req, res)=> {
    try {
    const allContacts = await pool.query(
         "SELECT * FROM contact");
    res.json(allContacts.rows);
        
    } catch (error) {
        console.log(error.message);
    }
});

//get a contact based on id
app.get('/contacts/:user_id', async(req, res)=> {
    try {
        const {user_id} = req.params;
        const contact = await pool.query(
            "SELECT * FROM contact WHERE user_id = $1;",
            [user_id]
        );
        res.json(contact.rows[0]);
    //    console.log(req.params)
    } catch (err) {
        console.error(err.message);
    }
})


//get a contact based on last name
app.get('/contacts/?last_name', async(req, res)=> {
    try {
        const {last_name} = req.params;
        const contact = await pool.query(
            "SELECT * FROM contact WHERE last_name LIKE '$1%';",
            [last_name]
        );
        res.json(contact.rows[0]);
    //    console.log(req.params)
    } catch (err) {
        console.error(err.message);
    }
})
//Error message: invalid input syntax for type integer: "Chu"
//tried question mark and that just returns everything everything 






//delete a contact 
//






app.listen(5000, () => {
    console.log('server has started on port 5000');
});