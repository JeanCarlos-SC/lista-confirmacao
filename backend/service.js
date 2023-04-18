const connection =  require('./connection');

const findAll = async () => {
    const { rows } = await connection.query('SELECT * FROM convidados');
    return rows;
};

const hideConvidado = async (id) => {
   await connection.query(
     `UPDATE convidados SET mostrar = $1 WHERE id = $2;`,
     [false, id],
   );
};

const confirmConvidado = async (id) => {
  await connection.query(
    `UPDATE convidados SET confirmado = $1, mostrar = $2 WHERE id = $3;`,
    [true, false, id],
  );
}

module.exports = { findAll, hideConvidado, confirmConvidado };
