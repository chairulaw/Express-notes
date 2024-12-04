import express from "express";
import { createNotes, getAllNotes, getNotesById, updateNotes, deleteNotes } from "../controllers/notes.js";

const router = express.Router();

router.get('/notesnotes', getAllNotes);
router.post('/notes', createNotes);
router.get('/notes/:id', getNotesById);
router.put('/notes/:id', updateNotes);
router.delete('/notes/:id', deleteNotes);

export default router;