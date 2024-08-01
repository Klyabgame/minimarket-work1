
export class CreateProductDto{

    private constructor(
        public readonly id_product:string,
        public readonly product_url :string,
        public readonly descripcion :string,
        public readonly stock :number,
        public readonly precio_compra_unit:number,
        public readonly precio_venta_unit:number,
        public readonly id_marca:string,
        public readonly id_tipo_product:string,
    ){}

    static create(props:{[key:string]:any}):[string?, CreateProductDto?]{

        

        const {
            id_product,
            product_url,
            descripcion,
            stock,
            precio_compra_unit,
            precio_venta_unit,
            id_marca,
            id_tipo_product
            }=props;

            if (!descripcion) return ['Tiene que escribir una descripcion',undefined];
            if (!stock) return ['Tiene que ingresar stock',undefined];
            if (!precio_compra_unit) return ['Tiene que existir el precio de compra unitaria ',undefined];
            if (!precio_venta_unit) return ['Tiene que existir el precio de venta unitaria ',undefined];
            if (!id_marca) return ['ingresa la marca ',undefined];
            if (!id_tipo_product) return ['ingresa el tipo de producto ',undefined];




        return [undefined,new CreateProductDto(
            id_product,
            product_url,
            descripcion,
            stock,
            precio_compra_unit,
            precio_venta_unit,
            id_marca,
            id_tipo_product
                )]
    }


}