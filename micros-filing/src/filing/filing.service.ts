import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filing } from './filing.entity';

@Injectable()
export class FilingService {
    constructor(
        @InjectRepository(Filing)
        private readonly filingRepository: Repository<Filing>,
    ) {}

    async create(filing: Filing): Promise<Filing> {
        return this.filingRepository.save(filing);
    }

    async findAll(): Promise<Filing[]> {
        return this.filingRepository.find();
    }

    async findOne(id: number): Promise<Filing> {
        return this.filingRepository.findOneBy({ id });
    }

    async update(id: number, filing: Filing): Promise<void> {
        await this.filingRepository.update(id, filing);
    }

    async remove(id: number): Promise<void> {
        await this.filingRepository.delete(id);
    }
}
