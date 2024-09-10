import * as SQLite from "expo-sqlite";

export const setupDatabase = async () => {
  // Função para deletar o banco de dados
  await SQLite.deleteDatabaseAsync("tercoDB.db");

  // Abrindo o banco de dados
  const db = await SQLite.openDatabaseAsync("tercoDB.db");

  try {
    await db.execAsync(`
            PRAGMA journal_mode = WAL;
    
            -- Criando as Tabelas
    
            CREATE TABLE IF NOT EXISTS rosarios (
            id integer PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            tempo TEXT NOT NULL
            );
            

            CREATE TABLE IF NOT EXISTS tercos (
            id integer PRIMARY KEY NOT NULL,
            title TEXT,
            tempo TEXT,
            idRosario INTEGER,
            FOREIGN KEY (idRosario) REFERENCES rosarios(id)
            );

            
            CREATE TABLE IF NOT EXISTS tercosMisterios (
            id integer PRIMARY KEY NOT NULL,
            title TEXT,
            descricao TEXT,
            imagem TEXT,
            tercosId INTEGER,
            FOREIGN KEY (tercosId) REFERENCES tercos(id)
            );
               
            CREATE TABLE IF NOT EXISTS oracoes (
            id integer PRIMARY KEY NOT NULL,
            title TEXT,
            oracao TEXT,
            tempo INTEGER
            );
   
            CREATE TABLE IF NOT EXISTS tercosMisteriosOracaoes (
            id integer PRIMARY KEY NOT NULL,
            tercosMisteriosId INTEGER,
            oracoesId INTEGER,
            FOREIGN KEY (tercosMisteriosId) REFERENCES tercosMisterios(id),
            FOREIGN KEY (oracoesId) REFERENCES oracoes(id)
            );

        
            -- Criando as Tabelas

            -- Inserindo dados
            -- Inserindo dados na tabela rosario
            INSERT INTO rosarios (title, tempo) VALUES ('Rosário de Fátima', '60 minutos');
    
            -- Inserindo dados na tabela tercos
            INSERT INTO tercos (title, tempo, idRosario) VALUES
                ('Mistérios Gozosos', '15 minutos', 1),
                ('Mistérios Luminosos', '15 minutos', 1),
                ('Mistérios Dolorosos', '15 minutos', 1),
                ('Mistérios Gloriosos', '15 minutos', 1);

            -- Inserindo dados na tabela tercosMisterios
            INSERT INTO tercosMisterios (title, descricao, imagem, tercosId) VALUES 
            ('Primeiro Mistério Gozoso: Anunciação a Maria', 'No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré, a uma virgem desposada com um homem que se chamava José, da casa de Davi e o nome da virgem era Maria. (Lc 1, 26-27).', '../../../assets/images/anunciacao.jpg', 1),
            ('Segundo Mistério Gozoso: Visitação de Nossa Senhora a Isabel', 'Naqueles dias, Maria se levantou e foi às pressas às montanhas, a uma cidade de Judá. Entrou em casa de Zacarias e saudou Isabel. Ora, apenas Isabel ouviu a saudação de Maria, a criança estremeceu no seu seio; e Isabel ficou cheia do Espírito Santo. E exclamou em alta voz: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre." (Lc 1, 39-42).', '../../../assets/images/anunciacao.jpg',1),
            ('Terceiro Mistério Gozoso: Nascimento de Jesus', 'Naqueles tempos apareceu um decreto de César Augusto, ordenando o recenseamento de toda a terra. Este recenseamento foi feito antes do governo de Quirino, na Síria. Todos iam alistar-se, cada um na sua cidade. Também José subiu da Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi, chamada Belém, porque era da casa e família de Davi, para se alistar com a sua esposa Maria, que estava grávida. Estando eles ali, completaram-se os dias dela. E deu à luz seu filho primogênito, e, envolvendo-o em faixas, reclinou-o num presépio; porque não havia lugar para eles na hospedaria. (Lc 2,1-7).', '../../../assets/images/anunciacao.jpg', 1),
            ('Quarto Mistério Gozoso: Apresentação do Menino Jesus no Templo', 'Completados que foram os oito dias para ser circuncidado o menino, foi-lhe posto o nome de Jesus, como lhe tinha chamado o anjo, antes de ser concebido no seio materno. Concluídos os dias da sua purificação segundo a Lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor, conforme o que está escrito na lei do Senhor: Todo primogênito do sexo masculino será consagrado ao Senhor; e para oferecerem o sacrifício prescrito pela lei do Senhor, um par de rolas ou dois pombinhos. (Lc 2, 21-24).', '../../../assets/images/anunciacao.jpg', 1),
            ('Quinto Mistério Gozoso: Perda e encontro do Menino Jesus no Templo', 'Seus pais iam todos os anos a Jerusalém para a festa da Páscoa. Tendo ele atingido doze anos, subiram a Jerusalém, segundo o costume da festa. Acabados os dias da festa, quando voltavam, ficou o menino Jesus em Jerusalém, sem que os seus pais o percebessem... Três dias depois o acharam no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. Todos os que o ouviam estavam maravilhados da sabedoria de suas respostas. (Lc 2, 41-47).', '../../../assets/images/anunciacao.jpg', 1);
            
            
            -- Inserindo dados na tabela oracoes
            INSERT INTO oracoes (title, oracao, tempo) VALUES 
            ('Ave Maria', 'Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois Vós entre as mulheres, bendito é o fruto de Vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém. ', '15 segundos'),
            ('Pai Nosso', 'Pai Nosso, que estais no céu, santificado seja o Vosso Nome, venha a nós o Vosso Reino, seja feita a Vossa Vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tenha ofendido. E não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.', '25 segundos'),
            ('Glória ao Pai', 'Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém. Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem da Vossa misericórdia.', '20 segundos');

    
            INSERT INTO tercosMisteriosOracaoes (tercosMisteriosId, oracoesId) VALUES
            (1, 2), (1, 1), (1, 1), (1, 1), (1, 1), (1, 1), (1, 1), (1, 1), (1, 1), (1, 1), (1, 1), (1, 3),
            (2, 2), (2, 1), (2, 1), (2, 1), (2, 1), (2, 1), (2, 1), (2, 1), (2, 1), (2, 1), (2, 1), (2, 3),
            (3, 2), (3, 1), (3, 1), (3, 1), (3, 1), (3, 1), (3, 1), (3, 1), (3, 1), (3, 1), (3, 1), (3, 3),
            (4, 2), (4, 1), (4, 1), (4, 1), (4, 1), (4, 1), (4, 1), (4, 1), (4, 1), (4, 1), (4, 1), (4, 3),
            (5, 2), (5, 1), (5, 1), (5, 1), (5, 1), (5, 1), (5, 1), (5, 1), (5, 1), (5, 1), (5, 1), (5, 3);
    
        `);

    console.log(
      "Banco de dados, tabelas criadas e dados inseridos com sucesso!"
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchRosarioList = (callback) => {
  db.transaction((txn) => {
    txn.executeSql(
      `SELECT * FROM rosarios`,
      [],
      (txn, result) => {
        let rosarios = [];
        for (let i = 0; i < result.rows.length; i++) {
          rosarios.push(result.rows.item(i));
        }
        console.log("Rosários encontrados:", rosarios);
        callback(rosarios);
      },
      (error) => {
        console.log("Erro ao buscar rosários:", error);
      }
    );
  });
};

export const fetchRosarioDetails = (rosarioId, callback) => {
  db.transaction((txn) => {
    // Passo 1: Buscar os dados do rosário
    txn.executeSql(
      `SELECT * FROM rosarios WHERE id = ?`,
      [rosarioId],
      (txn, rosarioResult) => {
        if (rosarioResult.rows.length > 0) {
          const rosario = rosarioResult.rows.item(0);

          // Passo 2: Buscar os terços relacionados ao rosário
          txn.executeSql(
            `SELECT * FROM tercos WHERE idRosario = ?`,
            [rosarioId],
            (txn, tercoResult) => {
              let tercos = [];
              for (let i = 0; i < tercoResult.rows.length; i++) {
                const terco = tercoResult.rows.item(i);

                // Passo 3: Para cada terço, buscar os mistérios relacionados
                txn.executeSql(
                  `SELECT * FROM tercosMisterios WHERE tercosId = ?`,
                  [terco.id],
                  (txn, misteriosResult) => {
                    let misterios = [];
                    for (let j = 0; j < misteriosResult.rows.length; j++) {
                      const misterio = misteriosResult.rows.item(j);

                      // Passo 4: Para cada mistério, buscar as orações relacionadas
                      txn.executeSql(
                        `SELECT o.id, o.title, o.oracao, o.tempo FROM oracoes o
                           INNER JOIN tercosMisteriosOracoes tmo ON o.id = tmo.oracoesId
                           WHERE tmo.tercosMisteriosId = ?`,
                        [misterio.id],
                        (txn, oracoesResult) => {
                          let oracoes = [];
                          for (let k = 0; k < oracoesResult.rows.length; k++) {
                            oracoes.push(oracoesResult.rows.item(k));
                          }

                          // Anexar as orações ao mistério
                          misterio.oracoes = oracoes;
                          misterios.push(misterio);

                          // Quando todas as orações forem carregadas, anexar ao terço
                          if (j === misteriosResult.rows.length - 1) {
                            terco.misterios = misterios;
                            tercos.push(terco);

                            // Quando todos os terços estiverem prontos, anexar ao rosário
                            if (i === tercoResult.rows.length - 1) {
                              rosario.tercos = tercos;
                              callback(rosario); // Retorna o rosário completo com todos os detalhes
                            }
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      },
      (error) => {
        console.log("Erro ao buscar rosário:", error);
      }
    );
  });
};
