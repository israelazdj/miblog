const pool = require("../config/db");

function selectAll() {
  return pool.query("SELECT * FROM autor;");
}

function insertAutor({ nombre, email, imagen }) {
  return pool.query("insert into autor (nombre,email,imagen) values (?,?,?)", [
    nombre,
    email,
    imagen,
  ]);
}
async function selectById(autor_id) {
  const [result] = await pool.query("select * from autor where id = ?", [
    autor_id,
  ]);
  if (result.length === 0) return null;
  return result[0];
}

async function selectAutorId(autorid) {
  const result = await pool.query(
    "select * from posts join autor on posts.autor_id = autor.id where autor_id =?",
    [autorid]
  );
  if (result.length === 0) {
    return null;
  }
  return result[0];
}

module.exports = { selectAll, insertAutor, selectById, selectAutorId };
