add_product_info(
                 "nb-base",
                 "7.0.0.0.0",
                 "Base IDE",
                 "",
                 "Core components of an integrated development environment.",
                 36483,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-platform-sdk",
                 "7.0.0.0.0",
                 "NetBeans Platform SDK",
                 "",
                 "Tools for developing modular Swing applications based on NetBeans Platform framework. Enables also development of plugins for NetBeans IDE.",
                 0,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javase",
                 "7.0.0.0.0",
                 "Java SE",
                 "",
                 "Essential tools for programming in Java, including an editor, debugger, profiler, refactoring support, and award winning drag-and-drop GUI design tool (formerly known as Project Matisse).",
                 28626,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "glassfish-mod",
                 "3.1.43.0.0",
                 "GlassFish Server Open Source Edition 3.1",
                 "",
                 "GlassFish Server Open Source Edition 3.1 is the latest release of the GlassFish Application Server, is a compliant implementation of the Java EE 6 platform, and features a modular, lightweight and extensible architecture.",
                 47547,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "tomcat",
                 "7.0.11.0.0",
                 "Apache Tomcat 7.0.11",
                 "",
                 "Open source web container for Java Servlet and JSP specifications.",
                 4032,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javaee",
                 "7.0.0.0.0",
                 "Java EE",
                 "",
                 "Tools for creating Java web and enterprise applications compatible with Java EE 6, Java EE 5 and J2EE 1.4 specifications. Includes support for servlets, JSPs, tag libraries, Java Server Faces, Java Persistence API, Enterprise Java Beans, JAX-WS and RESTful web services, Spring and Struts.",
                 42100,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javame",
                 "7.0.0.0.0",
                 "Java ME",
                 "",
                 "Comprehensive tool set for creating Java Micro Edition applications for cell phones and portable devices. Includes visual designer, web services connection wizard, and tools for handling device fragmentation problems.",
                 72597,
                 "windows, linux, macosx-x86, macosx-ppc");

add_product_info(
                 "nb-javacard",
                 "7.0.0.0.0",
                 "Java Card™ 3 Connected",
                 "",
                 "Comprehensive tool set for creating Java Card Connected 3 servlets, extended applets and classic applets (backward compatible with Java Card 2.2.x and Java Card Classic). Includes Debugging, multiple Java Card Platform/Device creation and works seamlessly with the publicly available Java Card Reference Implementation.",
                 6618,
                 "windows");

add_product_info(
                 "nb-cnd",
                 "7.0.0.0.0",
                 "C/C++",
                 "",
                 "Tools for developing C and C++ applications. Includes project templates, support for existing projects, advanced editor, debug support, and makefile wizard for configuration management.",
                 7073,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-groovy",
                 "7.0.0.0.0",
                 "Groovy",
                 "",
                 "Provides support for the Groovy language and the Grails framework.",
                 1449,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-php",
                 "7.0.0.0.0",
                 "PHP",
                 "",
                 "Tools for developing PHP applications, including PHP editor and debugger, project management, integration with Apache server, support for MySQL and other databases, FTP upload and download, JavaScript support and other features.",
                 3803,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-ergonomics",
                 "7.0.0.0.0",
                 "Features on Demand",
                 "",
                 "Provides faster startup and improved responsiveness by turning on the installed features only when they are required. It is the perfect balance between rich functionality and low memory/CPU consumption. If memory/CPU is not a limited resource for you, feel free to disable this item and get all NetBeans IDE functionality at once.",
                 572,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");


add_group_info(
               "nb-base, nb-platform-sdk, nb-javase, nb-javaee, nb-javame, nb-javacard, nb-cnd, nb-groovy, nb-php, nb-ergonomics",
               "",
               "");

add_group_info(
               "glassfish-mod, tomcat",
               "Runtimes",
               "Contains runtimes to be installed");


add_bundle_info("cpp", "nb-base, nb-cnd");
add_bundle_info("javaee", "nb-base, nb-javase, nb-platform-sdk, nb-javaee, glassfish-mod, tomcat");
add_bundle_info("all", "nb-base, nb-javase, nb-platform-sdk, nb-javaee, nb-javacard, nb-javame, nb-cnd, nb-groovy, nb-php, nb-ergonomics, glassfish-mod, tomcat");
add_bundle_info("hidden", "nb-base, nb-ergonomics, nb-javafx, nb-ruby");
add_bundle_info("javase", "nb-base, nb-javase, nb-platform-sdk");
add_bundle_info("php", "nb-base, nb-php");
