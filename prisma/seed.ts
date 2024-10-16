import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const images = [
      "https://img.freepik.com/fotos-gratis/alto-angulo-cuidadoso-medicos-ajudando-cao-doente_23-2148302253.jpg?t=st=1729099591~exp=1729103191~hmac=1cfc2c8226827e8a83e4bfd44bde616273eac6c0eed76bf7d7375a79e6752438&w=996",
      "https://img.freepik.com/fotos-gratis/close-no-veterinario-cuidando-do-animal-de-estimacao_23-2149143885.jpg?t=st=1729099645~exp=1729103245~hmac=b36074281ee7b80a9d7b307f086c4ab3c5f4ae2e2806b65a6c7cdf3c8eadc037&w=996",
      "https://img.freepik.com/fotos-gratis/feche-o-medico-verificando-o-cachorro-fofo_23-2149271862.jpg?t=st=1729099702~exp=1729103302~hmac=0c46de99dd364f07367b14076e101d8847617032d988a48e301696aa560d47c2&w=996",
      "https://img.freepik.com/fotos-gratis/close-no-veterinario-cuidando-do-animal-de-estimacao_23-2149143893.jpg?t=st=1729099752~exp=1729103352~hmac=b83b49cace59404e0b8a3eb516cf6fc8093bfca391ddfee9a1b183663bfd7c6d&w=996",
      "https://img.freepik.com/fotos-gratis/veterinario-de-tiro-medio-ajudando-gato_23-2149304270.jpg?t=st=1729099778~exp=1729103378~hmac=d26c5dd162ff92da2efeb333ba625f397c416e17d6d2db883d87e93d77262e8e&w=996",
      "https://img.freepik.com/fotos-gratis/close-no-veterinario-cuidando-do-animal-de-estimacao_23-2149143906.jpg?t=st=1729099805~exp=1729103405~hmac=e333700ceebedb41252bf9b5a6a6c4bf7138813535def64696727e1abbcafdda&w=996",
      "https://img.freepik.com/fotos-gratis/feche-o-homem-e-a-mulher-com-gato_23-2149304290.jpg?t=st=1729099835~exp=1729103435~hmac=f52bf0bffe72994a20b6d6e789323aa4ae3130458ecaa048b02f2a2e434ea7d1&w=996",
      "https://img.freepik.com/fotos-gratis/buceta-marrom-apos-a-cirurgia-injecao-para-um-animal-veterinario-de-luvas-com-uma-injecao_1157-46562.jpg?t=st=1729099870~exp=1729103470~hmac=1d7d84e265cbec6899f37f95f82821d4bb5382b05bcb9005761fd266e6a8815d&w=996",
      "https://img.freepik.com/fotos-gratis/medico-carregando-um-cachorrinho-cinza_329181-10394.jpg?t=st=1729099953~exp=1729103553~hmac=31e83a5f6cfae5ee2dcc53bf47f469df0fd8b1b568ab1f3eaaae7ff7c47a7432&w=996",
      "https://img.freepik.com/fotos-gratis/uma-menina-bonita-esta-brincando-com-um-coelho-de-estimacao-conceito-de-animais-de-estimacao_169016-61322.jpg?t=st=1729099976~exp=1729103576~hmac=cb84aabe46de6118fb43d29a22057563ac02bb7579968967c4c959fb27d44248&w=996",
      "https://img.freepik.com/fotos-gratis/veterinario-de-mulher-esta-verificando-a-saude-do-coelho-branco_144627-15474.jpg?t=st=1729100005~exp=1729103605~hmac=19eef0c163693c84b82a3fd8d97382706d27d35b5af4d8c318635761c2063df6&w=996",
      "https://img.freepik.com/fotos-gratis/lindo-retrato-de-animal-de-estimacao_23-2149152098.jpg?t=st=1729100038~exp=1729103638~hmac=0af90053283a864d2014f0edc10cb3b812d44b96ce28bc4ea00c76a2d0b21b63&w=996",
      "https://img.freepik.com/fotos-premium/veterinario-examinando-uma-tartaruga-com-maos-gentis-cuidados-com-animais-de-estimacao-bem-estar-animal-exame-de-repteis-medicina-veterinaria_923559-17243.jpg?w=900",
      "https://img.freepik.com/fotos-premium/veterinario-examinando-um-animal-de-estimacao-em-fotografia-documental-cinematografica_976492-110413.jpg?w=1060",
      "https://img.freepik.com/fotos-premium/veterinario-examinando-um-animal-de-estimacao-em-fotografia-documental-cinematografica_976492-110411.jpg?w=1060",
      "https://img.freepik.com/fotos-premium/um-veterinario-segura-um-lagarto-em-luvas-azuis-enquanto-sorri-para-a-camera_14117-920256.jpg?w=900",
      "https://img.freepik.com/fotos-premium/um-lagarto-sendo-segurado-por-uma-pessoa-com-luvas-em-suas-maos_976492-95118.jpg?w=1060",
      "https://img.freepik.com/fotos-premium/retrato-de-um-veterinario-sorridente-de-pe-em-uma-loja-de-animais-colorida-cheia-de-tanques-de-aquario-e-uma-variedade-de-experiencia-em-oferta-de-peixes-e-assistencia-aos-clientes_924727-29765.jpg?w=900",
      "https://img.freepik.com/fotos-gratis/close-up-de-um-pescador-passe-com-peixe-fresco_23-2147894199.jpg?t=st=1729100442~exp=1729104042~hmac=47e8e2dfb01772bad9b7a0ad538b359b42450dfc958aef1dead52657cf4789fe&w=996",
      "https://img.freepik.com/fotos-premium/loja-de-animais-de-estimacao-especializada-em-tanques-de-peixes-terrarios-e-suprimentos-para-animais-conceito-suprimentos-para-aquario-cuidados-com-repteis-animais-de-estimacao-exoticos-manutencao-de-tanques-de-pesca-acessorios-para-terrario_864588-223843.jpg?w=900",
      "https://img.freepik.com/fotos-premium/close-up-de-um-gato-segurando-a-mao_1048944-4570112.jpg?w=996",
    ];
    // Nomes criativos para as PetCenters
    
    const creativeNames = [
      "Coração Animal",
      "Patas que Cuidam",
      "Abrace um Amigo",
      "Lar de Patas",
      "Peludos do Bem",
      "Amor de Pata",
      "Refúgio Animal",
      "Patinhas Acolhidas",
      "Pelos e Lares",
      "Resgate com Amor",
    ];

    // Endereços fictícios para as PetCenters
    const addresses = [
      "Rua da Barbearia, 123",
      "Avenida dos Cortes, 456",
      "Praça da Barba, 789",
      "Travessa da Navalha, 101",
      "Alameda dos Estilos, 202",
      "Estrada do Machado, 303",
      "Avenida Elegante, 404",
      "Praça da Aparência, 505",
      "Rua Urbana, 606",
      "Avenida Clássica, 707",
    ];

    const services = [
      {
        name: "Rex",
        description: "Rex é um cão de 2 anos, muito enérgico e brincalhão. Ele adora correr e brincar ao ar livre, sendo perfeito para uma família que gosta de atividades ao ar livre. Rex é leal e carinhoso.",
        price: 60.0,
        imageUrl:
          "https://img.freepik.com/psd-gratuitas/retrato-de-solo-adoravel-cachorro-beagle_53876-73998.jpg?t=st=1729101598~exp=1729105198~hmac=0b53e96dceb742c5e9eeda93e274c4b7e1db1ddbae8d559aac0e01aea7f3796b&w=740",
      },
      {
        name: "Luna",
        description: "Luna é uma gata de 3 anos, calma e afetuosa. Ela adora passar o dia deitada ao sol e é ideal para quem procura uma companhia tranquila e carinhosa. Luna se dá bem com outros gatos.",
        price: 40.0,
        imageUrl:
          "https://img.freepik.com/fotos-gratis/close-vertical-de-um-lindo-gato-europeu-de-pelo-curto_181624-34587.jpg?t=st=1729101707~exp=1729105307~hmac=836aada749a85ef9d41cd55343d4c9a1c13be414c80c4b2b7fd564fe0fcc498a&w=740",
      },
      {
        name: "Spike",
        description: "Spike é uma iguana de 2 anos que gosta de se aquecer ao sol e explorar ambientes naturais. Ele é muito tranquilo e precisa de um espaço bem estruturado com bastante luz e plantas.",
        price: 35.0,
        imageUrl:
          "https://img.freepik.com/fotos-gratis/iguana-de-perto-na-natureza_23-2151718836.jpg?t=st=1729101796~exp=1729105396~hmac=f136960636542c3eacb9b415d65bc83169cbb7830d0e848eb18b5b613fc8af84&w=740",
      },
      {
        name: "Donatelo",
        description: "Tartaruga é uma tartaruga aquática de 5 anos que adora nadar e descansar em pedras. Ela é fácil de cuidar e requer um aquário com água limpa e uma área para tomar sol. Perfeita para iniciantes.",
        price: 20.0,
        imageUrl:
          "https://img.freepik.com/fotos-gratis/tartaruga-fofa-na-floresta_23-2150537341.jpg?t=st=1729102003~exp=1729105603~hmac=9a3d0e251824a286dc3c8c36e951330db552078c855ad44eda361fbfcfb29a03&w=740",
      },
      {
        name: "Jerry",
        description: "Jerry é um ratinho de 1 ano, muito inteligente e curioso. Ele gosta de brincar com objetos pequenos e interagir com seu dono. Ideal para quem procura um animal divertido e de fácil manutenção.",
        price: 50.0,
        imageUrl:
          "https://img.freepik.com/fotos-gratis/vista-de-um-rato-bonito-em-um-cobertor_23-2150762664.jpg?t=st=1729102078~exp=1729105678~hmac=26105445b82c54eb5ed454abf990941a5c8512a10b60fdfa829f55e2104c13fb&w=740",
      },
      {
        name: "Goldie",
        description: "Goldie é um peixe dourado de 8 meses, muito ativo e colorido. Ele é fácil de cuidar e trará um toque de vida para qualquer aquário. Apenas requer um ambiente limpo e filtrado.",
        price: 25.0,
        imageUrl:
          "https://img.freepik.com/fotos-gratis/meia-lua-betta-fish_1150-7896.jpg?t=st=1729102254~exp=1729105854~hmac=7e5b5449f7e7bbb44e80694368f7505b6e1a879969f049593995c99e5d6a9468&w=740",
      },
      {
        name: "Thor",
        description: "Thor é um pastor alemão de 4 anos, muito leal e protetor. Ele é ideal para quem busca um cão de guarda, mas também adora brincar e correr ao ar livre. Thor precisa de bastante espaço e atenção.",
        price: 25.0,
        imageUrl:
          "https://img.freepik.com/fotos-gratis/campeao-pastor-alemao-senta-se-na-grama-com-medalhas-de-ouro-ao-por-do-sol_8353-6410.jpg?t=st=1729102319~exp=1729105919~hmac=ba6871b3e23519f13645eaa7581aaf015e69c619a35221e5840c5f1d9afd1e62&w=740",
      },
      {
        name: "Misty",
        description: "Misty é uma gata de 2 anos, muito curiosa e cheia de energia. Ela adora escalar e brincar com brinquedos. Misty se dá bem com outros animais e é ótima para quem busca uma gatinha ativa.",
        price: 25.0,
        imageUrl:
          "https://img.freepik.com/fotos-gratis/adoravel-gatinho-branco-e-preto-com-parede-monocromatica-atras-dela_23-2148955171.jpg?t=st=1729102408~exp=1729106008~hmac=4930d7389ff39fa333a6d58c841997de5496337e78b4533297f84e562f0eaac5&w=740",
      },
      {
        name: "Leo",
        description: "Leo é um lagarto Gecko de 3 anos, famoso por suas cores vibrantes e comportamento tranquilo. Ele adora ficar em locais aquecidos e é perfeito para quem deseja um animal exótico fácil de cuidar.",
        price: 25.0,
        imageUrl:
          "https://img.freepik.com/fotos-premium/madeira-de-geco-leopardo-em-close-up_1311477-124240.jpg?w=360",
      },
      {
        name: "Shelly",
        description: "Hidratação profunda para cabelo e barba.",
        price: 25.0,
        imageUrl:
          "https://img.freepik.com/fotos-gratis/bebes-tartarugas-se-movendo-em-direcao-ao-oceano_167946-163.jpg?t=st=1729102624~exp=1729106224~hmac=ab54d1bfa140269b1ebb24f97af02075ccf59574b4ed384cd3be0eeb83353a99&w=740",
      },
    ];

    // Criar 10 barbearias com nomes e endereços fictícios
    const petcenters = [];
    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i];
      const address = addresses[i];
      const imageUrl = images[i];

      const petcenter = await prisma.petcenters.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
          phones: ["(11) 99999-9999", "(11) 99999-9999"],
          description:
            "A adoção de animais é uma atitude nobre que transforma vidas. Milhares de cães, gatos e outros animais estão à espera de um lar amoroso. Ao adotar, você oferece uma segunda chance a um animal que muitas vezes sofreu abandono ou maus-tratos. Além disso, adotar é uma forma de combater a criação irresponsável e reduzir o número de animais nas ruas. Cada adoção é única, e os lares adotivos recebem em troca a lealdade e o amor incondicional. Ao escolher adotar, você salva uma vida e abre espaço para que mais animais sejam resgatados. A adoção consciente envolve carinho, paciência e compromisso. Se você está preparado para oferecer um lar seguro e acolhedor, considere a adoção como a sua próxima grande decisão.",
        },
      });

      for (const service of services) {
        await prisma.petcentersService.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            petcenters: {
              connect: {
                id: petcenter.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        });
      }

      petcenters.push(petcenter);
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar as Petcenters:", error);
  }
}

seedDatabase();