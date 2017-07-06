add_product_info(
                 "nb-base",
                 "6.8.0.0.0",
                 "Base IDE",
                 "",
                 "Core components of an integrated development environment.",
                 22119,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javase",
                 "6.8.0.0.0",
                 "Java SE",
                 "",
                 "Essential tools for programming in Java, including an editor, debugger, profiler, refactoring support, and award winning drag-and-drop GUI design tool (formerly known as Project Matisse).",
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
                 "Sun GlassFish Enterprise Server v3 is a commercial offering for GlassFish v3, an open source, lightweight development and deployment platform for Java and dynamic language applications such as JRuby. You can use Sun GlassFish Enterprise Server v3 as is for free, or become a subscriber to get support, patches, tools to observe and improve performance, and more.",
                 50829,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "tomcat",
                 "6.0.20.0.0",
                 "Apache Tomcat 6.0.20",
                 "",
                 "Open source web container for Java Servlet and JSP specifications.",
                 3293,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javafx",
                 "6.8.0.0.0",
                 "JavaFX",
                 "",
                 "Start developing with NetBeans IDE and JavaFX technology for building, previewing, and debugging JavaFX applications.",
                 48316,
                 "windows, linux, solaris-x86, macosx-x86, macosx-ppc");

add_product_info(
                 "nb-javaee",
                 "6.8.0.0.0",
                 "Java Web and EE",
                 "",
                 "Tools for creating Java web and enterprise applications compatible with Java EE 6, Java EE 5 and J2EE 1.4 specifications. Includes support for servlets, JSPs, tag libraries, Java Server Faces, Java Persistence API, Enterprise Java Beans, JAX-WS and RESTful web services, Spring and Struts.",
                 45804,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javame",
                 "6.8.0.0.0",
                 "Java ME",
                 "",
                 "Comprehensive tool set for creating Java Micro Edition applications for cell phones and portable devices. Includes visual designer, web services connection wizard, and tools for handling device fragmentation problems.",
                 72895,
                 "windows, linux");

add_product_info(
                 "nb-ruby",
                 "6.8.0.0.0",
                 "Ruby",
                 "",
                 "Complete tool set for creating Ruby and Ruby on Rails applications. Includes JRuby interpreter, Ruby on Rails framework, powerful editor, debugger, gem manager, and interactive Ruby shell. Supports easily creating, modifying, and running Ruby on Rails applications.",
                 19970,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-cnd",
                 "6.8.0.0.0",
                 "C/C++",
                 "",
                 "Tools for developing C and C++ applications. Includes project templates, support for existing projects, advanced editor, debug support, and makefile wizard for configuration management.",
                 6311,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-groovy",
                 "6.8.0.0.0",
                 "Groovy",
                 "",
                 "Provides support for the Groovy language and the Grails framework.",
                 1355,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-php",
                 "6.8.0.0.0",
                 "PHP",
                 "",
                 "Tools for developing PHP applications, including PHP editor and debugger, project management, integration with Apache server, support for MySQL and other databases, FTP upload and download, JavaScript support and other features.",
                 1533,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-ergonomics",
                 "6.8.0.0.0",
                 "Features on Demand",
                 "",
                 "Provides faster startup and improved responsiveness by turning on the installed features only when they are required. It is the perfect balance between rich functionality and low memory/CPU consumption. If memory/CPU is not a limited resource for you, feel free to disable this item and get all NetBeans IDE functionality at once.",
                 484,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");


add_group_info(
               "nb-base, nb-platform-sdk, nb-javase, nb-javafx, nb-javaee, nb-javame, nb-ruby, nb-cnd, nb-groovy, nb-php, nb-ergonomics",
               "",
               "");

add_group_info(
               "glassfish-mod-sun, tomcat",
               "Runtimes",
               "Contains runtimes to be installed");


add_bundle_info("cpp", "nb-base, nb-cnd");
add_bundle_info("ruby", "nb-base, nb-webcommon, nb-ruby, glassfish-mod-sun");
add_bundle_info("java", "nb-base, nb-javase, nb-platform-sdk, nb-webcommon, nb-javaee, nb-groovy, nb-javame, nb-ergonomics, glassfish-mod-sun, tomcat");
add_bundle_info("all", "nb-base, nb-webcommon, nb-javase, nb-platform-sdk, nb-javafx, nb-javaee, nb-javame, nb-cnd, nb-ruby, nb-groovy, nb-php, nb-ergonomics, glassfish-mod-sun, tomcat");
add_bundle_info("javafx", "nb-base, nb-javase, nb-platform-sdk, nb-javafx");
add_bundle_info("hidden", "nb-base, nb-webcommon, nb-ergonomics");
add_bundle_info("javase", "nb-base, nb-javase, nb-platform-sdk");
add_bundle_info("php", "nb-base, nb-webcommon, nb-php");
