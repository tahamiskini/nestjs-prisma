import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly dataBaseService: DatabaseService) {}
  async create(createProductDto: Prisma.ProductCreateInput) {
    return this.dataBaseService.product.create({ data: createProductDto });
  }

  async findAll() {
    return this.dataBaseService.product.findMany({});
  }

  async findOne(id: number) {
    return this.dataBaseService.product.findUnique({
      where: {
        id,
      },
      include: {
        description: true,
        tags: true,
        reviews: true,
      },
    });
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.dataBaseService.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return this.dataBaseService.product.delete({
      where: {
        id,
      },
    });
  }
}
