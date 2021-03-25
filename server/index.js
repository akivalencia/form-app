const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');


//middleware 
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a contact
app.post('/contacts', async(req, res) => {
    //await 
    try {
        const {first_name} = req.body;
        const newContact = await pool.query(
            "INSERT INTO contact (first_name) VALUES($1)",
            [first_name]
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
    const contacts = await pool.query(
        'SELECT * FROM contact;',
        [true]
    );
    console.log({contacts});
    res.json(contacts);
        
    } catch (error) {
        console.log(error.message);
    }
});

//get a contact 

//delete a contact 






app.listen(5000, () => {
    console.log('server has started on port 5000');
});