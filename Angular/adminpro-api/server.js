// Cross Origin Resource Sharing
const cors = require("cors");
const corsOptions ={
    origin: '*',
    credentials:true,
    optionSuccessStatus:200,
}

const { response, request } = require("express");
const express = require("express"); // Requerimos el módulo de Express
const mongo = require("mongodb").MongoClient;

const app = express(); // Se define una aplicación de express
app.use(express.json()); // MiddleWare
app.use(cors(corsOptions));
const url = "mongodb://localhost:27017";
let ObjectId = require('mongodb').ObjectId;


let db, alumnos
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err, client) => {
        if (err) {
            console.log(err);
            return;
        }
        db = client.db("adminpro");
        console.log("Conectado a la DB");
        users = db.collection("users-adminpro");
        console.log("Conectado a la tabla");
    });

app.get("/demo", (request, response) => {
    console.log("Se ejecutó la ruta demo...");
    response.status(200).json({ ok: true });
});

/*
    GET: ALUMNOS
*/
app.get("/users", (request, response) => {
    console.log("Se ejecutó la ruta users...");
    users.find().toArray((err, items) => {
        if (err) {
            console.log(err);
            response.status(500).json({ err: err });
            return;
        }
        response.status(200).json({ users: items })
    });
});
/*
    GET: USER POR CORREO
*/
app.get("/users/:Email", (request, response) => {
    let Email = request.params.Email;
    console.log("Buscando 1 usuario");
    users.findOne({email: Email},(err, items) => {
        if (err) {
            console.log(err);
            response.status(500).json({ err: err });
            return;
        }
        response.status(200).json(items)
    });
});
/*
    POST: USER
*/
app.post("/users", (request, response) => {
    users.insertOne({
        name: request.body.Nombre,
        email: request.body.Email,
        password: request.body.Password
    },
        (err, result) => {
            if (err) {
                console.log(err);
                response.status(500).json({ err: err });
                return;
            }
            response.status(200).json({ ok: true })
        }
    )
});
/*
    SERVER LISTEN
*/
app.listen(3005, () => {
    console.log("Escuchando en el puerto 3005...");
});