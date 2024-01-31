import express from 'express';
import cors from 'cors'


const app = express();
const Port = 3000;

const users = [
    {
        id: 1,
        name: "Majid Hussain",
        email : "majid@gmail.com"
    },
    {
        id: 2,
        name : "Abdul wali",
        email : "abdul@gmail.com"
    }
]


app.use(express.json());
// app.use(cors());

app.get('/users',(req,res) => {
   res.send(users)
});


app.post('/user', (req, res) => {
    users.push({id:users.length + 1 ,...req.body})
    res.send("user added successfully")
});


app.put('/user/:id',(req,res) => {
    let index = users.findIndex(v => v.id === Number(req.params.id));
    if(index !== -1){

        users.splice(index, 1, {id: Number(req.params.id), ...req.body});
    }
    res.send({message: "user updated successfully"});
})

// place order from ecommerce
app.post("/order",(req,res) => {
    console.log("order details", req.body);
    res.send({message: "order placed"})
})

app.delete('/user/:id', (req, res) => {
 
    let index = users.findIndex(v => v.id === Number(req.params.id));
    if(index !== -1){

        users.splice(index, 1);
    }
    res.send("user deleted successfully");
})


app.listen(Port, () => {
    console.log(`server is running on ${Port}`);
});