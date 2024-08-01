import { CustomError } from "../errors/custom.error";


export class MarcaEntity{

    public  id_marca:string;
    public  nombre_marca :string;

    constructor(
        id_marca:string,
        nombre_marca :string,
        

    ){
        this.id_marca=id_marca;
        this.nombre_marca=nombre_marca;
    }

    public static fromObject(obj:{[key:string]:any}):MarcaEntity{

        const {
            id_marca,
            nombre_marca,
            }=obj;

        if(!id_marca) throw CustomError.badRequest('no existe el id de la marca-entity') ;
        if(!nombre_marca) throw CustomError.badRequest('la marca debe tener un nombre-entity') ;


        return new MarcaEntity(id_marca,nombre_marca,);

    }


}