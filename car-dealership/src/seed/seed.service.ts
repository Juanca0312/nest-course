import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) { }

  runSeed() {
    this.carsService.carsSeed(CARS_SEED);
    this.brandsService.brandSeed(BRANDS_SEED);
    return 'Seed executed succesfully';
  }

}
