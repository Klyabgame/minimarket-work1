import { UuidValid } from "../../../helper";

export class UpdateVentaDetalleDto{

    private constructor(
        public readonly id_venta_detalle:string,
        public readonly cantidad:number,
        public readonly id_product:string,
        public readonly id_venta:string,
        public readonly precio_venta_unit:number,
        public readonly total:number
    ){}

    get values(){
        const returnObj:{[key:string]:any}={};
        if (this.id_venta_detalle) returnObj.id_venta_detalle=this.id_venta_detalle;
        if (this.cantidad) returnObj.cantidad=this.cantidad;
        if (this.id_product) returnObj.id_product=this.id_product;
        if (this.id_venta) returnObj.id_venta=this.id_venta;
        if (this.precio_venta_unit) returnObj.precio_venta_unit=this.precio_venta_unit;
        if (this.total) returnObj.total=this.total;
        return returnObj;
    }

    static create(props:{[key:string]:any}):[string?, UpdateVentaDetalleDto?]{
        
        const {
            id_venta_detalle,
            cantidad,
            id_product,
            id_venta,
            precio_venta_unit,
            total
            }=props;

            if ( !UuidValid(id_venta_detalle) ) {
                return ['id_venta_detalle must be a valid UUID'];
              }
            if ( !UuidValid(id_product) ) {
                return ['id_product must be a valid UUID'];
              }
            if ( !UuidValid(id_venta) ) {
                return ['id_venta must be a valid UUID'];
              }
            

        return [undefined,new UpdateVentaDetalleDto(
            id_venta_detalle,
            cantidad,
            id_product,
            id_venta,
            precio_venta_unit,
            total
        )];
    }


}