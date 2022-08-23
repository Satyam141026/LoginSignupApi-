const mongoose=require('mongoose');
mongoose.connect(`mongodb+srv://satyam:satyam123@cluster0.pxfed.mongodb.net/weather?retryWrites=true&w=majority`)
.then((data)=>{
        console.log('Connect to database')
})
.catch((e)=>{
        console.log('Connection failed')
})