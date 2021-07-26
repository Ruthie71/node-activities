import express from "express";
import activityRouter from "./routes/activityRouter.js";

const app = express();
const port = process.env.PORT || 5000;

//Middeware model
app.use("/activity", activityRouter);

// app.route("/categories")
//     .get((req, res) => res.send("We retrieve a resource "))
//     .post((req, res) => res.send("We create a resource "))
//     .put((req, res) => res.send("We update a resource "))
//     .delete((req, res) => res.send("We delete a resource "));

// app.route("/users")
//     .get((req, res) => res.send("We retrieve a resource "))
//     .post((req, res) => res.send("We create a resource "))
//     .put((req, res) => res.send("We update a resource "))
//     .delete((req, res) => res.send("We delete a resource "));

app.listen(port, () =>
    console.log(`Server listening at http://localhost:${port}`)
);

/* You can add as many routes as you like */

/*Node:

import http module
http.create server(reqHandler)
calllistnet on server
logic goes on request handler */
