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
        db = client.db("cursojavascript");
        console.log("Conectado a la DB");
        alumnos = db.collection("alumnos");
        console.log("Conectado a la tabla");
    });

app.get("/demo", (request, response) => {
    console.log("Se ejecutó la ruta demo...");
    response.status(200).json({ ok: true });
});

/*
    GET: ALUMNOS
*/
app.get("/alumnos", (request, response) => {
    console.log("Se ejecutó la ruta alumnos...");
    alumnos.find().toArray((err, items) => {
        if (err) {
            console.log(err);
            response.status(500).json({ err: err });
            return;
        }
        response.status(200).json({ alumnos: items })
    });
});
/*
    POST: ALUMNOS
*/
app.post("/alumnos", (request, response) => {

    alumnos.insertOne({
        name: request.body.name,
        apellido: request.body.apellido,
        ciudad: request.body.ciudad
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