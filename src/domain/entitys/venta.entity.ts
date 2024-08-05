import { CustomError } from "../errors/custom.error";


export class VentaEntity{

    public  id_venta:string;
    public  total_venta:number;
    public  fecha_venta:Date;
    public  id_auth :string;
    public  id_tipo_comprobante :string;

    constructor(
        id_venta:string,
        total_venta:number,
        fecha_venta:Date,
        id_auth :string,
        id_tipo_comprobante :string
        
    ){
        this.id_venta=id_venta
        this.total_venta=total_venta
        this.fecha_venta=fecha_venta
        this.id_auth=id_auth
        this.id_tipo_comprobante=id_tipo_comprobante
    }

    public static fromObject(obj:{[key:string]:any}):VentaEntity{

        const {
            id_venta,
            total_venta,
            fecha_venta,
            id_auth,
            id_tipo_comprobante
            }=obj;

        if(!id_venta) throw CustomError.badRequest('no existe el id de la venta-entity') ;
        if(!total_venta) throw CustomError.badRequest('no existe el total-venta-entity') ;
        if(!fecha_venta) throw CustomError.badRequest('falta ingresar la fecha de venta-entity') ;
        if(!id_auth) throw CustomError.badRequest('debes ingresar al usuario-entity') ;
        if(!id_tipo_comprobante) throw CustomError.badRequest('debes ingresar el tipo-comprobante-entity') ;


        return new VentaEntity(
            id_venta,
            total_venta,
            fecha_venta,
            id_auth,
            id_tipo_comprobante
        );

    }


}