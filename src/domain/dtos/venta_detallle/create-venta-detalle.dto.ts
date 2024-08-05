
export class CreateVentaDetalleDto{

    private constructor(
        public readonly id_venta_detalle:string,
        public readonly cantidad:number,
        public readonly id_product:string,
        public readonly id_venta:string,
        public readonly precio_venta_unit:number,
        public readonly total:number
    ){}

    static create(props:{[key:string]:any}):[string?, CreateVentaDetalleDto?]{
        
        const {
            id_venta_detalle,
            cantidad,
            id_product,
            id_venta,
            precio_venta_unit,
            total
            }=props;

            if (!cantidad) return ['Tiene que ingresar la cantidad',undefined];
            if (!id_product) return ['la venta_detalle tiene que tener un producto',undefined];
            if (!id_venta) return ['tienes que asignar el id de la venta',undefined];
            if (!precio_venta_unit) return ['Tiene que ingresar el precio de venta unitario',undefined];
            if (!total) return ['Tiene que asignar el total de la venta-detalle',undefined];

        return [undefined,new CreateVentaDetalleDto(
            id_venta_detalle,
            cantidad,
            id_product,
            id_venta,
            precio_venta_unit,
            total
        )]
    }


}