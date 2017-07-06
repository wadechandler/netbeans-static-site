add_product_info(
                 "nb-base",
                 "7.0.0.0.0",
                 "基本 IDE",
                 "",
                 "集成开发环境的核心组件。",
                 36483,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-platform-sdk",
                 "7.0.0.0.0",
                 "NetBeans 平台 SDK",
                 "",
                 "用于开发基于 NetBeans 平台框架的模块化 Swing 应用程序的工具。也可用于开发 NetBeans IDE 插件。",
                 0,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javase",
                 "7.0.0.0.0",
                 "Java SE",
                 "",
                 "用于 Java 编程的基本工具，其中包括编辑器、调试器、Profiler、重构支持以及屡获殊荣的拖放式 GUI 设计工具（以前称为 Project Matisse）。",
                 28626,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "glassfish-mod",
                 "3.1.43.0.0",
                 "GlassFish Server Open Source Edition 3.1",
                 "",
                 "GlassFish Server Open Source Edition 3.1 是 Glassfish 应用服务器的最新版本，它是一个实现了 Java EE 6 的兼容平台，其体系结构的特点是模块化、轻量级并且可扩展。",
                 47547,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "tomcat",
                 "7.0.11.0.0",
                 "Apache Tomcat 7.0.11",
                 "",
                 "Java Servlet 和 JSP 规范的开源 Web 容器。",
                 4032,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javaee",
                 "7.0.0.0.0",
                 "Java EE",
                 "",
                 "用于创建符合 Java EE 6、Java EE 5 和 J2EE 1.4 规范的 Java Web 和企业应用程序的工具。包括对 Servlet、JSP、标记库、Java Server Faces、Java 持久性 API、Enterprise Java Beans、JAX-WS 和 REST 风格的 Web 服务、Spring 和 Struts 的支持。",
                 42100,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-javame",
                 "7.0.0.0.0",
                 "Java ME",
                 "",
                 "用于为移动电话和便携式设备创建 Java Micro Edition 应用程序的综合工具集。该工具集包含可视设计器、Web 服务连接向导以及用于处理设备分化问题的工具。",
                 72597,
                 "windows, linux, macosx-x86, macosx-ppc");

add_product_info(
                 "nb-javacard",
                 "7.0.0.0.0",
                 "Java Card™ 3 Connected",
                 "",
                 "用于创建 Java Card Connected 3 Servlet、扩展 Applet 和传统 Applet 的综合工具集（向后兼容 Java Card 2.2.x 和 Java Card Classic）。包括调试功能和多 Java Card 平台/设备创建功能，并且可与公开发布的 Java Card 引用实现很好地配合使用。",
                 6618,
                 "windows");

add_product_info(
                 "nb-cnd",
                 "7.0.0.0.0",
                 "C/C++",
                 "",
                 "C 和 C++ 应用程序开发工具。该工具提供项目模板、现有项目支持、高级编辑器、调试支持以及用于配置管理的 makefile 向导。",
                 7073,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-groovy",
                 "7.0.0.0.0",
                 "Groovy",
                 "",
                 "为 Groovy 语言和 Grails 框架提供支持。",
                 1449,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-php",
                 "7.0.0.0.0",
                 "PHP",
                 "",
                 "用于开发 PHP 应用程序的工具，包括 PHP 编辑器和调试器、项目管理、Apache 服务器集成、MySQL 和其他数据库支持、FTP 上载和下载、JavaScript 支持以及其他功能。",
                 3803,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");

add_product_info(
                 "nb-ergonomics",
                 "7.0.0.0.0",
                 "按需启用功能",
                 "",
                 "通过仅在需要时启用安装的功能，缩短启动时间并提高响应速度。它在提供丰富的功能和确保低内存/CPU 消耗方面达到了完美的平衡。如果您在使用内存/CPU 资源方面没有限制，可随时禁用此项，以便立即获得所有 NetBeans IDE 功能。",
                 572,
                 "windows, linux, solaris-sparc, solaris-x86, macosx-ppc, macosx-x86");


add_group_info(
               "nb-base, nb-platform-sdk, nb-javase, nb-javaee, nb-javame, nb-javacard, nb-cnd, nb-groovy, nb-php, nb-ergonomics",
               "",
               "");

add_group_info(
               "glassfish-mod, tomcat",
               "运行时",
               "包含要安装的运行时");


add_bundle_info("cpp", "nb-base, nb-cnd");
add_bundle_info("javaee", "nb-base, nb-javase, nb-platform-sdk, nb-javaee, glassfish-mod, tomcat");
add_bundle_info("all", "nb-base, nb-javase, nb-platform-sdk, nb-javaee, nb-javacard, nb-javame, nb-cnd, nb-groovy, nb-php, nb-ergonomics, glassfish-mod, tomcat");
add_bundle_info("hidden", "nb-base, nb-ergonomics, nb-javafx, nb-ruby");
add_bundle_info("javase", "nb-base, nb-javase, nb-platform-sdk");
add_bundle_info("php", "nb-base, nb-php");
