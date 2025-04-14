import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productService.create(productData);
  }

  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 2) {
    return this.productService.findAll({
      page: Number(page),
      limit: Number(limit),
    });
  }
}
