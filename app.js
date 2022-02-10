const express = require('express');
const mongoose = require('mongoose');
const dbUrl = "mongodb://localhost/EmployeeDB";

const app = express();

mongoose.connect(dbUrl, { useNewUrlParser: true });
const connetionObj = mongoose.connection;

connetionObj.on('open', (err) => {
    if (err) {
        console.log("Error while connecting\n", error);
    }
    else {
        console.log("DB Connected");
    }
})

app.use(express.json());

const employeeRouter = require('./routes/employees');
app.use('/employees', employeeRouter);

app.listen(8080, (err) => {
    if (err)
        console.log("Error...\n", err);
    console.log("Express Server started");
})