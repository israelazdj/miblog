const pool = require("../config/db");

function selectAll() {
  return pool.query("SELECT * FROM posts;");
}

function insertPosts({
  titulo,
  descripcion,
  fecha_creacion,
  categoria,
  autor_id,
}) {
  return pool.query(
    "insert into posts(titulo,descripcion,fecha_creacion,categoria,autor_id) values (?,?,?,?,?)",
    [titulo, descripcion, fecha_creacion, categoria, autor_id]
  );
}

async function selectById(postsId) {
  const [result] = await pool.query("select * from posts where id = ?", [
    postsId,
  ]);
  if (result.length === 0) return null;
  return result[0];
}

module.exports = {
  selectAll,
  insertPosts,
  selectById,
};
