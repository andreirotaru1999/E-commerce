import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private ProductRepository: Repository<Product>,
  ) {}

  async create(data: Partial<Product>): Promise<Product> {
    const entity = this.ProductRepository.create(data);
    return this.ProductRepository.save(entity);
  }

  async findAll(pagination: {
    page: number;
    limit: number;
  }): Promise<{ data: Product[] }> {
    const { page, limit } = pagination;
    const [data] = await this.ProductRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
    };
  }
}
