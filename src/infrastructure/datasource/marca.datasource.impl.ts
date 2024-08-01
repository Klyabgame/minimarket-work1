import { prisma } from "../../config";
import { CreateMarcaDto, MarcaDatasource, UpdateMarcaDto } from "../../domain";
import { MarcaEntity } from "../../domain/entitys/marca.entity";

export class MarcaDatasourceImpl implements MarcaDatasource{


    async getMarcaAll(): Promise<MarcaEntity[]> {

        const arrayMarca=await prisma.tb_marca.findMany();

        return  arrayMarca.map(marca=>MarcaEntity.fromObject(marca));
    }
    getMarcaOne(id: string): Promise<MarcaEntity> {
        throw new Error("Method not implemented.");
    }
    

    async postRegisterMarca(createMarcaDto: CreateMarcaDto): Promise<MarcaEntity> {
        console.log({data:createMarcaDto});

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
    putMarca(updateMarcaDto: UpdateMarcaDto): Promise<MarcaEntity> {
        throw new Error("updatemarca.");
    }

    deleteMarca(id: string): Promise<MarcaEntity> {
        throw new Error("Method not implemented.");
    }

}