import activities from "../data/activities.js";

export const getAll = (req, res) => res.json(activities);

export const getSingle = (req, res) => res.json("Get single activity");

export const createActivty = (req, res) => res.json("Create single activity");
export const updateActivity = (req, res) => res.json("Update single activity");
export const deleteActivty = (req, res) => res.json("Delete single activity");
