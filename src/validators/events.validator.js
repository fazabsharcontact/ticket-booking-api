import { z } from 'zod';

export const createEventSchema = z.object({
    name: z.string().min(1, { message: 'nama tidak boleh kosong' }),
    starts_at: z.iso.datetime({ offset: true, message: 'harus masukan waktu sesuai ISO (TIMESTAMPTZ) '}),
    total_seats: z.number().int().positive({ message: 'data input harus bilangan bulat positive' })
});