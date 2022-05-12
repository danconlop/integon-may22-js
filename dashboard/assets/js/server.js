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


let db, authors
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err, client) => {
        if (err) {
            console.log(err);
            return;
        }
        db = client.db("cursojavascript");
        console.log("Conectado a la DB");
        authors = db.collection("authors");
        users = db.collection("users");
        console.log("Conectado a la tabla");
    });

app.get("/demo", (request, response) => {
    console.log("Se ejecutó la ruta demo...");
    response.status(200).json({ ok: true });
});

/*
    GET: AUTHORS
*/
app.get("/authors", (request, response) => {
    console.log("Se ejecutó la ruta autores...");
    authors.find().toArray((err, items) => {
        if (err) {
            console.log(err);
            response.status(500).json({ err: err });
            return;
        }
        response.status(200).json({ authors: items })
    });
});
/*
    POST: ALUMNOS
*/
app.post("/authors", (request, response) => {

    authors.insertOne({
        foto: request.body.foto,
        nombre: request.body.nombre,
        correo: request.body.correo,
        puesto: request.body.puesto,
        puesto2: request.body.puesto2,
        status: request.body.status,
        employed: request.body.employed
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
    GET: ALUMNO POR ID
*/
app.get("/alumnos/:id", (request, response) => {
    let alumnoId = request.params.id;
    console.log("Buscando 1 alumno");
    alumnos.findOne({_id:ObjectId(alumnoId)},(err, items) => {
        if (err) {
            console.log(err);
            response.status(500).json({ err: err });
            return;
        }
        response.status(200).json({ alumnos: items })
    });
});
/*
    GET: USUARIO POR CORREO
*/
app.get("/users/:username", (request, response) => {
    let username = request.params.username;
    console.log(`Buscando al usuario ${username}`);
    users.findOne({username:username},(err, items) => {
        if (err) {
            console.log(err);
            response.status(500).json({ err: err });
            return;
        }
        response.status(200).json({ user : items })
    });
});

/*
    SERVER LISTEN
*/
app.listen(3005, () => {
    console.log("SERVER DASHBOARD");
    console.log("Escuchando en el puerto 3005...");
});