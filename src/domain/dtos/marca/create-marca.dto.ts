
export class CreateMarcaDto{

    private constructor(
        public readonly id_marca:string,
        public readonly nombre_marca :string,
    ){}

    static create(props:{[key:string]:any}):[string?, CreateMarcaDto?]{
        
        const {
            id_marca,
            nombre_marca,
            }=props;

            if (!nombre_marca) return ['Tiene que asignar un nombre a la marca',undefined];

        return [undefined,new CreateMarcaDto(id_marca,nombre_marca,)]
    }


}