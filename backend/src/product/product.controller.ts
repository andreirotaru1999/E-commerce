import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { PaginationDto } from './pagination.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() productData: Product): Promise<Product> {
    return this.productService.create(productData);
  }

  @Get()
  async findAll(@Query() pagination: PaginationDto) {
    return this.productService.findAll(pagination);
  }
}
