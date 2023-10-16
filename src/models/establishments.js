import { connection } from "../configuration/mysqlConnection.js";
import { establishmentsQuerys } from "./querys/establishments.js";


export class EstablishmentsModel {
    static async getAll({}){
        const [establishments]= await connection.query(
            establishmentsQuerys.getAll
        )
        return establishments;
    }
    static async getByName({name}){
        if (name) {
            const lowerCaseName = name.toLowerCase();
            const [establishment] = await connection.query(
                establishmentsQuerys.getByName,
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
                establishmentsQuerys.create,
                [nombre_establecimiento, direccion, descripcion, establishment_puntuacion]
            )
            return "Se inserto el establecimiento de manera correcta";
        } catch (e) {
            return "Error al insertar, favor de contactar al administrador";
        }
    }
    static async delete({id}){
        try {
            const eliminar = await connection.query(
                establishmentsQuerys.delete,
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
               establishmentsQuerys.update,
               [nombre_establecimiento, direccion, descripcion, establishment_puntuacion, establishment_id]
           )

           if(result[0].affectedRows === 0) return 'No se encontro ningun establecimiento con ese id';

           return "Se actualizo el establecimiento de manera correcta" + result[0].affectedRows;
           
       } catch (e) {
           return "Error al actualizar, favor de contactar al administrador";
       }
    }
}