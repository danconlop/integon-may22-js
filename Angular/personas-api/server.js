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
        db = client.db("angulardb");
        console.log("Conectado a la DB");
        personas = db.collection("personas");
        vuelos = db.collection("vuelos");
    });

app.get("/demo", (request, response) => {
    console.log("Se ejecutó la ruta demo...");
    response.status(200).json({ ok: true });
});

/*
    GET: VUELOS
*/
app.get("/vuelos", (request, response) => {
    console.log("Se ejecutó la ruta vuelos...");
    vuelos.find().toArray((err, items) => {
        if (err) {
            console.log(err);
            response.status(500).json({ err: err });
            return;
        }
        response.status(200).json(items)
    });
});
/*
    POST: VUELOS
*/
app.post("/vuelos", (request, response) => {


    vuelos.insertOne({
        Numero: request.body.Numero,
        Fecha: request.body.Fecha,
        Horario: request.body.Horario,
        Origen: request.body.Origen,
        Destino: request.body.Destino
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
    GET: PERSONAS
*/
app.get("/personas", (request, response) => {
    console.log("Se ejecutó la ruta personas...");
    personas.find().toArray((err, items) => {
        if (err) {
            console.log(err);
            response.status(500).json({ err: err });
            return;
        }
        response.status(200).json(items)
    });
});
/*
    GET: ALUMNO POR ID
*/
app.get("/personas/:id", (request, response) => {
    let alumnoId = request.params.id;
    console.log("Buscando 1 persona");
    personas.findOne({_id:ObjectId(alumnoId)},(err, items) => {
        if (err) {
            console.log(err);
            response.status(500).json({ err: err });
            return;
        }
        response.status(200).json({ personas: items })
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