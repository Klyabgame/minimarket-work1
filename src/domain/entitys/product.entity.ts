import { CustomError } from "../errors/custom.error";


export class ProductEntity{

    public  id_product:string;
    public  product_url :string;
    public  descripcion :string;
    public  stock :number;
    public  precio_compra_unit:number;
    public  precio_venta_unit:number;
    public  id_marca:string;
    public  id_tipo_product:string;
    


    constructor(
        id_product:string,
        product_url :string,
        descripcion :string,
        stock :number,
        precio_compra_unit:number,
        precio_venta_unit:number,
        id_marca:string,
        id_tipo_product:string
        

    ){
        this.id_product=id_product;
        this.product_url=product_url,
        this.descripcion=descripcion,
        this.stock=stock,
        this.precio_compra_unit=precio_compra_unit,
        this.precio_venta_unit=precio_venta_unit,
        this.id_marca=id_marca,
        this.id_tipo_product=id_tipo_product
    }

    public static fromObject(obj:{[key:string]:any}):ProductEntity{

        const {
            id_product,
            product_url,
            descripcion,
            stock,
            precio_compra_unit,
            precio_venta_unit,
            id_marca,
            id_tipo_product
            }=obj;

        if(!id_product) throw CustomError.badRequest('no existe el id') ;
        if(!descripcion) throw CustomError.badRequest('el producto tiene que tener alguna descripcion') ;
        if(!stock) throw CustomError.badRequest('debe ingresar un numero min:0') ;
        if(!precio_compra_unit) throw CustomError.badRequest('ingresa el precio de compra unitaria') ;
        if(!precio_venta_unit) throw CustomError.badRequest('ingresa el precio de venta unitaria') ;
        if(!id_marca) throw CustomError.badRequest('ingresa una marca al producto') ;
        if(!id_tipo_product) throw CustomError.badRequest('ingresa un tipo de producto') ;


        return new ProductEntity(id_product,
            product_url,
            descripcion,
            stock,
            precio_compra_unit,
            precio_venta_unit,
            id_marca,
            id_tipo_product);

    }



}