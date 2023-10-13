import { EstablishmentsModel } from "../models/establishments.js";
import { validateEstablishment } from "../schemas/establishments.js";

export class EstablishmentsController {
    static async getAll(req, res){
        const establishments = await EstablishmentsModel.getAll({});
        res.json(establishments);
    }

    static async getByName(req, res){
        const {name} = req.query;
        const establishment = await EstablishmentsModel.getByName({name});
        res.json(establishment);
    }

    static async create(req, res){
        const result = validateEstablishment(req.body);

        if (result.error) {
            return res.status(422).json({error: JSON.parse(result.error.message)})
        }
        const establishment = await EstablishmentsModel.create({input: result.data});

        res.json(establishment);
    }
}