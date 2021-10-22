const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Wow! I am very Excited !Hello from my first ever Node JS and Express');
})
const users = [
    {id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '0178888888'},
    {id: 1, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '0178888888'},
    {id: 2, name: 'Shrabonti', email: 'shrabonti@gmail.com', phone: '0178888888'},
    {id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '0178888888'},
    {id: 4, name: 'Soniya', email: 'soniya@.com', phone: '0178888888'},
    {id: 5, name: 'Susmita', email: 'susmita@gmail.com', phone: '0178888888'},
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    console.log(search);
    
});
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send('post got hitted');
    res.json(newUser);
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
    console.log(req.params.id);
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy Tok Marka Fazli');
})
app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'oranges', 'banana', 'apple']);
})
app.listen(port, () => {
    console.log("Listening to port", port);
})