import { prisma } from "../../../config";
import { CustomError, VentaDatasource } from "../../../domain";
import { CreateVentaDto, UpdateVentaDto } from "../../../domain/dtos/venta";
import { VentaEntity } from "../../../domain/entitys/venta.entity";



export  class VentaDatasourceImpl implements VentaDatasource{
  async getVentaAll(): Promise<VentaEntity[]> {
    try {
      const ventaAll=await prisma.tb_venta.findMany();
      if(!ventaAll) throw CustomError.badRequest('Ocurrio un error al buscar las ventas');
      return ventaAll.map(venta=>VentaEntity.fromObject(venta));
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async getVentaOne(id: string): Promise<VentaEntity> {
    try {
      const ventaOne=await prisma.tb_venta.findUnique({
        where:{
          id_venta:id
        }
      });
      if(!ventaOne) throw CustomError.badRequest('Ocurrio un error al buscar la venta');
      return VentaEntity.fromObject(ventaOne);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async postRegisterVenta(CreateVentaDto: CreateVentaDto): Promise<VentaEntity> {
    try {
      const ventaRegister=await prisma.tb_venta.create({
        data:CreateVentaDto
      });
      if(!ventaRegister) throw CustomError.badRequest('Ocurrio un error al registrar la venta');
      return VentaEntity.fromObject(ventaRegister);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async putVenta(UpdateVentaDto: UpdateVentaDto): Promise<VentaEntity> {
    await this.getVentaOne(UpdateVentaDto.id_venta);
    try {
      const ventaUpdate=await prisma.tb_venta.update({
        where:{
          id_venta:UpdateVentaDto.id_venta
        },
        data:UpdateVentaDto.values
      });
      if(!ventaUpdate) throw CustomError.badRequest('Ocurrio un error al actualizar la venta');
      return VentaEntity.fromObject(ventaUpdate);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }
  async deleteVenta(id: string): Promise<VentaEntity> {
    await this.getVentaOne(id);
    try {
      const ventaDelete=await prisma.tb_venta.delete({
        where:{
          id_venta:id
        }
      });
      if(!ventaDelete) throw CustomError.badRequest('Ocurrio un error al eliminar la venta');
      return VentaEntity.fromObject(ventaDelete);
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }

  }