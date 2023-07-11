const mongoose=require("mongoose");

const uri="mongodb+srv://mongodb:1@eticaretdb.8qcczzs.mongodb.net/?retryWrites=true&w=majority";

const connection=() =>{
    mongoose.connect(uri,{
        //options
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log("Mongo Db baglantisi basarili!"))
    .catch((err)=>console.log("Baglanti Hatasi! Hata:"+err.message));
}


module.exports=connection;