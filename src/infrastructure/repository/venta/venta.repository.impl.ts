import { VentaDatasource, VentaRepository } from "../../../domain";
import { CreateVentaDto, UpdateVentaDto } from "../../../domain/dtos/venta";
import { VentaEntity } from "../../../domain/entitys/venta.entity";



export  class VentaRepositoryImpl implements VentaRepository{
  constructor(
    private readonly ventaDatasource:VentaDatasource,
) {}
  getVentaAll(): Promise<VentaEntity[]> {
    return this.ventaDatasource.getVentaAll();
  }
  getVentaOne(id: string): Promise<VentaEntity> {
    return this.ventaDatasource.getVentaOne(id);
  }
  postRegisterVenta(CreateVentaDto: CreateVentaDto): Promise<VentaEntity> {
    return this.ventaDatasource.postRegisterVenta(CreateVentaDto);
  }
  putVenta(UpdateVentaDto: UpdateVentaDto): Promise<VentaEntity> {
    return this.ventaDatasource.putVenta(UpdateVentaDto);
  }
  deleteVenta(id: string): Promise<VentaEntity> {
    return this.ventaDatasource.deleteVenta(id);
  }
  
  }