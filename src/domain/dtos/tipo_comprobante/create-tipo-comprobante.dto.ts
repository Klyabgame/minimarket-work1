
export class CreateTipoComprobanteDto{

    private constructor(
        public readonly id_tipo_comprobante:string,
        public readonly nombre_tipo_comprobante :string,
    ){}

    static create(props:{[key:string]:any}):[string?, CreateTipoComprobanteDto?]{
        
        const {
            id_tipo_comprobante,
            nombre_tipo_comprobante,
            }=props;

            if (!nombre_tipo_comprobante) return ['Tiene que asignar un nombre al tipo de comprobante',undefined];

        return [undefined,new CreateTipoComprobanteDto(id_tipo_comprobante,nombre_tipo_comprobante,)]
    }


}