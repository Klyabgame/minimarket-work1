import { CustomError } from "../errors/custom.error";


export class VentaDetalleEntity{

    public  id_venta_detalle:string;
    public  cantidad:number;
    public  id_product:string;
    public  id_venta:string;
    public  precio_venta_unit:number;
    public  total:number;


    constructor(

        id_venta_detalle:string,
        cantidad:number,
        id_product:string,
        id_venta:string,
        precio_venta_unit:number,
        total:number

    ){
        this.id_venta_detalle=id_venta_detalle
        this.cantidad=cantidad
        this.id_product=id_product
        this.id_venta=id_venta
        this.precio_venta_unit=precio_venta_unit
        this.total=total
    }

    public static fromObject(obj:{[key:string]:any}):VentaDetalleEntity{

        const {
            id_venta_detalle,
            cantidad,
            id_product,
            id_venta,
            precio_venta_unit,
            total
            }=obj;

        if(!id_venta_detalle) throw CustomError.badRequest('no existe el id de la venta-detalle-entity') ;
        if(!cantidad) throw CustomError.badRequest('ingrese la cantidad-entity') ;
        if(!id_product) throw CustomError.badRequest('falta ingresar el id-product-entity') ;
        if(!id_venta) throw CustomError.badRequest('debes ingresar el id de la venta-entity') ;
        if(!precio_venta_unit) throw CustomError.badRequest('debes ingresar el precio de venta unitario-entity') ;
        if(!total) throw CustomError.badRequest('ingresa el total de la venta-entity') ;

        return new VentaDetalleEntity(
            id_venta_detalle,
            cantidad,
            id_product,
            id_venta,
            precio_venta_unit,
            total
        );

    }


}