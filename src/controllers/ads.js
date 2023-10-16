import { AdsModel } from "../models/adsModel.js";
import { validateAd } from "../schemas/ads.js";
export class adsController{
    static async getAll(req, res){
        const ads = await AdsModel.getAll();
        res.json(ads);
    }
    static async getByEstablishment(req,res){
        res.status(403).json({error: 'Method not implemented'})
    }
    static async create(req, res){
       const result = validateAd(req.body);

       if (result.error) {
            return res.status(422).json({error: JSON.parse(result.error.message)})
        }

        const ad = await AdsModel.create({input: result.data});

        res.json(ad);
    }
    static async delete(req, res){
        const {id} = req.params;
        const result = await AdsModel.delete({id});
        res.json(result);
    }
    static async update(req, res){
        res.status(403).json({error: 'Method not implemented'})
    }
}