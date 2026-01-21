import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      name: 'Toyota',
      model: 'Prius',
    },
    {
      id: 2,
      name: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      name: 'Ford',
      model: 'Mustang',
    },
    {
      id: 4,
      name: 'Chevrolet',
      model: 'Camaro',
    },
  ];


  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
  const car = this.cars.find((car) => car.id === id);
  if (!car) {
    throw new NotFoundException('Car not found by id: ' + id);
  }
  return car;
}


createCar(id: number, name: string, model: string) {
  const car = {
    id,
    name,
    model,
  };
  this.cars.push(car);
  return car;


}

updateCar(id: number, name: string, model: string) {
  const car = this.cars.find((car) => car.id === id);
  if (!car) {
    throw new NotFoundException('Car not found by id: ' + id);
  }
  car.name = name;
  car.model = model;
  return car;

}


deleteCar(id: number) {
  const car = this.cars.find((car) => car.id === id);
  if (!car) {
    throw new NotFoundException('Car not found by id: ' + id);
  }
  this.cars = this.cars.filter((car) => car.id !== id);

  return { message: `Car with id ${id} deleted successfully` }; 
}

}
