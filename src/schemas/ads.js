import z from 'zod';
const adsSchema = z.object({
    establishment_id: z.number().positive().int(),
    producto: z.string(),
    horario_para_recoger_comida: z.string(),
    precio_regular: z.number().positive(),
    precio_descuento: z.number().positive(),
    ingredientes: z.string(),
    restriction_id: z.number().positive(),
    disponible: z.boolean()
})

export const validateAd = (input) =>{
   return adsSchema.safeParse(input);
}