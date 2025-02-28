import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FilingService } from './filing.service';
import { Filing } from './filing.entity';

@Controller('filing')
export class FilingController {
    constructor(private readonly filingService: FilingService) {}

    @Post("lapor")
    async create(@Body() filing: Filing): Promise<Filing> {
        return this.filingService.create(filing);
    }

    @Get()
    async findAll(): Promise<Filing[]> {
        return this.filingService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Filing> {
        return this.filingService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() filing: Filing): Promise<Filing> {
        return this.filingService.update(id, filing);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Filing> {
        return this.filingService.remove(id);
    }
}
