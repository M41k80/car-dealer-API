import { Body, Controller, Delete, Get, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(
    @Body('id') id: number,        
    @Body('name') name: string,    
    @Body('model') model: string   
  ) {
    return this.carsService.createCar(id, name, model);  
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseIntPipe) id: number,   
    @Body('name') name: string,               
    @Body('model') model: string              
  ) {
    return this.carsService.updateCar(id, name, model); 
  }


  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {

    return this.carsService.deleteCar(id);
  }

  // @Get(':id')
  // gerCarById(@Param('id') id: string) {
  //   console.log(this.cars[id]);
  //   return this.cars[id];
  // }
}
