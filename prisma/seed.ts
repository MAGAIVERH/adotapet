import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedDatabase() {
  try {
    const images = [
      'https://img.freepik.com/fotos-premium/fotografia-de-bela-jovem-treinadora-de-fitness_1288657-24579.jpg?w=996',
      'https://img.freepik.com/fotos-gratis/homem-idoso-atletico-mantendo-se-em-forma-praticando-ginastica_23-2150918133.jpg?t=st=1729186137~exp=1729189737~hmac=c5cbf872c420554ac1a0164e5b91e87a15c39c84a51a87fd933a0254185c7380&w=996',
      'https://img.freepik.com/fotos-gratis/homem-jovem-de-esportes-treinando-na-academia_1303-20716.jpg?t=st=1729186164~exp=1729189764~hmac=a6d0743618b4dcc066acf0475add55d6d588cf0e6d18597bc4ed235f71d25653&w=996',
      'https://img.freepik.com/fotos-gratis/vista-da-jogadora-de-futebol-feminina_23-2150888397.jpg?t=st=1729185973~exp=1729189573~hmac=ba17e884af0be9934318cf7ed2d82e721ae4ee0500bd36bd9b487678297f01a2&w=996',
      'https://img.freepik.com/fotos-gratis/homem-esportivo-com-camisa-preta-fechando-os-musculos-do-braco_114579-14242.jpg?t=st=1729186305~exp=1729189905~hmac=d9ba1b09920298b2593e0d88145d8a85d7d636132b21636d3f60ab0941e58df6&w=996',
      'https://img.freepik.com/fotos-gratis/homem-de-negocios-preto-feliz-expressao_1194-2538.jpg?t=st=1729186365~exp=1729189965~hmac=1f49323ba2c4bcb56a0b14b17c7974ac19d76533ca4a4f5c01624e97bbc34b76&w=996',
      'https://img.freepik.com/fotos-gratis/um-homem-bonito-esta-envolvido-em-uma-academia_1157-29459.jpg?t=st=1729186456~exp=1729190056~hmac=e6ae96dd06bf0df3cd133640dbbe01a8c38a16ad27905d7ecffd24be4e6c1e27&w=996',
      'https://img.freepik.com/fotos-gratis/equipamento-de-cor-preta-linda-mulher-loira-na-academia-no-fim-de-semana_146671-17068.jpg?t=st=1729186533~exp=1729190133~hmac=6d1ef47d6d52c1bf5dfc466649d734a3871d8c7a103bbc368b2200589b2acbb6&w=996',
      'https://img.freepik.com/fotos-gratis/homem-em-forma-de-vista-lateral-treinando-na-academia_23-2150290015.jpg?t=st=1729186600~exp=1729190200~hmac=23a756d53a932066d97b2347d686067855a5450633f69ec436692f9d61b29c7b&w=996',
      'https://img.freepik.com/fotos-gratis/mulher-loira-apta-com-um-sorriso-perfeito-em-uma-roupa-esportiva-elegante-olhando-para-a-camera-e-segurando-uma-garrafa-de-agua-sobre-a-parede-branca-demonstre-musculos_273443-4534.jpg?t=st=1729186669~exp=1729190269~hmac=bc46aaaef87769c12226e91075f3499eb5e8fdfe132d1458f2a887923bba53fb&w=996',
    ]
    // Nomes criativos para as PetCenters

    const creativeNames = [
      'Pedro Bomba',
      'Carlos do Vale',
      'Rodrigo paixão',
      'Fernanda Vasconcelos',
      'Ricardo Mendes',
      'João Gomes',
      'Junior Fera',
      'Tatiana Mara',
      'Marcos Aurelio',
      'Taís Amorim',
    ]

    // Endereços fictícios para as PetCenters
    const addresses = [
      'Rua da Barbearia, 123',
      'Avenida dos Cortes, 456',
      'Praça da Barba, 789',
      'Travessa da Navalha, 101',
      'Alameda dos Estilos, 202',
      'Estrada do Machado, 303',
      'Avenida Elegante, 404',
      'Praça da Aparência, 505',
      'Rua Urbana, 606',
      'Avenida Clássica, 707',
    ]

    const services = [
      {
        name: 'Treinamento Funcional',
        description: 'Exercícios dinâmicos para melhorar força e coordenação',
        price: 100.0,
        imageUrl:
          'https://img.freepik.com/fotos-gratis/casal-fazendo-treino-crossfit_23-2149080497.jpg?t=st=1729187587~exp=1729191187~hmac=2ce1bb023d10bf900c0ddc74150e93047aa16ddf1d03654b9cd37c889ccf4645&w=996',
      },
      {
        name: 'Condicionamento Cardiovascular',
        description:
          'Sessões intensas para melhorar a resistência e saúde do coração.',
        price: 80.0,
        imageUrl:
          'https://img.freepik.com/fotos-gratis/close-na-mulher-fazendo-treino-crossfit_23-2149080513.jpg?t=st=1729187942~exp=1729191542~hmac=974e02f1a6d287e7e2ad3552df75e45cc445c2fc94ceaa77db93253d7e7f0e91&w=996',
      },
      {
        name: 'Treino de Força',
        description: 'Programa focado em ganho de massa muscular e força.',
        price: 120.0,
        imageUrl:
          'https://img.freepik.com/fotos-gratis/mulher-com-deficiencia-treinando-na-academia-do-centro-de-reabilitacao_155003-43203.jpg?t=st=1729188036~exp=1729191636~hmac=0f3d9d58536a90ff3ba65ee887e5f322a5efecd6af1f683db91b06bc066116bb&w=996',
      },
      {
        name: 'Treino de Alta Intensidade (HIIT)',
        description:
          'Exercícios rápidos para queimar gordura e melhorar o condicionamento físico.',
        price: 90.0,
        imageUrl:
          'https://img.freepik.com/fotos-gratis/treino-preciso-com-personal-trainer_329181-14156.jpg?t=st=1729188150~exp=1729191750~hmac=0847ac786ffcd97d1e003d65fe25630c26e4e610dded4597942bbb812e835431&w=996',
      },
      {
        name: 'Avaliação Fisica',
        description:
          'Avaliação completa para planejar um treino personalizado.',
        price: 50.0,
        imageUrl:
          'https://img.freepik.com/fotos-gratis/casal-de-vista-lateral-fazendo-exercicios-de-treino_23-2150470963.jpg?t=st=1729187736~exp=1729191336~hmac=158c7eadc106bed4fe6d531d533cd5065877e2b0e4280e1cf36d117d7782eef5&w=996',
      },
    ]

    // Criar 10 barbearias com nomes e endereços fictícios
    const personais = []
    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i]
      const address = addresses[i]
      const imageUrl = images[i]

      const personal = await prisma.personal.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
          phones: ['(11) 99999-9999', '(11) 99999-9999'],
          description:
            'A musculação é muito mais do que apenas levantar pesos — é uma jornada de transformação física e mental. Ao treinar, você fortalece seu corpo, melhora sua saúde e aumenta sua confiança. Cada sessão de treino é uma oportunidade de se desafiar e superar limites, trazendo benefícios como ganho de massa muscular, perda de gordura e aumento de energia. Para atingir seus objetivos de forma eficiente e segura, contar com o suporte de um personal trainer é essencial. Um personal cria treinos personalizados, ajustados às suas necessidades e metas, garantindo que você maximize seus resultados. Com orientação profissional, sua evolução será constante e motivadora. Comece hoje, invista em você e transforme sua vida através da musculação!',
        },
      })

      for (const service of services) {
        await prisma.personalService.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            personal: {
              connect: {
                id: personal.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        })
      }

      personais.push(personal)
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect()
  } catch (error) {
    console.error('Erro ao criar as Personal:', error)
  }
}

seedDatabase()
