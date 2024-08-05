import { CreateVentaDetalleDto, UpdateVentaDetalleDto } from "../../dtos/venta_detallle";
import { VentaDetalleEntity } from "../../entitys/venta-detalle.entity";

export abstract class VentaDetalleDatasource{

    abstract getVentaDetalleAll():Promise<VentaDetalleEntity[]>;
    abstract getVentaDetalleOne(id:string):Promise<VentaDetalleEntity>;
    abstract postRegisterVentaDetalle(createVentaDetalleDto:CreateVentaDetalleDto):Promise<VentaDetalleEntity>;
    abstract putVentaDetalle(updateVentaDetalleDto:UpdateVentaDetalleDto):Promise<VentaDetalleEntity>;
    abstract deleteVentaDetalle(id:string):Promise<VentaDetalleEntity>;
  
  
  }