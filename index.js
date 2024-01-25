import express from 'express';


const app = express();
const Port = 3000;

const users = [
    {
        name: "Majid Hussain",
        email : "majid@gmail.com"
    },
    {
        name : "Abdul wali",
        email : "abdul@gmail.com"
    }
]


app.get('/users',(req,res) => {
   res.send(users)
})

app.listen(Port, () => {
    console.log(`server is running on ${Port}`);
})