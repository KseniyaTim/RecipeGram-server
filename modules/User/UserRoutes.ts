import express from "express";
const router = express.Router();

import { getUser } from "./UserControl";

router.get("/:_id", getUser)
