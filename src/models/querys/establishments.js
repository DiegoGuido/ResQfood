export const establishmentsQuerys = {
    getAll:  `SELECT establishment_id, nombre_establecimiento, direccion, descripcion, establishment_puntuacion FROM establishments; `,    
    getByName: `SELECT establishment_id, nombre_establecimiento, direccion, descripcion, establishment_puntuacion FROM establishments WHERE LOWER(nombre_establecimiento) = ? LIMIT 1;`,   
    delete: 'DELETE FROM establishments WHERE establishment_id = ?;',
    update: 
            `UPDATE establishments SET 
            nombre_establecimiento = ?,
            direccion = ?,
            descripcion = ?,
            establishment_puntuacion = ?
            WHERE establishment_id = ?;`,
    create: `INSERT INTO establishments
            (nombre_establecimiento, direccion, descripcion, establishment_puntuacion)
            VALUES (?,?,?,?);`,
}