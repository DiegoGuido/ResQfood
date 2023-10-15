import z from 'zod';

const establishmentSchema = z.object({
    nombre_establecimiento: z.string({
        required_error: 'Nombre del establecimiento obligatorio'
    }),
    direccion: z.string({
        required_error: 'Dirección del establecimiento obligatorio'
    }),
    descripcion: z.string().optional(),
    establishment_puntuacion: z.number()
});

const establishmentUpdateSchema = z.object({
    establishment_id: z.number().positive().int(),
    nombre_establecimiento: z.string({
        required_error: 'Nombre del establecimiento obligatorio'
    }),
    direccion: z.string({
        required_error: 'Dirección del establecimiento obligatorio'
    }),
    descripcion: z.string().optional(),
    establishment_puntuacion: z.number()
})


export const validateEstablishment = (input) => {
    return establishmentSchema.safeParse(input);
}

export const validateEstablishmentUpdate = (input) => {
    return establishmentUpdateSchema.safeParse(input);
}