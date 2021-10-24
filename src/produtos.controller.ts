import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { json } from "stream/consumers";

@Controller('produtos')
export class ProdutosContoller {


    @Get()
    obterTodos(): string {
        return 'Lista todos os produtos';
    }

    @Get(':proid')
    obterUm(@Param() params): string {
        return `Retorna os dados do produto ${params.proid}`;
    }

    @Post()
    criar(@Body() produto): string {
        return produto;
    }

    @Put()
    alterar(@Body() produto): string {
        return produto;
    }

    @Delete(':id')
    apagar(@Param() params): string {
        return `O produto id: ${params.id} foi removido com sucesso`
    }


}