import { prisma } from "../../../config";
import { CustomError, VentaDetalleDatasource } from "../../../domain";
import { CreateVentaDetalleDto, UpdateVentaDetalleDto } from "../../../domain/dtos/venta_detallle";
import { VentaDetalleEntity } from "../../../domain/entitys/venta-detalle.entity";

export  class VentaDetalleDatasourceImpl implements VentaDetalleDatasource{
   async getVentaDetalleAll(): Promise<VentaDetalleEntity[]> {
    try {
      const ventaDetalleAll=await prisma.tb_venta_detalle.findMany();
      if(!ventaDetalleAll) throw CustomError.badRequest('Ocurrio un error al buscar las venta detalle');
      return ventaDetalleAll.map(ventaDetalle=>VentaDetalleEntity.fromObject(ventaDetalle));
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async getVentaDetalleOne(id: string): Promise<VentaDetalleEntity> {
    try {
      const ventaDetalleOne=await prisma.tb_venta_detalle.findUnique({
        where:{
          id_venta_detalle:id
        }
      });
      if(!ventaDetalleOne) throw CustomError.badRequest('Ocurrio un error al buscar la venta detalle');
      return VentaDetalleEntity.fromObject(ventaDetalleOne);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async postRegisterVentaDetalle(createVentaDetalleDto: CreateVentaDetalleDto): Promise<VentaDetalleEntity> {
    try {
      const ventaDetalleRegister=await prisma.tb_venta_detalle.create({
        data:createVentaDetalleDto
      });
      if(!ventaDetalleRegister) throw CustomError.badRequest('Ocurrio un error al registrar las venta detalle');
      return VentaDetalleEntity.fromObject(ventaDetalleRegister);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async putVentaDetalle(updateVentaDetalleDto: UpdateVentaDetalleDto): Promise<VentaDetalleEntity> {
    await this.getVentaDetalleOne(updateVentaDetalleDto.id_venta_detalle);
    try {

      const ventaDetalleUpdate=await prisma.tb_venta_detalle.update({
        where:{
          id_venta_detalle:updateVentaDetalleDto.id_venta_detalle
        },
        data:updateVentaDetalleDto.values
      });
      if(!ventaDetalleUpdate) throw CustomError.badRequest('Ocurrio un error al actualizar las venta detalle');
      return VentaDetalleEntity.fromObject(ventaDetalleUpdate);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async deleteVentaDetalle(id: string): Promise<VentaDetalleEntity> {
    await this.getVentaDetalleOne(id);
    try {
      const ventaDetalleDelete=await prisma.tb_venta_detalle.delete({
        where:{
          id_venta_detalle:id
        }
      });
      if(!ventaDetalleDelete) throw CustomError.badRequest('Ocurrio un error al eliminar la venta detalle');
      return VentaDetalleEntity.fromObject(ventaDetalleDelete);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }


  
  
  }