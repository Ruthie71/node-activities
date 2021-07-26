import activities from "../data/activities.js";
import { validationResult } from "express-validator";

const checkIfActivtyInArray = (id) => {
    if (!id) return null;
    const sanitisedEntry = id.toUpperCase();
    return activities.find(
        (activities) =>
            activities.id === sanitisedEntry ||
            activities.name === sanitisedEntry
    );
};

export const getAll = (req, res) => res.json(activities);
export const getSingle = (req, res) => res.json("Get single activity");
export const createActivty = (req, res) => {
    const [id, name] = req.body;

    const alreadyExists = [
        checkIfActivtyInArray(id),
        checkIfActivtyInArray(name),
    ];

    if (alreadyExists.some((Element) => Element))
        return res.status(404).json({ error: "Activity already exists" });

    const newActivity = {
        id: activities.length + 1,
        ...req.body,
    };
    activities.push(newActivity);
    res.json(newActivity);
};

export const updateActivity = (req, res) => res.json("Update single activity");
export const deleteActivty = (req, res) => res.json("Delete single activity");
