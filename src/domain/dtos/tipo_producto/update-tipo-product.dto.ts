import { UuidValid } from "../../../helper";

export class UpdateTipoProductDto{

    private constructor(
        public readonly id_tipo_product:string,
        public readonly nombre_tipo_product :string,
    ){}

    get values(){
        const returnObj:{[key:string]:any}={};
        if (this.id_tipo_product) returnObj.id_tipo_product=this.id_tipo_product;
        if (this.nombre_tipo_product) returnObj.nombre_tipo_product=this.nombre_tipo_product;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[string?, UpdateTipoProductDto?]{
        
        const {
            id_tipo_product,
            nombre_tipo_product,
            }=props;

            if ( !UuidValid(id_tipo_product) ) {
                return ['id_tipo_product must be a valid UUID'];
              }
            

        return [undefined,new UpdateTipoProductDto(id_tipo_product,nombre_tipo_product,)]
    }


}