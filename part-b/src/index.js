import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get('/home',(req,res) => {
    res.json({
        message: 'In the get router'
    });
})

app.listen(PORT,()=>{
    console.log("Server on port = ",PORT);
});