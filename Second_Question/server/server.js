const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.json())
const trains=[
    {
        id:1,
        trainName: 'Chennai Exp',
        trainNumber:"2344",
        departureTime: '8:00 AM',
        
        delayedBy:15,
        seatsAvailable:'Limited',
        class: 'First Class',
    },
     {
    id: 2,
    trainName: 'Chennai Exp',
        trainNumber:"2345",
        departureTime: '8:00 AM',
        
        delayedBy:15,
        seatsAvailable:'Available',
    
    class: 'Economy Class',
  },
];
app.use(cors());
app.get('/api/trains',(req,res)=>{
    res.json(trains);
});

app.get('/api/trains/:id',(req,res)=>{
    const trainId=parseInt(req.params.id);
    const train=trains.find(train=>train.id===trainId);
    if(train){
        res.json(train);
    } else{
        res.status(404).json({ message: 'Train not found'})
    }
});

app.listen(8000,()=>{
    console.log("server is running");
})