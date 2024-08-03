import { prisma } from "../../config";
import { CreateTipoProductDto, CustomError, TipoProductDatasource, UpdateTipoProductDto } from "../../domain";
import { TipoProductEntity } from "../../domain/entitys/tipoProduct.entity";


export class TipoProductDatasourceImpl implements TipoProductDatasource{
    async getTipoProductAll(): Promise<TipoProductEntity[]> {
        
        try {
            const tipoProductAll=await prisma.tb_tipo_product.findMany();
            if(!tipoProductAll) throw CustomError.badRequest('Ocurrio un problema al buscar los tipos de producto');
            return tipoProductAll.map(tpProduct=>TipoProductEntity.fromObject(tpProduct));
        } catch (error) {
            console.log(error);
            throw error;            
        }
    }
    async getTipoProductOne(id: string): Promise<TipoProductEntity> {
        try {
            
            const tipoProductOne=await prisma.tb_tipo_product.findUnique({
                where:{
                    id_tipo_product:id
                }
            })
            if(!tipoProductOne) throw CustomError.badRequest('Ocurrio un error al buscar el tipo de producto');
            return TipoProductEntity.fromObject(tipoProductOne);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async postRegisterTipoProduct(createTipoProductDto: CreateTipoProductDto): Promise<TipoProductEntity> {

        try {
            const tipoProductAdd=await prisma.tb_tipo_product.create({
                data:createTipoProductDto
            })
            if(!tipoProductAdd) throw CustomError.badRequest('Ocurrio un error al registrar el producto');
            return TipoProductEntity.fromObject(tipoProductAdd);
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async putTipoProduct(updateTipoProductDto: UpdateTipoProductDto): Promise<TipoProductEntity> {
        await this.getTipoProductOne(updateTipoProductDto.id_tipo_product);

        try {
                const tipoProductUpdate=await prisma.tb_tipo_product.update({
                    where:{
                        id_tipo_product:updateTipoProductDto.id_tipo_product
                    },
                    data:updateTipoProductDto.values
                })
                if(!tipoProductUpdate) throw CustomError.badRequest('Ocurrio un error al actualizar el tipo de producto');
                return TipoProductEntity.fromObject(tipoProductUpdate);
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteTipoProduct(id: string): Promise<TipoProductEntity> {
        await this.getTipoProductOne(id);

        try {
            const tipoProductDelete=await prisma.tb_tipo_product.delete({
                where:{
                    id_tipo_product:id
                }
            })
            if(!tipoProductDelete) throw CustomError.badRequest('Ocurrio un problema al eliminar el tipo de producto');
            return TipoProductEntity.fromObject(tipoProductDelete);
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    

}