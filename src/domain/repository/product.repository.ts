import { CreateProductDto,  UpdateProductDto } from "../dtos";
import { ProductEntity } from "../entitys/product.entity";


export abstract class ProductRepository{

  abstract postRegisterProduct(createProductDTO:CreateProductDto):Promise<ProductEntity>;
  abstract putProduct(updateProductDTO:UpdateProductDto):Promise<ProductEntity>;


}