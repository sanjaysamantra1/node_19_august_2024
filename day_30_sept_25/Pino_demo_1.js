const express = require('express')
const pino = require('pino-http')()

const app = express(); // express server is created
app.use(pino) // middleware , logger


employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

app.get('/employees', (req, res) => {
    req.log.info('something')
    res.json(employees)
})
app.get('/employees/:id', (req, res) => {
    const userId = +req.params.id; // Read Path Parameter
    const emp = employees.find(emp => emp.eId === userId);
    res.json(emp);
})
app.post('/employees', (req, res) => {
    const newEmp = req.body;
    console.log(newEmp)
    employees.push(newEmp);
    res.sendStatus(201);
    // res.status(201).send('Employee Added Successfully!!!')
})

app.listen(5000, () => {
    console.log('server running at 5000')
});

