import { UuidValid } from "../../../helper";

export class UpdateMarcaDto{

    private constructor(
        public readonly id_marca:string,
        public readonly nombre_marca :string,
    ){}

    get values(){
        const returnObj:{[key:string]:any}={};
        if (this.id_marca) returnObj.id_marca=this.id_marca;
        if (this.nombre_marca) returnObj.nombre_marca=this.nombre_marca;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[string?, UpdateMarcaDto?]{
        
        const {
            id_marca,
            nombre_marca,
            }=props;

            if ( !UuidValid(id_marca) ) {
                return ['id_marca must be a valid UUID'];
              }
            

        return [undefined,new UpdateMarcaDto(id_marca,nombre_marca,)]
    }


}