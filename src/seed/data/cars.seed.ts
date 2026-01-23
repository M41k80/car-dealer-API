import { Car } from '../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';



export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        name: 'Toyota',
        model: 'Prius',
    },
    {
        id: uuid(),
        name: 'Honda',
        model: 'Civic',
    },
    {
        id: uuid(),
        name: 'Ford',
        model: 'Mustang',
    },
    {
        id: uuid(),
        name: 'Chevrolet',
        model: 'Camaro',
    },
    {
        id: uuid(),
        name: 'Chevrolet',
        model: 'Corvette',
    },
    {
        id: uuid(),
        name: 'Dodge',
        model: 'Ram',
    },
    {
        id: uuid(),
        name: 'Ford',
        model: 'Focus',
    },
    {
        id: uuid(),
        name: 'volkswagen',
        model: 'Passat',
    }
];