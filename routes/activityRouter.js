import express from "express";
import {
    getAll,
    getSingle,
    createActivty,
    updateActivity,
    deleteActivty,
} from "../controllers/activities.js";

const activityRouter = express.Router();
activityRouter.get("/", getAll);
activityRouter.get("/:id", getSingle);
activityRouter.post("/", createActivty);
activityRouter.put("/:id", updateActivity);
activityRouter.delete("/:id", deleteActivty);

export default activityRouter;

//these were all created here but then a new controller created to clean code at this point

// activityRouter.get("/", (req, res) => res.send("All activities"));
// activityRouter.get("/id:", (req, res) => res.send("All activities"));
// activityRouter.post("/", (req, res) => res.send("Create activity"));
// activityRouter.put("/:id", (req, res) => res.send("Update activity"));
// activityRouter.delete("/id:", (req, res) => res.send("Delete activity"));
