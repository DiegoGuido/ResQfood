import { connection } from "../configuration/mysqlConnection.js";
import { adsQuerys } from "./querys/ads.js";

export class AdsModel{
    static async getAll(){
        const [ads] = await connection.query(
            adsQuerys.getAll
        )
        return ads;
    }
    static async create({input}){
        const {
            establishment_id,
            producto,
            horario_para_recoger_comida,
            precio_regular,
            precio_descuento,
            ingredientes,
            restriction_id,
            disponible
        } = input

        try {
            await connection.query(
                adsQuerys.create,
                [establishment_id, producto, horario_para_recoger_comida, precio_regular, precio_descuento, ingredientes, restriction_id, disponible]
            )
            return 'Se inserto el anuncio de manera correcta'
        } catch (e) {
            return "Error al insertar, favor de contactar al administrador"
        }

    }
}