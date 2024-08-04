import { CreateProductDto,  UpdateProductDto } from "../dtos";
import { ProductEntity } from "../entitys/product.entity";


export abstract class ProductRepository{

  abstract getProductAll():Promise<ProductEntity[]>;
  abstract getProductOne(id:string):Promise<ProductEntity>;
  abstract postRegisterProduct(createProductDTO:CreateProductDto):Promise<ProductEntity>;
  abstract putProduct(updateProductDTO:UpdateProductDto):Promise<ProductEntity>;
  abstract deleteProduct(id:string):Promise<ProductEntity>;

}