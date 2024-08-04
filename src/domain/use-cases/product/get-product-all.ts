import { ProductEntity } from "../../entitys/product.entity";
import { ProductRepository } from "../../repository";


export interface GetProductAllUseCase{
    execute():Promise<ProductEntity[]>
}

export class GetProductAll implements GetProductAllUseCase{

    constructor(
        private readonly repository:ProductRepository,
    ){}

    execute(): Promise<ProductEntity[]> {
        return this.repository.getProductAll();
    }

}