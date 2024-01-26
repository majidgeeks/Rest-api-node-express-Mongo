import express from 'express';


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

app.get('/users',(req,res) => {
   res.send(users)
});


app.post('/user', (req, res) => {
    users.push({id:users.length + 1 ,...req.body})
    res.send("user added successfully")
});


app.delete('/user/:id', (req, res) => {
 
    let index = users.findIndex(v => v.id === Number(req.params.id));
    users.splice(index, 1);
    res.send("user deleted successfully");
})


app.listen(Port, () => {
    console.log(`server is running on ${Port}`);
});