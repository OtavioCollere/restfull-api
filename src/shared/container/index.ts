import { ICostumerRepository } from "@modules/costumers/domain/repositories/ICostumerRepository";
import CostumerRepository from "@modules/costumers/infra/typeorm/repositories/CostumerRepository";
import { IProcedureRepository } from "@modules/procedures/domain/repositories/IProcedureRepository";
import ProcedureRepository from "@modules/procedures/infra/typeorm/repositories/ProcedureRepository";
import { container } from "tsyringe";

container.registerSingleton<ICostumerRepository>
("CostumerRepository", CostumerRepository);

container.registerSingleton<IProcedureRepository>
("ProcedureRepository", ProcedureRepository);