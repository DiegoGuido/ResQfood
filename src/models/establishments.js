import { connection } from "../configuration/mysqlConnection.js";

const connectionMysql = connection;

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
        console.log(input);
        const {
            nombre_establecimiento,
            direccion,
            descripcion,
            establishment_puntuacion
        } = input

        try {
             await connection.query(
                `INSERT INTO establishments
                (nombre_establecimiento, direccion, descripcion, establishment_puntuacion)
                VALUES (?,?,?,?);`,
                [nombre_establecimiento, direccion, descripcion, establishment_puntuacion]
            )
            return "Se inserto el establecimiento de manera correcta";
        } catch (e) {
            throw new Error('Error al insertar');
        }
    }
    static async delete({id}){
        
    }
    static async update({input}){
        
    }
}