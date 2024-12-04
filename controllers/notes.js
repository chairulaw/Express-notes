import { query } from "../database/db.js";
import dotenv from "dotenv";
import { date } from "../utils/func.js";

dotenv.config();

// Tambah Notes
const createNotes = async (req, res) => {
    const { title, datetime, note } = req.body;
    try {
        await query("INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)", [title, date(), note]);
        return res.status(200).json({ message: "Data Berhasil Ditambahkan" });
    } catch (error) {
        return res.status(500).json({msg: "Gagal Menambahkan Data"});
    }
};

// Menampilkan Semua Notes
const getAllNotes = async (req, res) => {
    try {
        const notes = await query("SELECT * FROM notes");
        return res.status(200).json({ message: "Data Berhasil Ditampilkan", success: true, data: notes });
    } catch (error) {
        console.error("Message: Gagal Menampilkan Data ", error);
        return res.status(500).json({ error: err.message });
    }
};

// Menampilkan Notes Berdasarkan ID
const getNotesById = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await query("SELECT * FROM notes WHERE id = ?", [id]);
        return res.status(200).json({ message: "Data Berhasil Ditampilkan", success: true, data: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Notes
const updateNotes = async (req, res) => {
    const { title, note } = req.body;
    const {id} = req.params;
    try {
        console.log(id)
        await query("UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?", [title, date(), note, id]);
        return res.status(200).json({ message: "Data Berhasil Di Update" });
    } catch (error) {
        return res.status(500).json({msg: "Gagal Update Data"});
    }
};

// Delete Notes
const deleteNotes = async (req, res) => {
    const {id} = req.params;
    try {
        await query("DELETE FROM notes WHERE id = ?", [id]);
        return res.status(200).json({ message: "Data Berhasil Di Hapus" });
    } catch (error) {
        return res.status(500).json({msg: "Gagal Hapus Data"});
    }
};

export{
    createNotes,
    getAllNotes,
    getNotesById,
    updateNotes,
    deleteNotes
};