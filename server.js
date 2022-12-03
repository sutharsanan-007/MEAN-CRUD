express=require('express')
const app=express();
mongoose=require('mongoose')
path=require('path')
bp=require('body-parser')
cors=require('cors')
dbconfig=require('./database/database')

mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.db,{useNewUrlParser:true}).then(()=>{
    console.log('Database connected')
}),error=>{ console.log('Database not connected') }

app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))
app.use(cors())

const userRoute=require('./routes/user.routes')
app.use('/home',userRoute)

const port=process.env.port || 8080;
const server=app.listen(port,()=>{
    console.log('Port connected to'+port)
})

app.get('/',(req,res)=>{
    res.send('Welcome Api')
})