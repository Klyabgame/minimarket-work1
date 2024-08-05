import { CustomError } from "../errors/custom.error";


export class TipoComprobanteEntity{

    public  id_tipo_comprobante:string;
    public  nombre_tipo_comprobante :string;

    constructor(
        id_tipo_comprobante:string,
        nombre_tipo_comprobante :string,
        

    ){
        this.id_tipo_comprobante=id_tipo_comprobante;
        this.nombre_tipo_comprobante=nombre_tipo_comprobante;
    }

    public static fromObject(obj:{[key:string]:any}):TipoComprobanteEntity{

        const {
            id_tipo_comprobante,
            nombre_tipo_comprobante,
            }=obj;

        if(!id_tipo_comprobante) throw CustomError.badRequest('no existe el id de la tipo-comprobante-entity') ;
        if(!nombre_tipo_comprobante) throw CustomError.badRequest('el tipo-comprobante debe tener un nombre-entity') ;


        return new TipoComprobanteEntity(id_tipo_comprobante,nombre_tipo_comprobante,);

    }


}