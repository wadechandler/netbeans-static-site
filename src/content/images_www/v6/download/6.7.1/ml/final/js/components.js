add_product_info(
                 "nb-base",
                 "6.7.1.0.0",
                 "Base IDE",
                 "",
                 "Core components of an integrated development environment.",
                 22219,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javase",
                 "6.7.1.0.0",
                 "Java SE",
                 "",
                 "Essential tools for programming in Java, including an editor, debugger, profiler, refactoring support, and award winning drag-and-drop GUI design tool (formerly known as Project Matisse).",
                 23289,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-webcommon",
                 "6.7.1.0.0",
                 "JavaScript Debugger",
                 "",
                 "Provides the JavaScript debugger for Firefox and Internet Explorer, for use in web applications.",
                 951,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "sjsas",
                 "2.1.1.31.20091019",
                 "Sun GlassFish Enterprise Server v2.1.1",
                 "",
                 "The Sun GlassFish Enterprise Server v2.1.1 is a Java EE 5 platform-compatible server for the development and deployment of Java EE applications and Java technology-based web services in large-scale production environments.",
                 57696,
                 "windows, linux, solaris-x86, solaris-sparc, macosx-x86, macosx-ppc");

add_product_info(
                 "glassfish-mod-sun",
                 "3.0.0.28.20090708",
                 "Sun GlassFish Enterprise Server v3 Prelude",
                 "",
                 "Sun GlassFish Enterprise Server v3 Prelude is a commercially supported offering for GlassFish v3 Prelude, an open-source, lightweight Web 2.0 development and deployment platform. GlassFish Enterprise Server v3 Prelude is ideal for deploying rich Internet applications backed by Java or dynamic languages such as JRuby.",
                 20639,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "tomcat",
                 "6.0.18.0.0",
                 "Apache Tomcat 6.0.18",
                 "",
                 "Open source web container for Java Servlet and JSP specifications.",
                 3560,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javafx",
                 "1.2.0.0.215",
                 "JavaFX",
                 "",
                 "Start developing with NetBeans IDE and JavaFX technology for building, previewing, and debugging JavaFX applications.",
                 44775,
                 "windows, linux, solaris-x86, macosx-x86, macosx-ppc");

add_product_info(
                 "nb-javaee",
                 "6.7.1.0.0",
                 "Java Web and EE",
                 "",
                 "Tools for creating Java web and enterprise applications compatible with J2EE 1.4, and Java EE 5 specifications. Includes support for servlets, JSPs, tag libraries, Spring, Struts, Java Persistence API, Enterprise Java Beans, JAX-WS and RESTful web services, and Java Server Faces. Provides visual drag-and-drop application development environment.",
                 34740,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javame",
                 "6.7.1.0.0",
                 "Java ME",
                 "",
                 "Comprehensive tool set for creating Java Micro Edition applications for cell phones and portable devices. Includes visual designer, web services connection wizard, and tools for handling device fragmentation problems.",
                 73683,
                 "windows, linux");

add_product_info(
                 "nb-ruby",
                 "6.7.1.0.0",
                 "Ruby",
                 "",
                 "Complete tool set for creating Ruby and Ruby on Rails applications. Includes JRuby interpreter, Ruby on Rails framework, powerful editor, debugger, gem manager, and interactive Ruby shell. Supports easily creating, modifying, and running Ruby on Rails applications.",
                 14877,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-cnd",
                 "6.7.1.0.0",
                 "C/C++",
                 "",
                 "Tools for developing C and C++ applications. Includes project templates, support for existing projects, advanced editor, debug support, and makefile wizard for configuration management.",
                 6306,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-groovy",
                 "6.7.1.0.0",
                 "Groovy",
                 "",
                 "Provides support for the Groovy language and the Grails framework.",
                 1113,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-php",
                 "6.7.1.0.0",
                 "PHP",
                 "",
                 "Tools for developing PHP applications, including PHP editor and debugger, project management, integration with Apache server, support for MySQL and other databases, FTP upload and download, JavaScript support and other features.",
                 1405,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-ergonomics",
                 "6.7.1.0.0",
                 "Features on Demand",
                 "",
                 "Provides faster startup and improved responsiveness by turning on the installed features only when they are required. It is the perfect balance between rich functionality and low memory/CPU consumption. If memory/CPU is not a limited resource for you, feel free to disable this item and get all NetBeans IDE functionality at once.",
                 466,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");


add_group_info(
               "nb-base, nb-javase, nb-webcommon, nb-javafx, nb-javaee, nb-javame, nb-ruby, nb-cnd, nb-groovy, nb-php, nb-ergonomics",
               "",
               "");

add_group_info(
               "sjsas, glassfish-mod-sun, tomcat",
               "Runtimes",
               "Contains runtimes to be installed");


add_bundle_info("cpp", "nb-base, nb-cnd");
add_bundle_info("ruby", "nb-base, nb-webcommon, nb-ruby, glassfish-mod-sun");
add_bundle_info("java", "nb-base, nb-javase, nb-webcommon, nb-javaee, nb-groovy, nb-javame, nb-ergonomics, sjsas, glassfish-mod-sun, tomcat");
add_bundle_info("all", "nb-base, nb-webcommon, nb-javase, nb-javaee, nb-javafx, nb-javame, nb-cnd, nb-ruby, nb-groovy, nb-php, nb-ergonomics, sjsas, glassfish-mod-sun, tomcat");
add_bundle_info("javafx", "nb-base, nb-javase, nb-javafx");
add_bundle_info("hidden", "nb-base, nb-webcommon, nb-ergonomics");
add_bundle_info("javase", "nb-base, nb-javase");
add_bundle_info("php", "nb-base, nb-webcommon, nb-php");
