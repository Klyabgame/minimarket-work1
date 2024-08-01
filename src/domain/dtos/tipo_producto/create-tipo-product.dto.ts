
export class CreateTipoProductDto{

    private constructor(
        public readonly id_tipo_product:string,
        public readonly nombre_tipo_product :string,
    ){}

    static create(props:{[key:string]:any}):[string?, CreateTipoProductDto?]{
        
        const {
            id_tipo_product,
            nombre_tipo_product,
            }=props;

            if (!nombre_tipo_product) return ['Tiene que asignar un tipo de producto',undefined];

        return [undefined,new CreateTipoProductDto(id_tipo_product,nombre_tipo_product,)]
    }


}