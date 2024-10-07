export const fetchRosarioDetalhe = async (db, rosarioId) => {
  try {
    //Pegando os Detalhes do Rosario
    queryInfoRosarios = `SELECT * FROM rosarios WHERE rosarios.id = ?;`;
    const rosarios = await db.getAllAsync(queryInfoRosarios, [rosarioId]);
    let tercos;

    for (let rosario of rosarios) {
      queryInfoTercosRosarios = `SELECT t.id, t.title, t.tempo, t.idrosario from tercos t join rosarios r on t.idRosario = r.id where r.id = ?`;
      tercos = await db.getAllAsync(queryInfoTercosRosarios, rosarioId);

      for (let terco of tercos) {
        queryInfoMisteriosTerco = `SELECT tm.title, tm.descricao, tm.imagem, tm.tercosId, tm.id from tercosMisterios tm join tercos t on tm.tercosId = t.id where t.id = ?`;
        const misterios = await db.getAllAsync(
          queryInfoMisteriosTerco,
          terco.id
        );
        for (let misterio of misterios) {
          queryInfoOracoesMisterios = `SELECT o.title, o.oracao, o.tempo, o.id, o.icone from tercosMisteriosOracaoes tmo join tercosMisterios tm on tmo.tercosMisteriosId = tm.id join oracoes o on tmo.oracoesId = o.id where tm.id = ?;`;
          const oracaoesMisterios = await db.getAllAsync(
            queryInfoOracoesMisterios,
            misterio.id
          );

          misterio.oracoes = oracaoesMisterios;
        }

        terco.misterios = misterios;
      }

      rosario.tercos = tercos;
    }

    return rosarios;
  } catch (error) {
    console.log(error);
  }
};
