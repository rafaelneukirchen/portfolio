import i18n from "./i18n";

export interface careerProjectsProps {
  company: string;
  name: string;
  text: string;
  image: string;
  competences: string[];
  year: number;
  tags?: string[];
}

export let careerProjects: careerProjectsProps[];

const careerProjectsPt: careerProjectsProps[] = [
  {
    company: "Freelancer",
    name: "CRM7",
    text: "Atualmente trabalho na CRM7 como Product Owner. Iniciei minha jornada na equipe como desenvolvedor backend e, desde o início, me interessei pelo trabalho com pessoas. Nas primeiras reuniões, percebi que tinha aptidão para entender as necessidades dos clientes e facilidade em transformar essas demandas em soluções inteligentes. No meu quinto mês, tornei-me Product Owner de um dos principais projetos da empresa, assumindo a responsabilidade pela garantia da qualidade dos serviços e das entregas.",
    image: "./crm7.webp",
    competences: [
      "ZOHO",
      "WordPress",
      "NodeJS",
      "Git",
      "Yoast SEO",
      "Axios",
      "Git",
      "HTML5",
    ],
    year: 2024,
  },
  {
    company: "Freelancer",
    name: "Holy Moly Pizza",
    text: "Trabalho atualmente para a empresa Holy Moly Pizza como desenvolvedor Wordpress. A Holy Moly Pizza é uma empresa holandesa que atua no ramo de alimentação e delivery Express de pizzas. Durante minha experiência na empresa, tive a oportunidade de trabalhar como desenvolvedor na construção do seu site. Além disso, toda a comunicação no projeto foi feita completamente em inglês, o que me proporcionou aprimorar minha fluência no idioma.",
    image: "./holymoly.webp",
    competences: ["PHP", "WordPress", "HTML5", "Git", "Yoast SEO", "Photoshop"],
    year: 2023,
  },
  {
    company: "Freelancer",
    name: "Gardini Barbearia",
    text: "Trabalhar como desenvolvedor para uma barbearia com horário marcado, como a Barbearia Gardini, pode ser uma oportunidade interessante para quem busca desafios em um ambiente descontraído e inovador. Como desenvolvedor, é possível contribuir para o desenvolvimento de soluções tecnológicas que facilitem a marcação de horários e agendamentos, além de garantir a segurança dos dados dos clientes. A Barbearia Gardini é uma empresa moderna, que preza pelo atendimento personalizado e de qualidade, oferecendo serviços de barbearia, cortes de cabelo, entre outros. A equipe é formada por profissionais qualificados e experientes, que buscam oferecer a melhor experiência para os clientes, e valorizam a inovação e a tecnologia como meio de melhorar e simplificar processos.",
    image: "./gardini.webp",
    competences: [
      "ReactJS",
      "Typescript",
      "Styled Components",
      "NodeJS",
      "Express",
      "Axios",
      "Git",
    ],
    year: 2023,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Beto Carrero",
    text: "Trabalhar em um projeto como o Beto Carrero é uma oportunidade emocionante para aqueles que buscam uma carreira no setor de entretenimento. O Beto Carrero World é um dos maiores parques temáticos da América Latina e oferece uma ampla variedade de atrações, desde montanhas-russas até shows ao vivo. Participar de um projeto como este permite que os colaboradores adquiram habilidades valiosas em uma indústria de rápido crescimento, além de trabalhar em um ambiente divertido e descontraído. O parque oferece várias oportunidades de emprego, desde atendimento ao cliente até cargos técnicos e administrativos.",
    image: "./beto_carrero.webp",
    competences: ["PHP", "HTML5", "SASS", "Git"],
    year: 2022,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Oceanic Aquarium",
    text: "Trabalhar em um projeto como o Oceanic Aquarium em Balneário Camboriú é uma oportunidade única para aqueles que têm interesse em aprender mais sobre a vida marinha e trabalhar em um ambiente incrível. O aquário é um dos maiores e mais modernos da América Latina e conta com diversas espécies marinhas de todo o mundo. Participar de um projeto como este permite que os colaboradores adquiram habilidades valiosas em uma indústria que tem crescido muito nos últimos anos, além de trabalhar em um ambiente educativo e de grande beleza natural. O aquário oferece diversas oportunidades de emprego, desde guias turísticos até biólogos e veterinários especializados em animais marinhos.",
    image: "./oceanic_aquarium.webp",
    competences: [
      "ReactJS",
      "NextJS",
      "Styled Components",
      "Typescript",
      "SEO",
      "Axios",
      "Git",
    ],
    year: 2022,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Allog",
    text: "Conectar negócios e oportunidades através da logística internacional demanda conhecimento, experiência e uma equipe comprometida. Com unidades em diferentes pontos do país, o Grupo Allog opera em diversos segmentos para trazer confiabilidade e segurança ao transporte de cargas.",
    image: "./allog.webp",
    competences: [
      "WordPress",
      "PHP",
      "Pixel",
      "Yoast SEO",
      "Elementor",
      "Recaptcha",
    ],
    year: 2022,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Imobille",
    text: "Trabalhar como desenvolvedor em um projeto como Imobille, é uma oportunidade empolgante para aqueles que desejam trabalhar no desenvolvimento de soluções tecnológicas para um mercado em constante evolução. Imobille é uma plataforma online de imóveis que oferece diversas ferramentas para auxiliar compradores e vendedores a fechar negócios de maneira ágil e eficiente. Participar de um projeto como este permite que os desenvolvedores trabalhem em equipe para criar soluções tecnológicas avançadas que tornam a experiência do usuário mais fácil, intuitiva e personalizada. A equipe de desenvolvimento da Imobille é formada por profissionais talentosos e comprometidos em fornecer soluções tecnológicas de alta qualidade para a plataforma e seus usuários.",
    image: "./imobille.webp",
    competences: [
      "ReactJS",
      "NextJS",
      "SEO",
      "Typescript",
      "Context API",
      "Git",
    ],
    year: 2022,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Portal do Beneficiário / Unimed Blumenau",
    text: "Trabalhar como desenvolvedor frontend no projeto Unimed Blumenau é uma oportunidade emocionante para aqueles que desejam desenvolver suas habilidades em tecnologia e trabalhar em um ambiente inovador. A Unimed Blumenau é uma cooperativa médica que oferece serviços de saúde para a região de Blumenau, em Santa Catarina. Participar de um projeto como este permite que os desenvolvedores frontend trabalhem em equipe para criar soluções inovadoras que tornam a experiência do usuário mais fácil e agradável. A equipe é formada por profissionais talentosos e motivados que estão comprometidos em fornecer soluções tecnológicas de alta qualidade para a Unimed Blumenau e seus clientes. O projeto oferece diversas oportunidades para o desenvolvimento de carreira e aprimoramento das habilidades em tecnologia.",
    image: "./unimed_blumenau.webp",
    competences: [
      "ReactJS",
      "Typescript",
      "Styled Components",
      "Git",
      "Axios",
      "SEO",
    ],
    year: 2021,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Planet Smart City",
    text: "Trabalhar em um projeto como o Planet Smart City é uma oportunidade única de contribuir para um mundo melhor. A missão da empresa é fornecer soluções inteligentes e sustentáveis para as cidades, com o objetivo de torná-las mais habitáveis, acessíveis e sustentáveis. Isso é feito por meio da implementação de tecnologias inovadoras e práticas de construção sustentáveis em projetos residenciais e comerciais em todo o mundo. Participar de um projeto como esse permite que os colaboradores possam fazer a diferença no mundo, não apenas através de sua experiência e habilidades, mas também como cidadãos responsáveis. O Planet Smart City é um ambiente de trabalho multicultural e inovador que promove o trabalho em equipe e a colaboração, proporcionando um ambiente dinâmico e desafiador.",
    image: "./planet_smart_city.webp",
    competences: ["PHP", "Mustache", "WordPress", "SASS", "SEO"],
    year: 2021,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Chocobronze",
    text: "Tive a oportunidade de participar do projeto Chocobronze, um e-commerce de produtos dermocosméticos e protetores solares. Trabalhar como desenvolvedor para este tipo de empresa é muito positivo, pois empresas deste segmento investem muito em tecnologia para a criação de novas fórmulas e na melhoria da qualidade de seus produtos, o que resulta em uma grande oportunidade para profissionais de desenvolvimento.",
    image: "./chocobronze.webp",
    competences: ["WordPress", "PHP", "Pixel", "Yoast SEO", "Elementor"],
    year: 2021,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Mohala",
    text: "Trabalhar como desenvolvedor em um projeto de comércio eletrônico, como o Mohala, pode ser uma excelente oportunidade para quem busca desenvolver soluções tecnológicas inovadoras em uma das áreas que mais crescem atualmente. A Mohala é uma loja virtual de roupas femininas que tem como diferencial a oferta de peças exclusivas e de qualidade, com uma experiência de compra personalizada e simplificada. Como desenvolvedor, é possível contribuir para a melhoria da plataforma, criando soluções tecnológicas inovadoras que aumentem a eficiência e a usabilidade do site, além de garantir a segurança dos dados dos clientes. A equipe da Mohala é formada por profissionais dedicados e comprometidos em oferecer a melhor experiência de compra para os clientes, com foco em inovação e qualidade.",
    image: "./mohala.webp",
    competences: [
      "WordPress",
      "PHP",
      "Google API",
      "Instagram API",
      "Pixel",
      "Yoast SEO",
      "Elementor",
    ],
    year: 2020,
  },
];

const careerProjectsEn: careerProjectsProps[] = [
  {
    company: "Freelance",
    name: "CRM7",
    text: "I currently work at CRM7 as a Product Owner. I started my journey on the team as a backend developer and, from the beginning, I was interested in working with people. In the first meetings, he realized that he was required to understand customer needs and be able to transform these demands into intelligent solutions. In my fifth month, I became Product Owner of one of the company's main projects, taking responsibility for ensuring the quality of services and deliveries.",
    image: "./holymoly.webp",
    competences: [
      "ZOHO",
      "WordPress",
      "NodeJS",
      "Git",
      "Yoast SEO",
      "Axios",
      "Git",
      "HTML5",
    ],
    year: 2024,
  },
  {
    company: "Freelance",
    name: "Holy Moly Pizza",
    text: "I've worked for the company Holy Moly Pizza as a Full Wordpress developer. Holy Moly Pizza is a Dutch company that operates in the field of food and express delivery of pizzas. During my experience at the company, I had the opportunity to work as a developer on the construction of their website. In addition, all communication in the project was done completely in English, which allowed me to improve my fluency in the language.",
    image: "./holymoly.webp",
    competences: ["PHP", "WordPress", "HTML5", "Git", "Yoast SEO", "Photoshop"],
    year: 2023,
  },
  {
    company: "Freelance",
    name: "Gardini Barber Shop",
    text: "Working as a developer for a barbershop by appointment, like Gardini Barber Shop, can be an interesting opportunity for anyone looking for challenges in a relaxed and innovative environment. As a developer, it is possible to contribute to the development of technological solutions that facilitate appointments and appointments, in addition to ensuring the security of customer data. Barbearia Gardini is a modern company that values ​​personalized and quality service, offering barbershop services, haircuts, among others. The team is made up of qualified and experienced professionals, who seek to offer the best experience to customers, and value innovation and technology as a means of improving and simplifying processes.",
    image: "./gardini.webp",
    competences: [
      "ReactJS",
      "Typescript",
      "Styled Components",
      "NodeJS",
      "Express",
      "Axios",
      "Git",
    ],
    year: 2023,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Beto Carrero",
    text: "Working on a project like Beto Carrero is an exciting opportunity for those seeking a career in the entertainment industry. Beto Carrero World is one of the largest theme parks in Latin America and offers a wide variety of attractions, from roller coasters to live shows. Participating in a project like this allows employees to acquire valuable skills in a fast-growing industry, as well as working in a fun and relaxed environment. The park offers several job opportunities, from customer service to technical and administrative positions.",
    image: "./beto_carrero.webp",
    competences: ["PHP", "HTML5", "SASS", "Git"],
    year: 2022,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Oceanic Aquarium",
    text: "Working on a project like the Oceanic Aquarium in Balneário Camboriú is a unique opportunity for those who are interested in learning more about marine life and working in an amazing environment. The aquarium is one of the largest and most modern in Latin America and has several marine species from around the world. Participating in a project like this allows employees to acquire valuable skills in an industry that has grown a lot in recent years, in addition to working in an educational environment of great natural beauty. The aquarium offers several job opportunities, from tour guides to biologists and veterinarians specializing in marine animals.",
    image: "./oceanic_aquarium.webp",
    competences: [
      "ReactJS",
      "NextJS",
      "Styled Components",
      "Typescript",
      "SEO",
      "Axios",
      "Git",
    ],
    year: 2022,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Allog",
    text: "Connecting business and opportunities through international logistics demands knowledge, experience and a committed team. With units in different parts of the country, Allog Group operates in several segments to bring reliability and safety to cargo transportation.",
    image: "./allog.webp",
    competences: [
      "WordPress",
      "PHP",
      "Pixel",
      "Yoast SEO",
      "Elementor",
      "Recaptcha",
    ],
    year: 2022,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Imobille",
    text: "Working as a developer on a project like Imobille is an exciting opportunity for those who want to work on developing technological solutions for a constantly evolving market. Imobille is an online real estate platform that offers several tools to help buyers and sellers close deals quickly and efficiently. Participating in a project like this allows developers to work together to create advanced technological solutions that make the user experience easier, more intuitive and personalized. Imobille's development team is made up of talented professionals committed to providing high quality technological solutions for the platform and its users.",
    image: "./imobille.webp",
    competences: [
      "ReactJS",
      "NextJS",
      "SEO",
      "Typescript",
      "Context API",
      "Git",
    ],
    year: 2022,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Portal do Beneficiário / Unimed Blumenau",
    text: "Working as a frontend developer on the Unimed Blumenau project is an exciting opportunity for those who want to develop their technology skills and work in an innovative environment. Unimed Blumenau is a medical cooperative that offers health services in the region of Blumenau, in Santa Catarina. Participating in a project like this allows frontend developers to work together to create innovative solutions that make the user experience easier and more enjoyable. The team is made up of talented and motivated professionals who are committed to providing high quality technological solutions for Unimed Blumenau and its customers. The project offers a variety of opportunities for career development and technology skills enhancement.",
    image: "./unimed_blumenau.webp",
    competences: [
      "ReactJS",
      "Typescript",
      "Styled Components",
      "Git",
      "Axios",
      "SEO",
    ],
    year: 2021,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Planet Smart City",
    text: "Working on a project like Planet Smart City is a unique opportunity to contribute to a better world. The company's mission is to provide smart and sustainable solutions for cities, with the aim of making them more livable, accessible and sustainable. This is done through the implementation of innovative technologies and sustainable building practices in residential and commercial projects around the world. Participating in a project like this allows employees to make a difference in the world, not only through their experience and skills, but also as responsible citizens. Planet Smart City is a multicultural and innovative work environment that promotes teamwork and collaboration, providing a dynamic and challenging environment.",
    image: "./planet_smart_city.webp",
    competences: ["PHP", "Mustache", "WordPress", "SASS", "SEO"],
    year: 2021,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Chocobronze",
    text: "I had the opportunity to participate in the Chocobronze project, an e-commerce for dermocosmetics and sunscreen products. Working as a developer for this type of company is very positive, as companies in this segment invest a lot in technology to create new formulas and improve the quality of their products, which results in a great opportunity for development professionals.",
    image: "./chocobronze.webp",
    competences: ["WordPress", "PHP", "Pixel", "Yoast SEO", "Elementor"],
    year: 2021,
  },
  {
    company: "GrupoW | Softwares para internet",
    name: "Mohala",
    text: "Working as a developer on an e-commerce project such as Mohala can be an excellent opportunity for anyone looking to develop innovative technological solutions in one of the fastest growing areas today. Mohala is a virtual women's clothing store whose differential is the offer of exclusive and quality pieces, with a personalized and simplified shopping experience. As a developer, it is possible to contribute to the improvement of the platform, creating innovative technological solutions that increase the efficiency and usability of the site, in addition to ensuring the security of customer data. Mohala's team is made up of dedicated professionals committed to offering the best shopping experience to customers, focusing on innovation and quality.",
    image: "./mohala.webp",
    competences: [
      "WordPress",
      "PHP",
      "Google API",
      "Instagram API",
      "Pixel",
      "Yoast SEO",
      "Elementor",
    ],
    year: 2020,
  },
];

switch (i18n.language) {
  case "pt-BR":
    careerProjects = careerProjectsPt;
    break;
  default:
    careerProjects = careerProjectsEn;
    break;
}
