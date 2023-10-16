export const adsQuerys = {
    getAll: 'SELECT * FROM ads;',
    create: `INSERT INTO
    ads (establishment_id, producto, horario_para_recoger_comida, precio_regular, precio_descuento, ingredientes, restriction_id, disponible)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);`
}

