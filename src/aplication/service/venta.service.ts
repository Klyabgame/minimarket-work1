/* import { UUID, prisma } from '../../config';
import { CreateVentaDto } from '../../domain/dtos/venta';
import { CreateVentaDetalleDto } from '../../domain/dtos/venta_detallle';
import { VentaDetalleEntity } from '../../domain/entitys/venta-detalle.entity';
import { VentaEntity } from '../../domain/entitys/venta.entity';

export class VentaService {

  async realizarCompra(createVentaDto: CreateVentaDto, carrito: CreateVentaDetalleDto[]): Promise<VentaEntity> {
    return prisma.$transaction(async (prisma) => {
      // Crear la venta
      const ventaCreada = await prisma.tb_venta.create({
        data: {
          id_venta:UUID(),
          total_venta: 0,
          fecha_venta: new Date(),
          id_auth: 'bfd465b3-f869-4097-bfb7-958babaaf85d',
          id_tipo_comprobante: 'bfd465b3-f869-4097-bfb7-958babaaf85d',
        },
      });

      // Crear los detalles de la venta
      const detalles = carrito.map((item) => ({
        id_venta_detalle:UUID(),
        cantidad: 8,
        id_product: item.id_product,
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
 */