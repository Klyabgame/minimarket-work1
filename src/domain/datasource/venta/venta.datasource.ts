import { CreateVentaDto, UpdateVentaDto } from "../../dtos/venta";
import { VentaEntity } from "../../entitys/venta.entity";


export abstract class VentaDatasource{

    abstract getVentaAll():Promise<VentaEntity[]>;
    abstract getVentaOne(id:string):Promise<VentaEntity>;
    abstract postRegisterVenta(CreateVentaDto:CreateVentaDto):Promise<VentaEntity>;
    abstract putVenta(UpdateVentaDto:UpdateVentaDto):Promise<VentaEntity>;
    abstract deleteVenta(id:string):Promise<VentaEntity>;
  
  
  }