const createAndPopulateTables = async (db) => {
  try {
    // Ativa o modo WAL (escreve em logs antes de atualizar o banco)
    await db.execAsync("PRAGMA journal_mode = WAL");

    // Cria as tabelas
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
    
            -- Criando as Tabelas

            DROP TABLE IF EXISTS tercosMisteriosOracaoes;
            DROP TABLE IF EXISTS oracoes;
            DROP TABLE IF EXISTS tercosMisterios;
            DROP TABLE IF EXISTS tercos;
            DROP TABLE IF EXISTS rosarios;
              
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
            tempo TEXT,
            icone TEXT
            );
   
            CREATE TABLE IF NOT EXISTS tercosMisteriosOracaoes (
            id integer PRIMARY KEY NOT NULL,
            tercosMisteriosId INTEGER,
            oracoesId INTEGER,
            FOREIGN KEY (tercosMisteriosId) REFERENCES tercosMisterios(id),
            FOREIGN KEY (oracoesId) REFERENCES oracoes(id)
            );

            -- Limpando Tabelas
            DELETE FROM tercosMisteriosOracaoes;
            DELETE FROM oracoes;
            DELETE FROM tercosMisterios;
            DELETE FROM tercos;
            DELETE FROM rosarios;
            

            -- Inserindo dados
            -- Inserindo dados na tabela rosario
            INSERT INTO rosarios (title, tempo) VALUES ('Rosário de Fátima', '60 minutos');
    
            -- Inserindo dados na tabela tercos
            INSERT INTO tercos (title, tempo, idRosario) VALUES
                ('Oferecimento', '5 minutos', 1),
                ('Mistérios Gozosos', '15 minutos', 1),
                ('Mistérios Luminosos', '15 minutos', 1),
                ('Mistérios Dolorosos', '15 minutos', 1),
                ('Mistérios Gloriosos', '15 minutos', 1),
                ('Agradecimento', '2 minutos', 1);
            
            -- Inserindo dados na tabela tercosMisterios - Oferecimento
            INSERT INTO tercosMisterios (title, descricao, imagem, tercosId) VALUES 
            ('Oferecimento Inicial', 'Divino Jesus, eu vos ofereço este Rosário que vou rezar, contemplando os mistérios de nossa Redenção. Concedei-me, pela intercessão de Maria, vossa Mãe Santíssima, a quem me dirijo, as graças necessárias para bem rezá-lo para ganhar as indulgências desta santa devoção.','../../../assets/images/anunciacao.jpg', 1);

            
            -- Inserindo dados na tabela tercosMisterios - Gozosos
            INSERT INTO tercosMisterios (title, descricao, imagem, tercosId) VALUES 
            ('Primeiro Mistério Gozoso: Anunciação a Maria', 'No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré, a uma virgem desposada com um homem que se chamava José, da casa de Davi e o nome da virgem era Maria. (Lc 1, 26-27).', '../../../assets/images/anunciacao.jpg', 2),
            ('Segundo Mistério Gozoso: Visitação de Nossa Senhora a Isabel', 'Naqueles dias, Maria se levantou e foi às pressas às montanhas, a uma cidade de Judá. Entrou em casa de Zacarias e saudou Isabel. Ora, apenas Isabel ouviu a saudação de Maria, a criança estremeceu no seu seio; e Isabel ficou cheia do Espírito Santo. E exclamou em alta voz: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre." (Lc 1, 39-42).', '../../../assets/images/anunciacao.jpg',2),
            ('Terceiro Mistério Gozoso: Nascimento de Jesus', 'Naqueles tempos apareceu um decreto de César Augusto, ordenando o recenseamento de toda a terra. Este recenseamento foi feito antes do governo de Quirino, na Síria. Todos iam alistar-se, cada um na sua cidade. Também José subiu da Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi, chamada Belém, porque era da casa e família de Davi, para se alistar com a sua esposa Maria, que estava grávida. Estando eles ali, completaram-se os dias dela. E deu à luz seu filho primogênito, e, envolvendo-o em faixas, reclinou-o num presépio; porque não havia lugar para eles na hospedaria. (Lc 2,1-7).', '../../../assets/images/anunciacao.jpg', 2),
            ('Quarto Mistério Gozoso: Apresentação do Menino Jesus no Templo', 'Completados que foram os oito dias para ser circuncidado o menino, foi-lhe posto o nome de Jesus, como lhe tinha chamado o anjo, antes de ser concebido no seio materno. Concluídos os dias da sua purificação segundo a Lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor, conforme o que está escrito na lei do Senhor: Todo primogênito do sexo masculino será consagrado ao Senhor; e para oferecerem o sacrifício prescrito pela lei do Senhor, um par de rolas ou dois pombinhos. (Lc 2, 21-24).', '../../../assets/images/anunciacao.jpg', 2),
            ('Quinto Mistério Gozoso: Perda e encontro do Menino Jesus no Templo', 'Seus pais iam todos os anos a Jerusalém para a festa da Páscoa. Tendo ele atingido doze anos, subiram a Jerusalém, segundo o costume da festa. Acabados os dias da festa, quando voltavam, ficou o menino Jesus em Jerusalém, sem que os seus pais o percebessem... Três dias depois o acharam no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. Todos os que o ouviam estavam maravilhados da sabedoria de suas respostas. (Lc 2, 41-47).', '../../../assets/images/anunciacao.jpg', 2);
            
            -- Inserindo dados na tabela tercosMisterios - Luminosos
            INSERT INTO tercosMisterios (title, descricao, imagem, tercosId) VALUES 
            ('Primeiro Mistério Luminoso: Batismo de Jesus no rio Jordão', 'Depois que Jesus foi batizado, saiu logo da água. Eis que os céus se abriram e viu descer sobre ele, em forma de pomba, o Espírito de Deus. E do céu baixou uma voz: "Eis meu Filho muito amado em quem ponho minha afeição" (Mt 3,16-17).', '../../../assets/images/anunciacao.jpg', 3),
            ('Segundo Mistério Luminoso: Auto-revelação de Jesus nas Bodas de Caná', 'Três dias depois, celebravam-se bodas em Caná da Galiléia, e achava-se ali a mãe de Jesus. Também foram convidados Jesus e os seus discípulos. Como viesse a faltar vinho, a mãe de Jesus disse-lhe: "Eles já não têm vinho". Respondeu-lhe Jesus: "Mulher, isso compete a nós? Minha hora ainda não chegou". Disse, então, sua mãe aos serventes: "Fazei o que ele vos disser". (Jo 2, 1-5)', '../../../assets/images/anunciacao.jpg',3),
            ('Terceiro Mistério Luminoso: Anúncio do Reino de Deus', 'Completou-se o tempo e o Reino de Deus está próximo; fazei penitência e crede no Evangelho. (Mc 1, 15)', '../../../assets/images/anunciacao.jpg', 3),
            ('Quarto Mistério Luminoso: Transfiguração de Jesus', 'Seis dias depois, Jesus tomou consigo Pedro, Tiago e João, seu irmão, e conduziu-os à parte a uma alta montanha.Lá se transfigurou na presença deles: seu rosto brilhou como o sol, suas vestes tornaram-se resplandecentes de brancura (Mt 17, 1-2).', '../../../assets/images/anunciacao.jpg', 3),
            ('Quinto Mistério Luminoso: Instituição da Eucaristia', 'Durante a refeição, Jesus tomou o pão, benzeu-o, partiu-o e o deu aos discípulos, dizendo: "Tomai e comei, isto é meu corpo" (Mt 26, 26).', '../../../assets/images/anunciacao.jpg', 3);
            
            -- Inserindo dados na tabela tercosMisterios - Dolorosos
            INSERT INTO tercosMisterios (title, descricao, imagem, tercosId) VALUES 
            ('Primeiro Mistério Doloroso: Agonia de Jesus no Horto', 'Retirou-se Jesus com eles para um lugar chamado Getsêmani e disse-lhes: "Assentai-vos aqui, enquanto eu vou ali orar". E, tomando consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e a angustiar-se. Disse-lhes, então: "Minha alma está triste até a morte. Ficai aqui e vigiai comigo". Adiantou-se um pouco e, prostrando-se com a face por terra, assim rezou: "Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim o que tu queres" (Mt 26, 36-39).', '../../../assets/images/anunciacao.jpg', 4),
            ('Segundo Mistério Doloroso: Flagelação de Jesus: Auto-revelação de Jesus nas Bodas de Caná', 'Então lhes soltou Barrabás; mas a Jesus mandou açoitar, e o entregou para ser crucificado (Mt 27,26).', '../../../assets/images/anunciacao.jpg',4),
            ('Terceiro Mistério Doloroso: Coroação de Espinhos', 'Os soldados do governador conduziram Jesus para o pretório e rodearam-no com todo o pelotão. Arrancaram-lhe as vestes e colocaram-lhe um manto escarlate. Depois, trançaram uma coroa de espinhos, meteram-lha na cabeça e puseram-lhe na mão uma vara. Dobrando os joelhos diante dele, diziam com escárnio: "Salve, rei dos judeus!" (Mt 27, 27-29).', '../../../assets/images/anunciacao.jpg', 4),
            ('Quarto Mistério Doloroso: Jesus carregando a cruz no caminho do Calvário', 'Passava por ali certo homem de Cirene, chamado Simão, que vinha do campo, pai de Alexandre e de Rufo, e obrigaram-no a que lhe levasse a cruz. Conduziram Jesus ao lugar chamado Gólgota, que quer dizer lugar do crânio (Mc 15, 21-22).', '../../../assets/images/anunciacao.jpg', 4),
            ('Quinto Mistério Doloroso: Crucifixão e morte de Jesus', 'Chegados que foram ao lugar chamado Calvário, ali o crucificaram, como também os ladrões, um à direita e outro à esquerda. E Jesus dizia: "Pai, perdoa-lhes; porque não sabem o que fazem"... Era quase à hora sexta e em toda a terra houve trevas até a hora nona. Escureceu-se o sol e o véu do templo rasgou-se pelo meio. Jesus deu então um grande brado e disse: "Pai, nas tuas mãos entrego o meu espírito". E, dizendo isso, expirou» (Lc  23, 33-46).', '../../../assets/images/anunciacao.jpg', 4);
            
            -- Inserindo dados na tabela tercosMisterios - Gloriosos
            INSERT INTO tercosMisterios (title, descricao, imagem, tercosId) VALUES 
            ('Primeiro Mistério Glorioso: Ressurreição de Jesus', 'No primeiro dia da semana, muito cedo, dirigiram-se ao sepulcro com os aromas que haviam preparado. Acharam a pedra removida longe da abertura do sepulcro. Entraram, mas não encontraram o corpo do Senhor Jesus. Não sabiam elas o que pensar, quando apareceram em frente delas dois personagens com vestes resplandecentes. Como estivessem amedrontadas e voltassem o rosto para o chão, disseram-lhes eles: "Por que buscais entre os mortos aquele que está vivo? Não está aqui, mas ressuscitou" (Lc 24, 1-6).', '../../../assets/images/anunciacao.jpg', 5),
            ('Segundo Mistério Glorioso: Ascensão de Jesus ao Céu', 'Depois que o Senhor Jesus lhes falou, foi levado ao céu e está sentado à direita de Deus (Mc 16, 19).', '../../../assets/images/anunciacao.jpg', 5),
            ('Terceiro Mistério Glorioso: Vinda do Espírito Santo sobre os Apóstolos', 'Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar. De repente, veio do céu um ruído, como se soprasse um vento impetuoso, e encheu toda a casa onde estavam sentados. Apareceu-lhes então uma espécie de línguas de fogo que se repartiram e pousaram sobre cada um deles. Ficaram todos cheios do Espírito Santo e começaram a falar em línguas, conforme o Espírito Santo lhes concedia que falassem (At 2, 1-4).', '../../../assets/images/anunciacao.jpg', 5),
            ('Quarto Mistério Glorioso: Assunção de Maria', 'Por isto, desde agora, me proclamarão bem-aventurada todas as gerações, porque realizou em mim maravilhas aquele que é poderoso e cujo nome é Santo (Lc 1, 48-49).', '../../../assets/images/anunciacao.jpg', 5),
            ('Quinto Mistério Glorioso: Coroação de Maria no Céu', 'Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas (Ap 12, 1).', '../../../assets/images/anunciacao.jpg', 5);
            
            
            -- Inserindo dados na tabela oracoes
            INSERT INTO oracoes (title, oracao, tempo, icone) VALUES 
            ('Ave Maria', 'Ave Maria', '15 segundos', '../../../assets/images/contaAveMaria.png'),
            ('Pai Nosso', 'Pai Nosso', '25 segundos', '../../../assets/images/contaAveMaria.png'),
            ('Glória ao Pai', 'Glória ao Pai', '20 segundos', '../../../assets/images/contaAveMaria.png'),
            ('Salve Rainha', 'Infinitas graças', '55 segundos', '../../../assets/images/contaAveMaria.png'),
            ('Credo Apostólico', 'Creio em Deus Pai Todo-poderoso', '40 segundos', '../../../assets/images/contaAveMaria.png');            

            -- Inserindo dados na tabela tercosMisterios - Agradecimento
            INSERT INTO tercosMisterios (title, descricao, imagem, tercosId) VALUES 
            ('Agradecimento', 'Obrigado Deus por mais um dia!', '/../../../assets/images/anunciacao.jpg', 6);

    
            INSERT INTO tercosMisteriosOracaoes (tercosMisteriosId, oracoesId) VALUES
            (1, 5), (1, 2), (1, 1), (1, 1), (1, 1), (1, 3), 
            (2, 2), (2, 1), (2, 3),
            (3, 2), (3, 1), (3, 3),
            (4, 2), (4, 1), (4, 3),
            (5, 2), (5, 1), (5, 3),
            (6, 2), (6, 1), (6, 3),
            (7, 2), (7, 1), (7, 3),
            (8, 2), (8, 1), (8, 3),
            (9, 2), (9, 1), (9, 3),
            (10, 2), (10, 1), (10, 3),
            (11, 2), (11, 1), (11, 3),
            (12, 2), (12, 1), (12, 3),
            (13, 2), (13, 1), (13, 3),
            (14, 2), (14, 1), (14, 3),
            (15, 2), (15, 1), (15, 3),
            (16, 2), (16, 1), (16, 3),
            (17, 2), (17, 1), (17, 3),
            (18, 2), (18, 1), (18, 3),
            (19, 2), (19, 1), (19, 3),
            (20, 2), (20, 1), (20, 3),
            (21, 2), (21, 1), (21, 3),
            (22, 4);



        `);

    //console.log("Dados inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao criar e popular as tabelas:", error);
  }
};

export default createAndPopulateTables;
