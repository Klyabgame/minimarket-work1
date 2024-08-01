import { CreateMarcaDto, UpdateMarcaDto } from "../dtos";
import { MarcaEntity } from "../entitys/marca.entity";

export abstract class MarcaRepository{

  abstract getMarcaAll():Promise<MarcaEntity[]>;
  abstract getMarcaOne(id:string):Promise<MarcaEntity>;
  abstract postRegisterMarca(createMarcaDto:CreateMarcaDto):Promise<MarcaEntity>;
  abstract putMarca(updateMarcaDto:UpdateMarcaDto):Promise<MarcaEntity>;
  abstract deleteMarca(id:string):Promise<MarcaEntity>;
  
  
  }