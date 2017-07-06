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

var BUNDLED_SERVERS_GROUP_NAME = "Servidors&nbsp;inclosos";

var NETBEANS_DOWNLOAD_BUNDLES_MSG = "Paquets desc\u00e0rrega IDE NetBeans";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "Desc\u00e0rrega de paquets del IDE NetBeans amb idiomes contribu\u00efts per la comunitat.";
var NETBEANS_PACKS_MSG 		  = "Tecnologies&nbsp;suportades";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

//var JDK_NOTE_ALL      = "Es necessita tindre instal\u00b7lat Java 6 o Java 5 per a instal\u00b7lar i executar els paquets de NetBeans PHP, Ruby i C/C++. Podeu descarregar <a href='{0}'>l'\u00faltim Java a java.com</a>.<br><br>Es necessita el JDK 6 o b\u00e9 el JDK 5 per a instal\u00b7lar i executar Java SE, JavaFX, Java i tots els paquets de NetBeans. Podeu descarregar el <a href='{1}'>JDK per separat</a> o b\u00e9 descarregar <a href='{2}'>el IDE de NetBeans juntament amb JDK en un sol paquet</a>.<br><br>";
var JDK_NOTE_ALL      = "Es necessita tindre instal\u00b7lat Java 6 per a instal\u00b7lar i executar els paquets de NetBeans de PHP i de C/C++. Podeu descarregar <a href='{0}'>l'\u00faltima versi\u00f3 de Java de java.com</a>.<br><br>Es necessita el JDK 6 per a instal\u00b7lar i executar Java SE, Java EE, aix\u00ed com tots els paquets de NetBeans. Podeu descarregar el <a href='{1}'>JDK per separat</a> o b\u00e9 descarregar <a href='{2}'>l'IDE NetBeans juntament amb el JDK en un sol paquet</a>.<br><br>";

//var JDK_NOTE_MACOSX   = "Es necessita el JDK 5 per a instal\u00b7lar i executar el IDE NetBeans.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "Lliure,&nbsp;{0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = " -- ";

var NOTE_PREFIX    = "Nota:";
var NOTE_AND_SEP   = "{0} i {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} no est\u00e0 disponible a {1}";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} no est\u00e0 disponible per a {1}";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} no estan disponibles a {1}";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} no estan disponibles per a {1}";

var ZIP_FILES_LIST_NAME             = "Fitxers Zip";
var MODULE_CLUSTERS_FILES_LIST_NAME = "Cl\u00fasters de m\u00f2duls";

var NOTE_SOLARIS = "Note: Java ME nom\u00e9s est\u00e0 disponible per a Windows i Linux. <br>El paquet d'UML est\u00e0 disponible al Centre d'Actualitzaci\u00f3.";
var NOTE_MACOSX  = "Note: Java ME nom\u00e9s est\u00e0 disponible per a Windows i Linux. <br>El paquet d'UML est\u00e0 disponible al Centre d'Actualitzaci\u00f3.";
var NOTE_ZIP     = "Nota: GlassFish i Tomcat d'Apache nom\u00e9s estan disponibles per a instal\u00b7ladors espec\u00edfics de plataforma. El paquet d'UML est\u00e0 disponible al Centre d'Actualitzaci\u00f3.";
var NOTE_OTHER   = "Nota: El paquet d'UML est\u00e0 disponible al Centre d'Actualitzaci\u00f3.";
var NOTE_JAVAFX  = "Nom\u00e9s disponible amb <a href='{0}'>NetBeans&nbsp;6.5.1</a>";
var NOTE_ALL     = "Nota: Les tecnologies que estan de color gris no s\u00f3n compatibles amb aquesta plataforma";

var MORE_LANGUAGES    = "M\u00e9s llenguatges...";
var COMMUNITY_MESSAGE = "La comunitat de NetBeans ha contribu\u00eft amb la traducci\u00f3 d'aquesta p\u00e0gina de desc\u00e0rrega. Per a obtenir m\u00e9s informaci\u00f3 quant a la versi\u00f3 tradu\u00efda descarregada vegeu la <a href='http://wiki.netbeans.org/TFL10nCommunityStatus'>p\u00e0gina d'estat de la comunitat</a>. Per a descarregar l'\u00faltima contribuci\u00f3 de la comunitat, visiteu la <a href='http://wiki.netbeans.org/TFLocalizationDevelopmentUC'>p\u00e0gina del complement de localitzaci\u00f3</a>.";
var COMMUNITY_CONTRIBUTED_SEP    = " -- Contribu\u00eft per la comunitat -- ";
var SUN_SUPPORTED_SEP            = " -- Suportat per Oracle -- ";

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "Desc\u00e0rrega IDE NetBeans";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "Desc\u00e0rrega IDE NetBeans";




var NETBEANS_DOWNLOAD_HEADER = "Desc\u00e0rrega IDE NetBeans {0}";
var DEVELOPMENT_TITLE        = "Desenvolupament";
var ARCHIVE_TITLE            = "Arxiu";
var EMAIL_LABEL              = "Correu&nbsp;electr\u00f2nic&nbsp;(opcional):&nbsp;";
var SUBSCRIBE_LABEL          = "Subscriure's&nbsp;als&nbsp;butlletins:";
var MONTHLY_LABEL            = "Mensuals&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "Setmanals";
var CONTACT_LABEL            = "NetBeans&nbsp;es&nbsp;pot&nbsp;ficar&nbsp;amb&nbsp;contacte<br/>utilitzant&nbsp;aquesta&nbsp;adre\u00e7a";
var LANGUAGE_LABEL           = "Idioma del IDE:";
var PLATFORM_LABEL           = "Plataforma:";
var PLUGIN_MANAGER_LABEL     = "Podeu afegir o treure paquets utilitzant l'Administrador de Complements del IDE (Eines | Complements).";
var JAVATOOLSBUNDLE_LABEL    = "Tamb\u00e9 podeu descarregar el IDE NetBeans com a part del <a href='http://java.sun.com/javaee/downloads/index.jsp'>Grup d'Eines Java EE 5</a> o b\u00e9 <a href='http://download.netbeans.org/netbeans/6.1/mysql_bundle/'>Paquet GlassFish MySQL</a>.";
var SOURCE_BINARY_LABEL      = "Tant el codi font com els fitxers binaris de NetBeans, sense els paquets d'execuci\u00f3, tamb\u00e9 estan disponibles amb un <a id='zip_link' href='{0}'>fitxer zip</a>.";
var BUILD_WIKI_LABEL         = "Vegeu tamb\u00e9 <a href='http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources'>instruccions de com construir el IDE des de les fonts</a> o b\u00e9 <a href='{0}'>instruccions d'instal\u00b7laci\u00f3</a>.";
var PLATFORM_DEV_LABEL       = "Podeu comen\u00e7ar el desenvolupament d'aplicacions basades amb la Plataforma NetBeans utilitzant el IDE NetBeans per a Java SE. Aprendre m\u00e9s quant a la <a href=\"{0}\">Plataforma NetBeans</a>.";
var PLATFORM_INFO_LINK       = "http://platform.netbeans.org/platform-get.html";

var LICENSE_NOTES_LINK      = "http://www.netbeans.org/about/legal/product-licences.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download_ca.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d_ca.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h_ca.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";
