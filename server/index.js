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

//get a contact 
//must match with the name of the key 
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
//delete a contact 






app.listen(5000, () => {
    console.log('server has started on port 5000');
});