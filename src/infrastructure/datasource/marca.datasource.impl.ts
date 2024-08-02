import { prisma } from "../../config";
import { CreateMarcaDto, CustomError, MarcaDatasource, UpdateMarcaDto } from "../../domain";
import { MarcaEntity } from "../../domain/entitys/marca.entity";

export class MarcaDatasourceImpl implements MarcaDatasource{


    async getMarcaAll(): Promise<MarcaEntity[]> {

        const arrayMarca=await prisma.tb_marca.findMany();

        return  arrayMarca.map(marca=>MarcaEntity.fromObject(marca));
    }

    async getMarcaOne(id: string): Promise<MarcaEntity> {

        try {
            const oneMarca=await prisma.tb_marca.findUnique({
                where:{
                    id_marca:id
                }
            })
            if(!oneMarca) throw CustomError.badRequest('El id no existe');
            return MarcaEntity.fromObject(oneMarca!);

        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    async postRegisterMarca(createMarcaDto: CreateMarcaDto): Promise<MarcaEntity> {

        try {
            const newMarca=await prisma.tb_marca.create({
                data:createMarcaDto
            })
            return MarcaEntity.fromObject(newMarca);
        } catch (error) {
            console.error(error);
            throw error;
        }
        
    }
    async putMarca(updateMarcaDto: UpdateMarcaDto): Promise<MarcaEntity> {
        await this.getMarcaOne(updateMarcaDto.id_marca);
        
        try {

            const updateMarca= await prisma.tb_marca.update({
                where:{
                    id_marca:updateMarcaDto.id_marca
                },
                data:updateMarcaDto.values
            })
            
            if(!updateMarca) throw CustomError.badRequest('Ocurrio un error al actualizar la data');
            return MarcaEntity.fromObject(updateMarca);
            
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteMarca(id: string): Promise<MarcaEntity> {
        await this.getMarcaOne(id);
        
        try {
            const deleteMarca=await prisma.tb_marca.delete({
                where:{
                    id_marca:id
                }
            })
            if(!deleteMarca) throw CustomError.badRequest('Existio un error al eliminar la marca');
            return MarcaEntity.fromObject(deleteMarca)
        } catch (error) {
            console.error(error);
            throw error;
            
        }
    }

}