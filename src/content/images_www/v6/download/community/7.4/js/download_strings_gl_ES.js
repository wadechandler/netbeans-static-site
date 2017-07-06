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

var BUNDLED_SERVERS_GROUP_NAME = "Servidores&nbsp;inclu\u00eddos";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "Paquetes de descarga do IDE NetBeans";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "Paquetes de descarga do IDE NetBeans con traduci\u00f3ns proporcionadas pola comunidade";
var NETBEANS_PACKS_MSG 		  = "Tecnolox\u00edas&nbsp;soportadas";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

//var JDK_NOTE_ALL      = "Para instalar e executar os paquetes de PHP, Ruby e C/C++ de NetBeans requ\u00edrese Java 6 ou Java 5. Vostede pode descargar <a href=\"{0}\">a \u00faltima versi\u00f3n de Java desde java.com</a>.<br><br>Para instalar e executar o Java SE, JavaFX, Java e t\u00f3dolos paquetes de NetBeans requ\u00edrese o JDK 6 ou JDK 5. Vostede pode descargar <a href=\"{1}\">o JDK aut\u00f3nomo</a> ou descargar o \u00faltimo <a href=\"{2}\">JDK xunto co paquete Java SE do IDE NetBeans</a>.<br><br>";
var JDK_NOTE_ALL      = "Java 6 is required for installing and running the PHP and C/C++ NetBeans Bundles. You can download the <a href=\"{0}\">latest Java at java.com</a>.<br><br>JDK 6 is required for installing and running the Java SE, Java EE and All NetBeans Bundles. You can download <a href=\"{1}\">standalone JDK</a> or download the latest <a href=\"{2}\">JDK with NetBeans IDE Java SE bundle</a>.<br><br>";
//var JDK_NOTE_MACOSX   = "JDK 5.0 is required for installing and running the NetBeans IDE.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "Libre,&nbsp;{0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "Nota: ";
var NOTE_AND_SEP   = "{0} e {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} non est\u00e1 dispo\u00f1\u00edbel en {1}";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} non est\u00e1 dispo\u00f1\u00edbel para {1}";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} non est\u00e1n dispo\u00f1\u00edbeis en {1}";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} non est\u00e1n dispo\u00f1\u00edbeis para {1}";

var ZIP_FILES_LIST_NAME             = "Ficheiros zip";
var MODULE_CLUSTERS_FILES_LIST_NAME = "Module Clusters";

var NOTE_SOLARIS = "Nota: Java ME s\u00f3 est\u00e1 dispo\u00f1\u00edbel para Windows e Linux. <br>O paquete de UML est\u00e1 dispo\u00f1\u00edbel no Centro de actualizaci\u00f3n.";
var NOTE_MACOSX  = "Nota: Java ME s\u00f3 est\u00e1 dispo\u00f1\u00edbel para Windows e Linux. <br>O paquete de UML est\u00e1 dispo\u00f1\u00edbel no Centro de actualizaci\u00f3n.";
var NOTE_ZIP     = "Nota: GlassFish e Apache Tomcat s\u00f3 est\u00e1n dispo\u00f1ibles nos instaladores espec\u00edficos de plataforma. O paquete de UML est\u00e1 dispo\u00f1\u00edbel no Centro de actualizaci\u00f3n.";
var NOTE_OTHER   = "Nota: O paquete de UML est\u00e1 dispo\u00f1\u00edbel no Centro de actualizaci\u00f3n.";
var NOTE_JAVAFX  = "Dispo\u00f1\u00edbel s\u00f3 en <a href=\"{0}\">NetBeans&nbsp;6.5.1</a>";
var NOTE_ALL     = "Note: Greyed out technologies are not supported for this platform.";


var MORE_LANGUAGES    = "M\u00e1is idiomas...";
var COMMUNITY_MESSAGE = "A comunidade de NetBeans contribu\u00edu coas traduci\u00f3ns que pode descargar dende esta p\u00e1xina. Para  The NetBeans Community has fully contributed to the language(s) that can be downloaded from this page. Para saber o volume descargado de localizaci\u00f3n comprobe a <a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\">p\u00e1xina de estado da comunidade</a>. Para descargar a \u00faltima contribuci\u00f3n da comunidade, visite a <a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">p\u00e1xina do complemento de localizaci\u00f3n</a>.";
var COMMUNITY_CONTRIBUTED_SEP    = " -- Contribu\u00eddo pola comunidade -- " ;
var SUN_SUPPORTED_SEP            = " -- Soportado por Oracle -- " ;

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "Descarga do IDE NetBeans";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "Descarga do IDE NetBeans";



var NETBEANS_DOWNLOAD_HEADER = "Descarga do NetBeans IDE {0}";
var DEVELOPMENT_TITLE        = "Desenvolvemento";
var ARCHIVE_TITLE            = "Archivo";
var EMAIL_LABEL              = "Enderezo&nbsp;de&nbsp;correo&nbsp;(optional):&nbsp;";
var SUBSCRIBE_LABEL          = "Suscribirse&nbsp;\u00e1s&nbsp;roldas&nbsp;de&nbsp;correo:";
var MONTHLY_LABEL            = "Mensual&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "Semanal";
var CONTACT_LABEL            = "NetBeans pode contactar<br>comigo neste enderezo";
var LANGUAGE_LABEL           = "Linguaxe do IDE:";
var PLATFORM_LABEL           = "Plataforma:";
var PLUGIN_MANAGER_LABEL     = "Pode engadir ou eliminar paquetes m\u00e1is tarde empregando o Xestor de plugins do IDE (Ferramentas | Plugins).<br><br>";
var JAVATOOLSBUNDLE_LABEL    = "Tam\u00e9n pode descargar o IDE NetBeans como parte do <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">Paquete de ferramentas Java EE 5</a> ou <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">paquete de MySQL GlassFish</a>.";
var SOURCE_BINARY_LABEL      = "Tam\u00e9n est\u00e1n dispo\u00f1\u00edbeis o c\u00f3digo fonte de NetBeans e compilaci\u00f3ns binarias sen runtimes en <a id=\"zip_link\" href=\"{0}\">formato de ficheiro zip</a>.";
var BUILD_WIKI_LABEL         = "Vexa tam\u00e9n as <a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\">instruci\u00f3ns sobre como compilar o IDE dende as fontes</a> ou as <a href=\"{0}\">instruci\u00f3ns de instalaci\u00f3n</a>.";
var PLATFORM_DEV_LABEL       = "Vostede pode comezar a desenvolver aplicativos baseadas na Plataforma de NetBeans empregando o IDE NetBeans para Java SE. Olle m\u00e1is informaci\u00f3n sobre a <a href=\"{0}\">Plataforma de NetBeans</a>.";
var PLATFORM_INFO_LINK       = "http://platform.netbeans.org/platform-get.html";


var LICENSE_NOTES_LINK      = "http://www.netbeans.org/about/legal/product-licences.html";
var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";
