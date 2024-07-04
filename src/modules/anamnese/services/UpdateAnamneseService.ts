import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AnamneseRepository from '@modules/anamnese/typeorm/repositories/AnamneseRepository';
import Anamnese from '@modules/anamnese/typeorm/entities/Anamnese';

interface IRequest {
    tratamentoAnterior: string,
    toxinaBotulinica: string,
    toxinaBotulinica_regiao: string,
    toxinaBotulinica_produto: string,
    fioSustentacao: string,
    fioSustentacao_regiao: string,
    fioSustentacao_produto: string,
    liftCirurgico: string,
    liftCirurgico_regiao: string,
    liftCirurgico_produto: string,
    peelingQuimico: string,
    peelingQuimico_regiao: string,
    peelingQuimico_produto: string,
    laser: string,
    laser_regiao: string,
    laser_produto: string,
    usaMedicamento: string,
    usaMedicamento_qual: string,
    trabalhoExpostoCalor: string,
    alergia: string,
    gestante_lactante: string,
    intoleranciaLactose: string,
    diabetes: string,
    roacutam: string,
    obs: string,
    tratamento: string,
    costumer_id : string
}


class UpdateAnamneseService {
    public async execute({

        tratamentoAnterior, toxinaBotulinica, toxinaBotulinica_regiao, toxinaBotulinica_produto,
        fioSustentacao, fioSustentacao_regiao, fioSustentacao_produto, liftCirurgico, liftCirurgico_regiao,
        liftCirurgico_produto, peelingQuimico, peelingQuimico_regiao, peelingQuimico_produto,
        laser, laser_regiao, laser_produto, usaMedicamento, usaMedicamento_qual, trabalhoExpostoCalor,
        alergia, gestante_lactante, intoleranciaLactose, diabetes, roacutam, obs, tratamento, costumer_id

    }: IRequest): Promise<Anamnese | undefined> {
        
        const anamneseRepository = getCustomRepository(AnamneseRepository);

        const anamnese = await anamneseRepository.findByCostumerId(costumer_id);

        if ( !anamnese )
        {
            throw new AppError("Anamnese facial não encontrada, favor contactar o suporte.");
        }

        anamnese.tratamentoAnterior = tratamentoAnterior;
        anamnese.toxinaBotulinica = toxinaBotulinica;
        anamnese.toxinaBotulinica_regiao = toxinaBotulinica_regiao;
        anamnese.toxinaBotulinica_produto = toxinaBotulinica_produto;
        anamnese.fioSustentacao = fioSustentacao;
        anamnese.fioSustentacao_regiao = fioSustentacao_regiao;
        anamnese.fioSustentacao_produto = fioSustentacao_produto;
        anamnese.liftCirurgico = liftCirurgico;
        anamnese.liftCirurgico_regiao = liftCirurgico_regiao;
        anamnese.liftCirurgico_produto = liftCirurgico_produto;
        anamnese.peelingQuimico = peelingQuimico;
        anamnese.peelingQuimico_regiao = peelingQuimico_regiao;
        anamnese.peelingQuimico_produto = peelingQuimico_produto;
        anamnese.laser = laser;
        anamnese.laser_regiao = laser_regiao;
        anamnese.laser_produto = laser_produto;
        anamnese.usaMedicamento = usaMedicamento;
        anamnese.usaMedicamento_qual = usaMedicamento_qual;
        anamnese.trabalhoExpostoCalor = trabalhoExpostoCalor;
        anamnese.alergia = alergia;
        anamnese.gestante_lactante = gestante_lactante;
        anamnese.intoleranciaLactose = intoleranciaLactose;
        anamnese.diabetes = diabetes;
        anamnese.roacutam = roacutam;
        anamnese.obs = obs;
        anamnese.tratamento = tratamento;

        await anamneseRepository.save(anamnese);

        return anamnese;

    }
}

export default UpdateAnamneseService;
