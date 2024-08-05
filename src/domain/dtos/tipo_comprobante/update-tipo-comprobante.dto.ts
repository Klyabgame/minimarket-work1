import { UuidValid } from "../../../helper";

export class UpdateTipoComprobanteDto{

    private constructor(
        public readonly id_tipo_comprobante:string,
        public readonly nombre_tipo_comprobante :string,
    ){}

    get values(){
        const returnObj:{[key:string]:any}={};
        if (this.id_tipo_comprobante) returnObj.id_tipo_comprobante=this.id_tipo_comprobante;
        if (this.nombre_tipo_comprobante) returnObj.nombre_tipo_comprobante=this.nombre_tipo_comprobante;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[string?, UpdateTipoComprobanteDto?]{
        
        const {
            id_tipo_comprobante,
            nombre_tipo_comprobante,
            }=props;

            if ( !UuidValid(id_tipo_comprobante) ) {
                return ['id_marca must be a valid UUID'];
              }
            

        return [undefined,new UpdateTipoComprobanteDto(id_tipo_comprobante,nombre_tipo_comprobante)];
    }


}