import { VentaDatasource } from "../../../domain";
import { CreateVentaDto, UpdateVentaDto } from "../../../domain/dtos/venta";
import { VentaEntity } from "../../../domain/entitys/venta.entity";



export  class VentaDatasourceImpl implements VentaDatasource{
  getVentaAll(): Promise<VentaEntity[]> {
    throw new Error("Method not implemented.");
  }
  getVentaOne(id: string): Promise<VentaEntity> {
    throw new Error("Method not implemented.");
  }
  postRegisterVenta(CreateVentaDto: CreateVentaDto): Promise<VentaEntity> {
    throw new Error("Method not implemented.");
  }
  putVenta(UpdateVentaDto: UpdateVentaDto): Promise<VentaEntity> {
    throw new Error("Method not implemented.");
  }
  deleteVenta(id: string): Promise<VentaEntity> {
    throw new Error("Method not implemented.");
  }


  
  
  }