import { UuidValid } from "../../../helper";

export class UpdateProductDto{

    private constructor(
        public readonly id_product:string,
        public readonly product_url :string,
        public readonly descripcion :string,
        public readonly stock :number,
        public readonly precio_compra_unit:number,
        public readonly precio_venta_unit:number,
        public readonly id_marca:string,
        public readonly id_tipo_product:string,
    ){}

    get values(){
        const returnObj:{[key:string]:any}={};
        if (this.id_product) returnObj.id_product=this.id_product;
        if (this.product_url) returnObj.product_url=this.product_url;
        if (this.descripcion) returnObj.descripcion=this.descripcion;
        if (this.stock) returnObj.stock=this.stock;
        if (this.precio_compra_unit) returnObj.precio_compra_unit=this.precio_compra_unit;
        if (this.precio_venta_unit) returnObj.precio_venta_unit=this.precio_venta_unit;
        if (this.id_marca) returnObj.id_marca=this.id_marca;
        if (this.id_tipo_product) returnObj.id_tipo_product=this.id_tipo_product;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[string?, UpdateProductDto?]{

        

        const {
            id_product,
            product_url,
            descripcion,
            stock,
            precio_compra_unit,
            precio_venta_unit,
            id_marca,
            id_tipo_product
            }=props;

            if ( !UuidValid(id_product) ) {
                return ['id_product must be a valid UUID'];
              }
            




        return [undefined,new UpdateProductDto(
            id_product,
            product_url,
            descripcion,
            stock,
            precio_compra_unit,
            precio_venta_unit,
            id_marca,
            id_tipo_product
                )]
    }


}