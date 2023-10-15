import { connection } from "../configuration/mysqlConnection.js";


export class EstablishmentsModel {
    static async getAll({}){
        const [establishments]= await connection.query(
            'SELECT establishment_id, nombre_establecimiento, direccion, descripcion, establishment_puntuacion FROM establishments; '
        )
        return establishments;
    }
    static async getByName({name}){
        if (name) {
            const lowerCaseName = name.toLowerCase();
            const [establishment] = await connection.query(
                'SELECT establishment_id, nombre_establecimiento, direccion, descripcion, establishment_puntuacion FROM establishments WHERE LOWER(nombre_establecimiento) = ? LIMIT 1;',
                [lowerCaseName]
            );
            return establishment;
        }
    }
    static async create({input}){
        const {
            nombre_establecimiento,
            direccion,
            descripcion,
            establishment_puntuacion
        } = input

        try {
             const result = await connection.query(
                `INSERT INTO establishments
                (nombre_establecimiento, direccion, descripcion, establishment_puntuacion)
                VALUES (?,?,?,?);`,
                [nombre_establecimiento, direccion, descripcion, establishment_puntuacion]
            )
            console.log(result);
            return "Se inserto el establecimiento de manera correcta";
        } catch (e) {
            return "Error al insertar, favor de contactar al administrador";
        }
    }
    static async delete({id}){
        try {
            const eliminar = await connection.query(
                'DELETE FROM establishments WHERE establishment_id = ?;',
                [id]
            )
        
            if(eliminar[0].affectedRows === 0) return 'No se encontro ningun establecimiento con ese id';
            
            return 'Establecimiento(s) eliminado correctamente: ' + eliminar[0].affectedRows;

        } catch (error) {
            return "Error al eliminar, favor de contactar al administrador";
        }

    }
    static async update({input}){
        const {
            establishment_id,
            nombre_establecimiento,
            direccion,
            descripcion,
            establishment_puntuacion
        } = input

        try {
            const result = await connection.query(
               `UPDATE establishments SET 
               nombre_establecimiento = ?,
               direccion = ?,
               descripcion = ?,
               establishment_puntuacion = ?
               WHERE establishment_id = ?;`,
               [nombre_establecimiento, direccion, descripcion, establishment_puntuacion, establishment_id]
           )

           if(result[0].affectedRows === 0) return 'No se encontro ningun establecimiento con ese id';

           return "Se actualizo el establecimiento de manera correcta" + result[0].affectedRows;
           
       } catch (e) {
           return "Error al actualizar, favor de contactar al administrador";
       }
    }
}