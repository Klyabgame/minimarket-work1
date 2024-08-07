import { prisma } from "../../../config";
import { CustomError, TipoComprobanteDatasource } from "../../../domain";
import { CreateTipoComprobanteDto, UpdateTipoComprobanteDto } from "../../../domain/dtos/tipo_comprobante";
import { TipoComprobanteEntity } from "../../../domain/entitys/tipoComprobante.entity";


export  class TipoComprobanteDatasourceImpl implements TipoComprobanteDatasource{
  async getTipoComprobanteAll(): Promise<TipoComprobanteEntity[]> {
      
    try {

      const tipoComprobanteAll=await prisma.tb_tipo_comprobante.findMany();
      if (!tipoComprobanteAll) throw CustomError.badRequest('Ocurrio un error al buscar los tipos de comprobante');
      return tipoComprobanteAll.map(tpComprobante=>TipoComprobanteEntity.fromObject(tpComprobante));
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async getTipoComprobanteOne(id: string): Promise<TipoComprobanteEntity> {
    try {

      const tipoComprobanteOne=await prisma.tb_tipo_comprobante.findUnique({
        where:{
          id_tipo_comprobante:id
        }
      })
      if (!tipoComprobanteOne) throw CustomError.badRequest('Ocurrio un error al buscar el tipo de comprobante');
      return TipoComprobanteEntity.fromObject(tipoComprobanteOne);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async postRegisterTipoComprobante(createTipoComprobanteDto: CreateTipoComprobanteDto): Promise<TipoComprobanteEntity> {
    
      try {

        const tipoComprobanteRegister=await prisma.tb_tipo_comprobante.create({
          data:createTipoComprobanteDto
        })
        if (!tipoComprobanteRegister) throw CustomError.badRequest('Ocurrio un error al registrar el tipo de comprobante');
        return TipoComprobanteEntity.fromObject(tipoComprobanteRegister);
        
      } catch (error) {
        console.log(error);
        throw error;
        
      }
  }
  async putTipoComprobante(updateTipoComprobanteDto: UpdateTipoComprobanteDto): Promise<TipoComprobanteEntity> {
    await this.getTipoComprobanteOne(updateTipoComprobanteDto.id_tipo_comprobante);
    try {

      const tipoComprobanteUpdate=await prisma.tb_tipo_comprobante.update({
        where:{
          id_tipo_comprobante:updateTipoComprobanteDto.id_tipo_comprobante
        },
        data:updateTipoComprobanteDto.values
      })
      if (!tipoComprobanteUpdate) throw CustomError.badRequest('Ocurrio un error al actualizar el tipo de comprobante');
      return TipoComprobanteEntity.fromObject(tipoComprobanteUpdate);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async deleteTipoComprobante(id: string): Promise<TipoComprobanteEntity> {
    await this.getTipoComprobanteOne(id);
    try {

      const tipoComprobanteDelete=await prisma.tb_tipo_comprobante.delete({
        where:{
          id_tipo_comprobante:id
        }
      })
      if (!tipoComprobanteDelete) throw CustomError.badRequest('Ocurrio un error al eliminar el tipo de comprobante');
      return TipoComprobanteEntity.fromObject(tipoComprobanteDelete);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }


  
  
  }