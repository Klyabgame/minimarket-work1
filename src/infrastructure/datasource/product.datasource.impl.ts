import { prisma } from "../../config";
import { CreateProductDto, CustomError, ProductDatasource, UpdateProductDto } from "../../domain";
import { ProductEntity } from "../../domain/entitys/product.entity";


export class ProductDatasourceImpl implements ProductDatasource{

    async getProductAll(): Promise<ProductEntity[]> {
        try {
            const productAll= await prisma.tb_product.findMany();
            if(!productAll) throw CustomError.badRequest('ocurrio un error al buscar los productos');
            return productAll.map(product=>ProductEntity.fromObject(product));
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getProductOne(id: string): Promise<ProductEntity> {
        try {
            const productOne= await prisma.tb_product.findUnique({
                where:{
                    id_product:id
                }
            });
            if(!productOne) throw CustomError.badRequest('ocurrio un error al buscar el producto');
            return ProductEntity.fromObject(productOne);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async postRegisterProduct(createProductDTO: CreateProductDto): Promise<ProductEntity> {
        try {
            const productRegister=await prisma.tb_product.create({
                data:createProductDTO
            })
            if(!productRegister) throw CustomError.badRequest('Ocurrio un error al registrar el producto-revise los datos ingresados');
            return ProductEntity.fromObject(productRegister);
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }
    async putProduct(updateProductDTO: UpdateProductDto): Promise<ProductEntity> {
        await this.getProductOne(updateProductDTO.id_product);

        try {
            const productUpdate= await prisma.tb_product.update({
                where:{
                    id_product:updateProductDTO.id_product
                },
                data:updateProductDTO.values
            });
            if(!productUpdate) throw CustomError.badRequest('ocurrio un error al actualizar los productos');
            return ProductEntity.fromObject(productUpdate);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteProduct(id: string): Promise<ProductEntity> {
        await this.getProductOne(id);

        try {
            const productDelete= await prisma.tb_product.delete({
                where:{
                    id_product:id
                }
            });
            if(!productDelete) throw CustomError.badRequest('ocurrio un error eliminar el producto');
            return ProductEntity.fromObject(productDelete);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }



}