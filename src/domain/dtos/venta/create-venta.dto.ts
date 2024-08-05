
export class CreateVentaDto{

    private constructor(
        public  readonly id_venta:string,
        public  readonly total_venta:number,
        public  readonly fecha_venta:Date,
        public  readonly id_auth:string,
        public  readonly id_tipo_comprobante:string
    ){}

    static create(props:{[key:string]:any}):[string?, CreateVentaDto?]{
        
        const {
            id_venta,
            total_venta,
            fecha_venta,
            id_auth,
            id_tipo_comprobante
            }=props;

            if (!total_venta) return ['Tiene que asignar el total de la venta',undefined];
            if (!fecha_venta) return ['Tiene que asignar la fecha de venta',undefined];
            if (!id_auth) return ['la venta tiene que tener un usuario',undefined];
            if (!id_tipo_comprobante) return ['Tiene que asignar el tipo de comprobante',undefined];

        return [undefined,new CreateVentaDto(
            id_venta,
            total_venta,
            fecha_venta,
            id_auth,
            id_tipo_comprobante
        )]
    }


}