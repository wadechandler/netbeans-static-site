add_product_info(
                 "nb-base",
                 "6.8.0.0.0",
                 "IDE de base",
                 "",
                 "Núcleo de componentes de uma ambiente de desenvolvimento integrado.",
                 22119,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javase",
                 "6.8.0.0.0",
                 "Java SE",
                 "",
                 "Ferramentas essenciais para programação em Java, incluindo um editor, depurador, Profiler, suporte à refatoração e uma ferramenta de desenvolvimento visual arrastar-e-soltar (anteriormente conhecida como Projeto Matisse).",
                 24409,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-platform-sdk",
                 "6.8.0.0.0",
                 "NetBeans Platform SDK",
                 "",
                 "Tools for developing modular Swing applications based on NetBeans Platform framework. Enables also development of plugins for NetBeans IDE.",
                 0,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "glassfish-mod-sun",
                 "3.0.0.74.2",
                 "Sun GlassFish Enterprise Server v3",
                 "",
                 "O Sun GlassFish Enterprise Server v3 é uma oferta com suporte comercial para o GlassFish v3 , uma plataforma leve de desenvolvimento e implementação para o Java e para aplicativos de linguagem dinâmica como o Ruby. Você pode usar o Sun GlassFish Enterprise Server v3 no estado atual de graça, ou se tornar um assinante para obter o suporte, correções e ferramentas para  observar e aprimorar o desempenho, e mais.",
                 50829,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "tomcat",
                 "6.0.20.0.0",
                 "Apache Tomcat 6.0.20",
                 "",
                 "Contêiner da Web de código-fonte aberto para Java Servlet e especificações JSP.",
                 3293,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javafx",
                 "6.8.0.0.0",
                 "JavaFX",
                 "",
                 "Comece a desenvolver com o NetBeans IDE e a tecnologia Java FX para construção, visualização e depuração de aplicativos JavaFX.",
                 48316,
                 "windows, linux, solaris-x86, macosx-x86, macosx-ppc");

add_product_info(
                 "nb-javaee",
                 "6.8.0.0.0",
                 "Java Web e EE",
                 "",
                 "Ferramentas para criação de aplicativos Java web e corporativos compatíveis com especificações Java EE 6, Java EE 5 e J2EE 1.4 Inclui suporte para servlets, JSPs, bibliotecas de identificadores, Java server Faces, Java Persistence API, Enterprise Java Beans, serviços Web do JAX-WS e do RESTful, Spring e Struts.",
                 45804,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javame",
                 "6.8.0.0.0",
                 "Java ME",
                 "",
                 "Ferramenta para criação de aplicativos Java Micro Edition para telefone celulares e dispositivos portáteis. Inclue desenvolvimento visual, Assistente de conexão de serviços web, e ferramentas para manipulação de problemas de fragmentação de dispositivo.",
                 72895,
                 "windows, linux");

add_product_info(
                 "nb-ruby",
                 "6.8.0.0.0",
                 "Ruby",
                 "",
                 "Ferramenta completa para a criação de aplicativos Ruby e Ruby on Rail. inclue interpretador JRuby, framework Ruby on Rails, super editor, depurador, gerenciador, e interatividade do Ruby com shell. Suporta fácil criação, modificação, e execução de aplicativos Ruby on Rails.",
                 19970,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-cnd",
                 "6.8.0.0.0",
                 "C/C++",
                 "",
                 "Ferramentas para desenvolvimento de aplicações C e C++. Inclue projetos modelo, suporte a projetos existentes, editor avançado, suporte a depuração, e assistente para gerenciamento de configurações.",
                 6311,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-groovy",
                 "6.8.0.0.0",
                 "Groovy",
                 "",
                 "Proporciona suporte para a linguagem Groovy e para as estruturas Grails.",
                 1355,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-php",
                 "6.8.0.0.0",
                 "PHP",
                 "",
                 "Ferramentas para desenvolvimento de aplicativos PHP, incluindo editor PHP e depurador, gerenciamento de projeto, integração com servidor Apache, suporte para MySQL e outros bancos de dados, upload e download FTP, suporte a JavaScript e outros recursos.",
                 1533,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-ergonomics",
                 "6.8.0.0.0",
                 "Recursos sob demanda",
                 "",
                 "Fornece uma resposta aprimorada e uma inicialização mais rápida para ativar os recursos do instalador somente quando são necessários. É o balanceamento perfeito entre a rica funcionalidade e o baixo consumo de memória/CPU. Caso a memória/CPU não seja um recurso limitado em sua máquina, sinta-se a vontade para desativar este item e obter de uma só vez toda a funcionalidade do NetBeans IDE.",
                 484,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");


add_group_info(
               "nb-base, nb-platform-sdk, nb-javase, nb-javafx, nb-javaee, nb-javame, nb-ruby, nb-cnd, nb-groovy, nb-php, nb-ergonomics",
               "",
               "");

add_group_info(
               "glassfish-mod-sun, tomcat",
               "Tempos de execução",
               "Contém tempos de execução a serem instalados.");


add_bundle_info("cpp", "nb-base, nb-cnd");
add_bundle_info("ruby", "nb-base, nb-webcommon, nb-ruby, glassfish-mod-sun");
add_bundle_info("java", "nb-base, nb-javase, nb-platform-sdk, nb-webcommon, nb-javaee, nb-groovy, nb-javame, nb-ergonomics, glassfish-mod-sun, tomcat");
add_bundle_info("all", "nb-base, nb-webcommon, nb-javase, nb-platform-sdk, nb-javafx, nb-javaee, nb-javame, nb-cnd, nb-ruby, nb-groovy, nb-php, nb-ergonomics, glassfish-mod-sun, tomcat");
add_bundle_info("javafx", "nb-base, nb-javase, nb-platform-sdk, nb-javafx");
add_bundle_info("hidden", "nb-base, nb-webcommon, nb-ergonomics");
add_bundle_info("javase", "nb-base, nb-javase, nb-platform-sdk");
add_bundle_info("php", "nb-base, nb-webcommon, nb-php");
