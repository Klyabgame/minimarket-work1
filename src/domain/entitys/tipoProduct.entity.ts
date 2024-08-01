import { CustomError } from "../errors/custom.error";


export class TipoProductEntity{

    public  id_tipo_product:string;
    public  nombre_tipo_product :string;

    constructor(
        id_tipo_product:string,
        nombre_tipo_product :string,
        

    ){
        this.id_tipo_product=id_tipo_product;
        this.nombre_tipo_product=nombre_tipo_product;
    }

    public static fromObject(obj:{[key:string]:any}):TipoProductEntity{

        const {
            id_tipo_product,
            nombre_tipo_product,
            }=obj;

        if(!id_tipo_product) throw CustomError.badRequest('no existe el id del tipo de producto-entity') ;
        if(!nombre_tipo_product) throw CustomError.badRequest('el tipo de producto debe tener un nombre-entity') ;


        return new TipoProductEntity(id_tipo_product,nombre_tipo_product,);

    }


}