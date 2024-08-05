import { VentaDetalleDatasource, VentaDetalleRepository } from "../../../domain";
import { CreateVentaDetalleDto, UpdateVentaDetalleDto } from "../../../domain/dtos/venta_detallle";
import { VentaDetalleEntity } from "../../../domain/entitys/venta-detalle.entity";

export  class VentaDetalleRepositoryImpl implements VentaDetalleRepository{
  constructor(
    private readonly ventaDetalleDatasource:VentaDetalleDatasource,
) {}
  getVentaDetalleAll(): Promise<VentaDetalleEntity[]> {
    return this.ventaDetalleDatasource.getVentaDetalleAll();
  }
  getVentaDetalleOne(id: string): Promise<VentaDetalleEntity> {
    return this.ventaDetalleDatasource.getVentaDetalleOne(id);
  }
  postRegisterVentaDetalle(createVentaDetalleDto: CreateVentaDetalleDto): Promise<VentaDetalleEntity> {
    return this.ventaDetalleDatasource.postRegisterVentaDetalle(createVentaDetalleDto);
  }
  putVentaDetalle(updateVentaDetalleDto: UpdateVentaDetalleDto): Promise<VentaDetalleEntity> {
    return this.ventaDetalleDatasource.putVentaDetalle(updateVentaDetalleDto);
  }
  deleteVentaDetalle(id: string): Promise<VentaDetalleEntity> {
    return this.ventaDetalleDatasource.deleteVentaDetalle(id);
  }

  
  
  }