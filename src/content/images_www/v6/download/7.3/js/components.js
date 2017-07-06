add_product_info(
                 "nb-base",
                 "7.3.0.0.201302132200",
                 "Base IDE",
                 "",
                 "Core components of an integrated development environment.",
                 46121,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-platform-sdk",
                 "7.3.0.0.201302132200",
                 "NetBeans Platform SDK",
                 "",
                 "Tools for developing modular Swing applications based on NetBeans Platform framework. Enables also development of plugins for NetBeans IDE.",
                 0,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javase",
                 "7.3.0.0.201302132200",
                 "Java SE",
                 "",
                 "Essential tools for programming in Java, including an editor, debugger, profiler, refactoring support, and award winning drag-and-drop GUI design tool (formerly known as Project Matisse).",
                 33718,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javafx-mod",
                 "7.3.0.0.201302132200",
                 "Java FX",
                 "",
                 "Start developing with NetBeans IDE and JavaFX technology for building, previewing, and debugging JavaFX applications.",
                 0,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "glassfish-mod",
                 "3.1.2.23.2",
                 "GlassFish Server Open Source Edition 3.1.2.2",
                 "",
                 "GlassFish Server Open Source Edition 3.1.2.2 is the latest release of the GlassFish Application Server, is a compliant implementation of the Java EE 6 platform, and features a modular, lightweight and extensible architecture.",
                 49411,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "tomcat",
                 "7.0.34.0.0",
                 "Apache Tomcat 7.0.34",
                 "",
                 "Open source web container for Java Servlet and JSP specifications.",
                 4409,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javaee",
                 "7.3.0.0.201302132200",
                 "Java EE",
                 "",
                 "Tools for creating Java web and enterprise applications compatible with Java EE 6, Java EE 5 and J2EE 1.4 specifications. Includes support for servlets, JSPs, tag libraries, Java Server Faces, Java Persistence API, Enterprise Java Beans, JAX-WS and RESTful web services, Spring and Struts.",
                 44655,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javame",
                 "7.3.0.0.201302132200",
                 "Java ME",
                 "",
                 "Comprehensive tool set for creating Java Micro Edition applications for cell phones and portable devices. Includes visual designer, web services connection wizard, and tools for handling device fragmentation problems.",
                 2787,
                 "windows, linux");

add_product_info(
                 "nb-webcommon",
                 "7.3.0.0.201302132200",
                 "HTML5",
                 "",
                 "Tools for developing HTML5 Web Applications. Includes HTML5 Application project type, page inspector and a visual CSS style editor, editor for HTML, CSS and JavaScript, and a JavaScript debugger.",
                 2344,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javacard",
                 "7.3.0.0.201302132200",
                 "Java Card™ 3 Connected",
                 "",
                 "Comprehensive tool set for creating Java Card Connected 3 servlets, extended applets and classic applets (backward compatible with Java Card 2.2.x and Java Card Classic). Includes Debugging, multiple Java Card Platform/Device creation and works seamlessly with the publicly available Java Card Reference Implementation.",
                 6623,
                 "windows");

add_product_info(
                 "nb-cnd",
                 "7.3.0.0.201302132200",
                 "C/C++",
                 "",
                 "Tools for developing C and C++ applications. Includes project templates, support for existing projects, advanced editor, debug support, and makefile wizard for configuration management.",
                 5762,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-groovy",
                 "7.3.0.0.201302132200",
                 "Groovy",
                 "",
                 "Provides support for the Groovy language and the Grails framework.",
                 1867,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-php",
                 "7.3.0.0.201302132200",
                 "PHP",
                 "",
                 "Tools for developing PHP applications, including PHP editor and debugger, project management, integration with Apache server, support for MySQL and other databases, FTP upload and download, JavaScript support and other features.",
                 3356,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-ergonomics",
                 "7.3.0.0.201302132200",
                 "Features on Demand",
                 "",
                 "Provides faster startup and improved responsiveness by turning on the installed features only when they are required. It is the perfect balance between rich functionality and low memory/CPU consumption. If memory/CPU is not a limited resource for you, feel free to disable this item and get all NetBeans IDE functionality at once.",
                 655,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");


add_group_info(
               "nb-base, nb-platform-sdk, nb-javase, nb-javafx-mod, nb-javaee, nb-javame, nb-webcommon, nb-javacard, nb-cnd, nb-groovy, nb-php, nb-ergonomics",
               "",
               "");

add_group_info(
               "glassfish-mod, tomcat",
               "Runtimes",
               "Contains runtimes to be installed");


add_bundle_info("cpp", "nb-base, nb-cnd");
add_bundle_info("javaee", "nb-base, nb-javase, nb-platform-sdk, nb-javafx-mod, nb-javaee, nb-webcommon, glassfish-mod, tomcat");
add_bundle_info("all", "nb-base, nb-javase, nb-platform-sdk, nb-javafx-mod, nb-javaee, nb-webcommon, nb-javacard, nb-javame, nb-cnd, nb-groovy, nb-php, nb-ergonomics, glassfish-mod, tomcat");
add_bundle_info("hidden", "nb-base, nb-ergonomics, nb-javafx, nb-ruby");
add_bundle_info("javase", "nb-base, nb-javase, nb-platform-sdk, nb-javafx-mod");
add_bundle_info("php", "nb-base, nb-php, nb-webcommon");
