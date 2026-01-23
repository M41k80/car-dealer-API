import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   model: 'Prius',
    // },
    // {
    //   id: uuid(),
    //   name: 'Honda',
    //   model: 'Civic',
    // },
    // {
    //   id: uuid(),
    //   name: 'Ford',
    //   model: 'Mustang',
    // },
    // {
    //   id: uuid(),
    //   name: 'Chevrolet',
    //   model: 'Camaro',
    // },
  ];


  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
  const car = this.cars.find((car) => car.id === id);
  if (!car) {
    throw new NotFoundException('Car not found by id: ' + id);
  }
  return car;
}


createCar(createCarDto: CreateCarDto): Car {
  const car = {
    id: uuid(),
    ...createCarDto,
  };
  this.cars.push(car);
  return car;


}

updateCar(id: string, updateCarDto: UpdateCarDto): Car {
  
  let carDB = this.findOneById(id);

  if( updateCarDto.id && updateCarDto.id !== id) 
    throw new BadRequestException('Car id is not valid inside body');

  this.cars = this.cars.map((car) => {
    if (car.id === id) {
      carDB = {
        ...carDB,
        ...updateCarDto,
        id,
      };
      return carDB;
    }
    return car;
  });
  return carDB;

}


deleteCar(id: string) {
  const car = this.findOneById(id);
  if (!car) {
    throw new NotFoundException('Car not found by id: ' + id);
  }
  this.cars = this.cars.filter((car) => car.id !== id);

  return { message: `Car with id ${id} deleted successfully` }; 
}

fillCarsWithSeedData(cars: Car[]) {
  this.cars = cars;
}

}
