import { PrismaClient } from '@prisma/client';
import { prisma } from '../../config';
import { CreateVentaDto } from '../../domain/dtos/venta';
import { VentaDetalleEntity } from '../../domain/entitys/venta-detalle.entity';
import { VentaEntity } from '../../domain/entitys/venta.entity';

export class VentaService {

  async realizarCompra(createVentaDto: CreateVentaDto, carrito: VentaDetalleEntity[]): Promise<VentaEntity> {
    return prisma.$transaction(async (prisma) => {
      // Crear la venta
      const ventaCreada = await prisma.tb_venta.create({
        data: {
          total_venta: null,
          fecha_venta: new Date(),
          id_auth: createVentaDto.id_auth,
          id_tipo_comprobante: createVentaDto.id_tipo_comprobante,
        },
      });

      // Crear los detalles de la venta
      const detalles = carrito.map((item) => ({
        cantidad: item.cantidad,
        id_producto: item.id_product,
        id_venta: ventaCreada.id_venta,
        precio_venta_unit: item.precio_venta_unit,
        total: item.precio_venta_unit * item.cantidad,
      }));

      await prisma.tb_venta_detalle.createMany({
        data: detalles,
      });

      // Calcular el total de la venta
      const totalVenta = detalles.reduce((acc, detalle) => acc + detalle.total, 0);

      // Actualizar la venta con el total calculado
      await prisma.tb_venta.update({
        where: { id_venta: ventaCreada.id_venta },
        data: { total_venta: totalVenta },
      });

      return ventaCreada;
    });
  }
}
