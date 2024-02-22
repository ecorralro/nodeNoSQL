var mongoose = require ('mongoose');

const conexion = 'mongodb://127.0.0.1/concesionario'

const stockSchema = new mongoose.Schema({
    marca:String,
    modelo:String,
    color:String,
    km:Number
})

const Stock = mongoose.model("Stock",stockSchema)

const NuevoStock = new Stock({
    marca:"Audi",
    modelo:"a3",
    color:"Rojo",
    km:60000
})
mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
    NuevoStock.save()
        .then(function(){
            console.log("Insertado")
        })
})