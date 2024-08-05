import { UuidValid } from "../../../helper";

export class UpdateVentaDto{

    private constructor(
        public  readonly id_venta:string,
        public  readonly total_venta:number,
        public  readonly fecha_venta:Date,
        public  readonly id_auth:string,
        public  readonly id_tipo_comprobante:string
    ){}

    get values(){
        const returnObj:{[key:string]:any}={};
        if (this.id_venta) returnObj.id_venta=this.id_venta;
        if (this.total_venta) returnObj.total_venta=this.total_venta;
        if (this.fecha_venta) returnObj.fecha_venta=this.fecha_venta;
        if (this.id_auth) returnObj.id_auth=this.id_auth;
        if (this.id_tipo_comprobante) returnObj.id_tipo_comprobante=this.id_tipo_comprobante;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[string?, UpdateVentaDto?]{
        
        const {
            id_venta,
            total_venta,
            fecha_venta,
            id_auth,
            id_tipo_comprobante
            }=props;

            if ( !UuidValid(id_venta) ) {
                return ['id_venta must be a valid UUID'];
              }
            if ( !UuidValid(id_tipo_comprobante) ) {
                return ['id_tipo_comprobante must be a valid UUID'];
              }
            if ( !UuidValid(id_auth) ) {
                return ['id_auth must be a valid UUID'];
              }
            

        return [undefined,new UpdateVentaDto(
            id_venta,
            total_venta,
            fecha_venta,
            id_auth,
            id_tipo_comprobante
        )];
    }


}