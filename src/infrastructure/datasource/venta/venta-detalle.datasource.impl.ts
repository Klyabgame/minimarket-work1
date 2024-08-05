import { VentaDetalleDatasource } from "../../../domain";
import { CreateVentaDetalleDto, UpdateVentaDetalleDto } from "../../../domain/dtos/venta_detallle";
import { VentaDetalleEntity } from "../../../domain/entitys/venta-detalle.entity";

export  class VentaDetalleDatasourceImpl implements VentaDetalleDatasource{
  getVentaDetalleAll(): Promise<VentaDetalleEntity[]> {
    throw new Error("Method not implemented.");
  }
  getVentaDetalleOne(id: string): Promise<VentaDetalleEntity> {
    throw new Error("Method not implemented.");
  }
  postRegisterVentaDetalle(createVentaDetalleDto: CreateVentaDetalleDto): Promise<VentaDetalleEntity> {
    throw new Error("Method not implemented.");
  }
  putVentaDetalle(updateVentaDetalleDto: UpdateVentaDetalleDto): Promise<VentaDetalleEntity> {
    throw new Error("Method not implemented.");
  }
  deleteVentaDetalle(id: string): Promise<VentaDetalleEntity> {
    throw new Error("Method not implemented.");
  }


  
  
  }