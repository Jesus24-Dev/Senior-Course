const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

const transactions = [];

class Transaction {
    constructor(description, amount, type){
        this.description = description;
        this.amount = amount;
        this.type = type;
    }

    save(){
        transactions.push(this)
    }
}

app.get('/', (_, res) => {
    res.render('index', {transactions: transactions})
});

app.post('/add-transaction', (req, res) => {
    const {description, amount, type} = req.body

    const transaction = new Transaction(description, amount, type);
    transaction.save()

    res.redirect('/')
})

module.exports = app;