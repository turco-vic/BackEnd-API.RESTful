const pool = require("../config/database");

const getHeroes = async () => {
    const result = await pool.query(
        `SELECT heroes.*, publishers.name AS publisher_name 
         FROM heroes 
         LEFT JOIN publishers ON heroes.publisher_id = publishers.id`
    );
    return result.rows;
};

const getHeroById = async (id) => {
    const result = await pool.query(
        `SELECT heroes.*, publishers.name AS publisher_name 
         FROM heroes 
         LEFT JOIN publishers ON heroes.publisher_id = publishers.id 
         WHERE heroes.id = $1`, [id]
    );
    return result.rows[0];
};

const createHero = async (name, publisher_id) => {
    const result = await pool.query(
        "INSERT INTO heroes (name, publisher_id) VALUES ($1, $2) RETURNING *",
        [name, publisher_id]
    );
    return result.rows[0];
};

const updateHero = async (id, name, publisher_id) => {
    const result = await pool.query(
        "UPDATE heroes SET name = $1, publisher_id = $2 WHERE id = $3 RETURNING *",
        [name, publisher_id, id]
    );
    return result.rows[0];
};

const deleteHero = async (id) => {
    const result = await pool.query("DELETE FROM heroes WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Herói não encontrado!" };
    }
    return { message: "Herói deletado com sucesso!" };
};

module.exports = { getHeroes, getHeroById, createHero, updateHero, deleteHero };
