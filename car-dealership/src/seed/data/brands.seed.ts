import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Tesla',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'KIA',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'CTM',
        createdAt: new Date().getTime()
    },
]