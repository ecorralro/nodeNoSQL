// use nombreBD; crea un BD

// para crear una colección, equivale a una tabla en sql
db.createCollection("stocks");

// insertas UN registro
db.stocks.insertOne({
    marca:"opel",
    modelo:"corsa",
    color:"azul",
    km:100000
    })
//insertar varios registros
db.stocks.insertMany([{
    marca:"opel",
    modelo:"corsa",
    color:"azul",
    km:100000
    },
    {
    marca:"ford",
    modelo:"fiesta",
    color:"verde",
    km:105000
    },
    {
    marca:"audi",
    modelo:"a1",
    color:"blanco",
    km:80000
    },
    {
    marca:"opel",
    modelo:"astra",
    color:"blanco",
    km:120000
    },
])

// encontrar registros
db.stocks.find()
// encontrar sólo uno
db.stocks.findOne()
// encontrar con condiciones
db.stocks.find({marca:"opel"})
// actualizar registro
db.stocks.updateOne({color:"azul"},{$set:{color:"negro"}})
// borrar un registro
db.stocks.deleteOne({color:"gris"})
// borrar varios
db.stocks.deleteMany({marca:"opel"})
