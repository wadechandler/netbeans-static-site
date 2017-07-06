add_product_info(
                 "nb-base",
                 "8.0.1.0.201408251540",
                 "Base IDE",
                 "",
                 "Core components of an integrated development environment.",
                 55765,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-extide",
                 "8.0.1.0.201408251540",
                 "Extended IDE",
                 "",
                 "Additional components of an integrated development environment.",
                 1394,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-platform-sdk",
                 "8.0.1.0.201408251540",
                 "NetBeans Platform SDK",
                 "",
                 "Tools for developing modular Swing applications based on NetBeans Platform framework. Enables also development of plugins for NetBeans IDE.",
                 0,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javase",
                 "8.0.1.0.201408251540",
                 "Java SE",
                 "",
                 "Essential tools for programming in Java, including an editor, debugger, profiler, refactoring support, and award winning drag-and-drop GUI design tool (formerly known as Project Matisse).",
                 33276,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javafx-mod",
                 "8.0.1.0.201408251540",
                 "Java FX",
                 "",
                 "Start developing with NetBeans IDE and JavaFX technology for building, previewing, and debugging JavaFX applications.",
                 0,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "glassfish-mod",
                 "4.1.0.13.0",
                 "GlassFish Server Open Source Edition 4.1",
                 "",
                 "GlassFish Server 4.1 provides a server for the development and deployment of Java Platform Enterprise Edition (Java EE) and dynamic, scalable HTML5 applications. Key features include Java EE 7 compatibility, modularity, and rapid iterative development.",
                 49806,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "tomcat",
                 "8.0.9.0.0",
                 "Apache Tomcat 8.0.9",
                 "",
                 "Open source web container for Java Servlet and JSP specifications.",
                 5135,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javaee",
                 "8.0.1.0.201408251540",
                 "Java EE",
                 "",
                 "Tools for creating Java web and enterprise applications compatible with Java EE specifications. Includes support for servlets, JSPs, tag libraries, Java Server Faces, Java Persistence API, Enterprise Java Beans, JAX-WS and RESTful web services, Spring and Struts.",
                 40845,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javame",
                 "8.0.1.0.201408251540",
                 "Java ME",
                 "",
                 "Comprehensive tool set for creating Java Micro Edition applications for cell phones and portable devices. Includes visual designer, web services connection wizard, and tools for handling device fragmentation problems.",
                 1232,
                 "windows, linux");

add_product_info(
                 "nb-webcommon",
                 "8.0.1.0.201408251540",
                 "HTML5",
                 "",
                 "Tools for developing HTML5 Web Applications and Cordova Applications, both on the desktop, as well as with iOS and Android devices. Includes HTML5 Application project type, page inspector and visual CSS style editor, editor for HTML, JavaScript, CSS, SASS and LESS, and a JavaScript debugger.",
                 2286,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javacard",
                 "8.0.1.0.201408251540",
                 "Java Card™ 3 Connected",
                 "",
                 "Comprehensive tool set for creating Java Card Connected 3 servlets, extended applets and classic applets (backward compatible with Java Card 2.2.x and Java Card Classic). Includes Debugging, multiple Java Card Platform/Device creation and works seamlessly with the publicly available Java Card Reference Implementation.",
                 6592,
                 "windows");

add_product_info(
                 "nb-cnd",
                 "8.0.1.0.201408251540",
                 "C/C++",
                 "",
                 "Tools for developing C and C++ applications. Includes project templates, support for existing projects, advanced editor, debug support, and makefile wizard for configuration management.",
                 6272,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-groovy",
                 "8.0.1.0.201408251540",
                 "Groovy",
                 "",
                 "Provides support for the Groovy language and the Grails framework.",
                 1723,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-php",
                 "8.0.1.0.201408251540",
                 "PHP",
                 "",
                 "Tools for developing PHP applications, including PHP editor and debugger, project management, integration with Apache server, support for MySQL and other databases, FTP upload and download, JavaScript support and other features.",
                 3363,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-ergonomics",
                 "8.0.1.0.201408251540",
                 "Features on Demand",
                 "",
                 "Provides faster startup and improved responsiveness by turning on the installed features only when they are required. It is the perfect balance between rich functionality and low memory/CPU consumption. If memory/CPU is not a limited resource for you, feel free to disable this item and get all NetBeans IDE functionality at once.",
                 741,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");


add_group_info(
               "nb-base, nb-extide, nb-platform-sdk, nb-javase, nb-javafx-mod, nb-javaee, nb-javame, nb-webcommon, nb-javacard, nb-cnd, nb-groovy, nb-php, nb-ergonomics",
               "",
               "");

add_group_info(
               "glassfish-mod, tomcat",
               "Runtimes",
               "Contains runtimes to be installed");


add_bundle_info("cpp", "nb-base, nb-cnd");
add_bundle_info("javaee", "nb-base, nb-javase, nb-platform-sdk, nb-javafx-mod, nb-javaee, nb-webcommon, nb-extide, glassfish-mod, tomcat");
add_bundle_info("all", "nb-base, nb-javase, nb-platform-sdk, nb-javafx-mod, nb-javaee, nb-webcommon, nb-extide, nb-javacard, nb-javame, nb-cnd, nb-groovy, nb-php, nb-ergonomics, glassfish-mod, tomcat");
add_bundle_info("hidden", "nb-base, nb-ergonomics, nb-javafx, nb-ruby, nb-extide");
add_bundle_info("javase", "nb-base, nb-javase, nb-extide, nb-platform-sdk, nb-javafx-mod");
add_bundle_info("php", "nb-base, nb-php, nb-webcommon, nb-extide");
