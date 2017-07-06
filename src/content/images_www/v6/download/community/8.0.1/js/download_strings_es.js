/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright 1997-2010 Oracle and/or its affiliates. All rights reserved.
 *
 * Oracle and Java are registered trademarks of Oracle and/or its affiliates.
 * Other names may be trademarks of their respective owners.
 *
 * The contents of this file are subject to the terms of either the GNU General
 * Public License Version 2 only ("GPL") or the Common Development and Distribution
 * License("CDDL") (collectively, the "License"). You may not use this file except in
 * compliance with the License. You can obtain a copy of the License at
 * http://www.netbeans.org/cddl-gplv2.html or nbbuild/licenses/CDDL-GPL-2-CP. See the
 * License for the specific language governing permissions and limitations under the
 * License.  When distributing the software, include this License Header Notice in
 * each file and include the License file at nbbuild/licenses/CDDL-GPL-2-CP.  Oracle
 * designates this particular file as subject to the "Classpath" exception as
 * provided by Oracle in the GPL Version 2 section of the License file that
 * accompanied this code. If applicable, add the following below the License Header,
 * with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions Copyrighted [year] [name of copyright owner]"
 * 
 * Contributor(s):
 * 
 * The Original Software is NetBeans. The Initial Developer of the Original Software
 * is Sun Microsystems, Inc. Portions Copyright 1997-2007 Sun Microsystems, Inc. All
 * Rights Reserved.
 * 
 * If you wish your version of this file to be governed by only the CDDL or only the
 * GPL Version 2, indicate your decision by adding "[Contributor] elects to include
 * this software in this distribution under the [CDDL or GPL Version 2] license." If
 * you do not indicate a single choice of license, a recipient has the option to
 * distribute your version of this file under either the CDDL, the GPL Version 2 or
 * to extend the choice of license to its licensees as provided above. However, if
 * you add GPL Version 2 code and therefore, elected the GPL Version 2 license, then
 * the option applies only if the new code is made subject to such option by the
 * copyright holder.
 */

var BUNDLED_SERVERS_GROUP_NAME = "Servidores&nbsp;incluidos";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "Paquetes de descarga de NetBeans IDE";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "Descarga de paquetes NetBeans IDE en idiomas aportados por la comunidad.";
var NETBEANS_PACKS_MSG 		  = "Tecnolog\u00edas";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

//var JDK_NOTE_ALL      = "Se necesita Java 6 o Java 5 para instalar y ejecutar los paquetes NetBeans PHP, Ruby y C/C++. Puede descargar <a href=\"{0}\">Java desde java.com</a>.<br><br>Se necesita JDK 6 o JDK 5 para instalar y ejecutar  Java SE, JavaFX, Java y todos los paquetes de NetBeans . Puede descargar el <a href=\"{1}\">JDK por separado</a> o descargar el <a href=\"{2}\">JDK junto con el NetBeans IDE en un solo paquete</a>.<br><br>";
var JDK_NOTE_ALL      = "Se necesita Java 6 para instalar y ejecutar los paquetes NetBeans PHP, Ruby y C/C++. Puede descargar <a href=\"{0}\">Java desde java.com</a>.<br><br>Se necesita JDK 6 para instalar y ejecutar  Java SE, Java EE y todos los paquetes de NetBeans . Puede descargar el <a href=\"{1}\">JDK por separado</a> o descargar el <a href=\"{2}\">JDK junto con el IDE NetBeans en un solo paquete</a>.<br><br>";
//var JDK_NOTE_MACOSX   = "JDK 5.0 is required for installing and running the NetBeans IDE.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "Libre,&nbsp;{0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "Nota: ";
var NOTE_AND_SEP   = "{0} y {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} no est\u00e1 disponible en {1}";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} no est\u00e1 disponible para {1}";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} no est\u00e1n disponible en {1}";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} no est\u00e1n disponible para{1}";

var ZIP_FILES_LIST_NAME             = "Archivos Zip";
var MODULE_CLUSTERS_FILES_LIST_NAME = "M\u00f3dulo de Clusteres";

var NOTE_SOLARIS = "Nota: Java ME est\u00e1 disponible para Windows y Linux. <br>El paquete UML est\u00e1 disponible en el Centro de Actualizaci\u00f3n.";
var NOTE_MACOSX  = "Nota: Java ME est\u00e1 disponible para Windows y Linux. <br>El paquete UML est\u00e1 disponible en el Centro de Actualizaci\u00f3n.";
var NOTE_ZIP     = "Nota: GlassFish y Apache Tomcat solo est\u00e1n disponibles en los instaladores para la plataforma espec\u00edfica. El paquete UML est\u00e1 disponible en el Centro de  Actualizaci\u00f3n del IDE.";
var NOTE_OTHER   = "Nota: El paquete UML est\u00e1 disponible en el Centro de Actualizaci\u00f3n del IDE.";
var NOTE_JAVAFX  = "Disponible solo con <a href=\"{0}\">NetBeans&nbsp;6.5.1</a>";
var NOTE_ALL     = "Nota: Las tecnolog\u00edas en gris no son compatibles con esta plataforma.";

var MORE_LANGUAGES    = "M\u00e1s idiomas...";
var COMMUNITY_MESSAGE = "La comunidad NetBeans ha contribuido en la traducci\u00f3n de esta p\u00e1gina de descarga. Para obtener m\u00e1s informaci\u00f3n sobre la versi\u00f3n de traducci\u00f3n descargada verifique el <a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\"> estado </a>. Para descargar la \u00faltima contribuci\u00f3n de la comunidad, visite la <a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">p\u00e1gina de plugin de localizaci\u00f3n</a>.";
var COMMUNITY_CONTRIBUTED_SEP    = " -- Contribuci\u00f3n de la comunidad -- " ;
var SUN_SUPPORTED_SEP            = " -- Mantenido por Oracle -- " ;

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "Descarga NetBeans IDE";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "Descarga NetBeans IDE";


var NETBEANS_DOWNLOAD_HEADER = "Descargar NetBeans IDE {0}";
var DEVELOPMENT_TITLE        = "Desarrollo";
var ARCHIVE_TITLE            = "Archivo";
var PYTHON_TITLE             = "Python&nbsp;EA";
var EMAIL_LABEL              = "Correo electr\u00f3nico&nbsp;(opcional):&nbsp;";
var SUBSCRIBE_LABEL          = "Suscribirse&nbsp;a&nbsp;noticias:";
var MONTHLY_LABEL            = "Mensualmente&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "Semanalmente";
var CONTACT_LABEL            = "Contactarme&nbsp;a&nbsp;esta&nbsp;direcci\u00f3n";
var LANGUAGE_LABEL           = "Idioma del IDE:";
var PLATFORM_LABEL           = "Plataforma:";
var PLUGIN_MANAGER_LABEL     = "Puede agregar o quitar los paquetes usando el Administrador de Complementos del IDE (Herramientas | Complementos).<br><br>";
var JAVATOOLSBUNDLE_LABEL    = "Puede descargar tambi\u00e9n el NetBeans IDE  como parte del  <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">Paquete de Herramientas Java EE 5</a> o <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">Paquete MySQL GlassFish </a>.";
var SOURCE_BINARY_LABEL      = "El c\u00f3digo fuente y los archivos binarios de NetBeans sin los paquetes de ejecuci\u00f3n tambi\u00e9n est\u00e1n disponibles en <a id=\"zip_link\" href=\"{0}\">formato de archivo zip</a>.";
var BUILD_WIKI_LABEL         = "Ver tambi\u00e9n  <a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\"> las instrucciones de c\u00f3mo construir el IDE a partir del c\u00f3digo fuente</a> o <a href=\"{0}\">las instrucciones de instalaci\u00f3n</a>.";
var PLATFORM_DEV_LABEL       = "Puede empezar el desarrollo de aplicaciones basadas en la Plataforma NetBeans utilizando el IDE NetBeans para Java SE. M\u00e1s informaci\u00f3n sobre la <a href=\"{0}\">Plataforma NetBeans</a>.";
var PLATFORM_INFO_LINK       = "http://platform.netbeans.org/platform-get.html";

var LICENSE_NOTES_LINK      = "http://www.netbeans.org/about/legal/product-licences.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";
var PYTHON_LINK              = "http://download.netbeans.org/netbeans/6.5/python/ea/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download_es.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d_es.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h_es.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";
