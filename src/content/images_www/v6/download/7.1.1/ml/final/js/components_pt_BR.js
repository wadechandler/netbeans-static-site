add_product_info(
                 "nb-base",
                 "7.1.1.0.0",
                 "IDE de base",
                 "",
                 "Núcleo de componentes de uma ambiente de desenvolvimento integrado.",
                 43114,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-platform-sdk",
                 "7.1.1.0.0",
                 "SDK da plataforma NetBeans",
                 "",
                 "Ferramentas para desenvolvimento de aplicativos modular Swing com base no framework da plataforma NetBeans. Também permite desenvolvimento de plug-ins para NetBeans IDE.",
                 0,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javase",
                 "7.1.1.0.0",
                 "Java SE",
                 "",
                 "Ferramentas essenciais para programação em Java, incluindo um editor, depurador, Profiler, suporte à refatoração e uma ferramenta de desenvolvimento visual arrastar-e-soltar (anteriormente conhecida como Projeto Matisse).",
                 29395,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javafx-mod",
                 "7.1.1.0.0",
                 "Java FX",
                 "",
                 "Comece a desenvolver com o NetBeans IDE e a tecnologia Java FX para construção, visualização e depuração de aplicativos JavaFX.",
                 0,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "glassfish-mod",
                 "3.1.2.23.0",
                 "GlassFish Server Open Source Edition 3.1.2",
                 "",
                 "O GlassFish Server Open Source Edition 3.1.2 é a versão mais recente do GlassFish Application Server, é uma implementação compatível da plataforma Java EE 6 e apresenta uma arquitetura modular, leve e extensível.",
                 48668,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "tomcat",
                 "7.0.22.0.0",
                 "Apache Tomcat 7.0.22",
                 "",
                 "Contêiner da Web de código-fonte aberto para Java Servlet e especificações JSP.",
                 4191,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javaee",
                 "7.1.1.0.0",
                 "Java EE",
                 "",
                 "Ferramentas para criação de aplicativos Java web e corporativos compatíveis com especificações Java EE 6, Java EE 5 e J2EE 1.4 Inclui suporte para servlets, JSPs, bibliotecas de identificadores, Java server Faces, Java Persistence API, Enterprise Java Beans, serviços Web do JAX-WS e do RESTful, Spring e Struts.",
                 43735,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javame",
                 "7.1.1.0.0",
                 "Java ME",
                 "",
                 "Ferramenta para criação de aplicativos Java Micro Edition para telefone celulares e dispositivos portáteis. Inclue desenvolvimento visual, Assistente de conexão de serviços web, e ferramentas para manipulação de problemas de fragmentação de dispositivo.",
                 79139,
                 "windows, linux, macosx-x86, macosx-ppc");

add_product_info(
                 "nb-javacard",
                 "7.1.1.0.0",
                 "Java Card",
                 "",
                 "Conjunto completo de ferramentas para criar servlets Java Card Connected 3, applets estendidos e applets clássicos (compatível com versões anteriores do Java Card 2.2.x e Java Card Classic). Inclui a depuração, a criação de várias plataformas/dispositivos Java Card e trabalha diretamente com a implementação de referência do Java Card publicamente disponível.",
                 6612,
                 "windows");

add_product_info(
                 "nb-cnd",
                 "7.1.1.0.0",
                 "C/C++",
                 "",
                 "Ferramentas para desenvolvimento de aplicações C e C++. Inclue projetos modelo, suporte a projetos existentes, editor avançado, suporte a depuração, e assistente para gerenciamento de configurações.",
                 5164,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-groovy",
                 "7.1.1.0.0",
                 "Groovy",
                 "",
                 "Proporciona suporte para a linguagem Groovy e para as estruturas Grails.",
                 1451,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-php",
                 "7.1.1.0.0",
                 "PHP",
                 "",
                 "Ferramentas para desenvolvimento de aplicativos PHP, incluindo editor PHP e depurador, gerenciamento de projeto, integração com servidor Apache, suporte para MySQL e outros bancos de dados, upload e download FTP, suporte a JavaScript e outros recursos.",
                 2785,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-ergonomics",
                 "7.1.1.0.0",
                 "Recursos sob demanda",
                 "",
                 "Fornece uma resposta aprimorada e uma inicialização mais rápida para ativar os recursos do instalador somente quando são necessários. É o balanceamento perfeito entre a rica funcionalidade e o baixo consumo de memória/CPU. Caso a memória/CPU não seja um recurso limitado em sua máquina, sinta-se a vontade para desativar este item e obter de uma só vez toda a funcionalidade do NetBeans IDE.",
                 602,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");


add_group_info(
               "nb-base, nb-platform-sdk, nb-javase, nb-javafx-mod, nb-javaee, nb-javame, nb-javacard, nb-cnd, nb-groovy, nb-php, nb-ergonomics",
               "",
               "");

add_group_info(
               "glassfish-mod, tomcat",
               "Tempos de execução",
               "Contém tempos de execução a serem instalados.");


add_bundle_info("cpp", "nb-base, nb-cnd");
add_bundle_info("javaee", "nb-base, nb-javase, nb-platform-sdk, nb-javafx-mod, nb-javaee, glassfish-mod, tomcat");
add_bundle_info("all", "nb-base, nb-javase, nb-platform-sdk, nb-javafx-mod, nb-javaee, nb-javacard, nb-javame, nb-cnd, nb-groovy, nb-php, nb-ergonomics, glassfish-mod, tomcat");
add_bundle_info("hidden", "nb-base, nb-ergonomics, nb-javafx, nb-ruby");
add_bundle_info("javase", "nb-base, nb-javase, nb-platform-sdk, nb-javafx-mod");
add_bundle_info("php", "nb-base, nb-php");
