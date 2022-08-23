const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");

const createNote = {
  method: "POST",
  path: "/notes",
  handler: addNoteHandler,
};

const getNote = {
  method: "GET",
  path: "/notes",
  handler: getAllNotesHandler,
};

const getNoteById = {
  method: "GET",
  path: "/notes/{id}",
  handler: getNoteByIdHandler,
};

const editNoteById = {
  method: "PUT",
  path: "/notes/{id}",
  handler: editNoteByIdHandler,
};

const deleteNoteById = {
  method: "DELETE",
  path: "/notes/{id}",
  handler: deleteNoteByIdHandler,
};

const routes = [createNote, getNote, getNoteById, editNoteById, deleteNoteById];

module.exports = routes;
