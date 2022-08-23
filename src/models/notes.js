const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    tags: { type: [String], default: [] },
    body: { type: String, default: null },
  },
  {
    timestamps: {
      createdAt: "c_at", // Use `c_at` to store the created date
      updatedAt: "u_at", // and `u_at` to store the last updated date
    },
  }
);

const NoteModel = mongoose.model("notes", NoteSchema);

module.exports = NoteModel;
