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

var BUNDLED_SERVERS_GROUP_NAME = "Mitgelieferte&nbsp;Server";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "NetBeans IDE Download-Pakete";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "NetBeans IDE Download-Pakete mit Community-&Uuml;bersetzung";
var NETBEANS_PACKS_MSG 		  = "Unterst&uuml;tzte Technologien";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

//var JDK_NOTE_ALL      = "Java 6 oder Java 5 wird zur Installation und Ausf&uuml;hrung der PHP-, Ruby- und C/C++-NetBeans-Pakete ben&ouml;tigt. Das <a href=\"{0}\">neueste Java bekommen Sie auf java.com</a>.<br><br>JDK 6 oder JDK 5 wird zur Installation und Ausf&uuml;hrung der Java SE-, der JavaFX-, der Java-, und 'All'-NetBeans-Pakete ben&ouml;tigt. Sie k&ouml;nnen das <a href=\"{1}\">eigenst&auml;ndige JDK</a> herunterladen, oder das neueste <a href=\"{2}\">Paket mit JDK und NetBeans IDE f&uuml;r Java SE</a>.<br><br>";
var JDK_NOTE_ALL      = "Java 6 wird zur Installation und Ausf&uuml;hrung der PHP und C/C++ NetBeans-Pakete ben&ouml;tigt. Das <a href=\"{0}\">neueste Java bekommen Sie auf java.com</a>.<br><br>JDK 6 wird zur Installation und Ausf&uuml;hrung der Java SE, Java EE und 'All'-NetBeans-Pakete ben&ouml;tigt. Sie k&ouml;nnen das <a href=\"{1}\">eigenst&auml;ndige JDK</a> herunterladen, oder das neueste <a href=\"{2}\">Paket mit JDK und NetBeans IDE f&uuml;r Java SE</a>.<br><br>";

//var JDK_NOTE_MACOSX   = "JDK 5.0 wird zur Installation und Ausf&uuml;hrung der NetBeans IDE ben&ouml;tigt.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "Kostenlos, {0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "Hinweis: ";
var NOTE_AND_SEP   = "{0} und {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} ist nicht in {1} verf&uuml;gbar";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} ist nicht f&uuml;r {1} verf&uuml;gbar";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} sind nicht in {1} verf&uuml;gbar";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} sind nicht f&uuml;r {1} verf&uuml;gbar";

var ZIP_FILES_LIST_NAME             = "Zip-Dateien";
var MODULE_CLUSTERS_FILES_LIST_NAME = "Modulcluster";

var NOTE_SOLARIS = "Hinweis: Java ME gibt es nur f&uuml;r Windows und Linux. <br>Das UML-Modul erhalten Sie vom Updatezentrum.";
var NOTE_MACOSX  = "Hinweis: Java ME gibt es nur f&uuml;r Windows und Linux. <br>Das UML-Modul erhalten Sie vom Updatezentrum.";
var NOTE_ZIP     = "Hinweis: GlassFish und Apache Tomcat gibt es nur als plattformabh&auml;ngige Installationsprogramme. Das UML-Modul erhalten Sie vom Updatezentrum.";
var NOTE_OTHER   = "Hinweis: Das UML-Modul erhalten Sie vom Updatezentrum.";
var NOTE_JAVAFX  = "Available only with <a href=\"{0}\">NetBeans&nbsp;6.5.1</a>";
var NOTE_ALL     = "Achtung: Technologien in grau nicht f&uuml;r alle Plattformen.";

var MORE_LANGUAGES    = "Mehr Sprachen...";
var COMMUNITY_MESSAGE = "Die auf dieser Seite erh&auml;ltlichen Sprachversionen entstanden durch den Beitrag der NetBeans-Community. Mehr Informationen zum Status der heruntergeladenen Sprachversion erhalten sie auf der <a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\">Statusseite</a> der Community. Die neuesten &Uuml;bersetzungen finden Sie auf der <a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">Pluginseite</a> der &Uuml;bersetzer.";
var COMMUNITY_CONTRIBUTED_SEP    = " -- Community Contributed -- " ;
var SUN_SUPPORTED_SEP            = " -- Oracle Supported -- " ;

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "NetBeans IDE-Download";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "NetBeans IDE-Download";


var NETBEANS_DOWNLOAD_HEADER = "NetBeans IDE {0}-Download";
var DEVELOPMENT_TITLE        = "Entwicklung";
var ARCHIVE_TITLE            = "Archiv";
var PYTHON_TITLE             = "Python&nbsp;EA";
var EMAIL_LABEL              = "Emailadresse&nbsp;(optional):&nbsp;";
var SUBSCRIBE_LABEL          = "Newsletter&nbsp;abbonieren:";
var MONTHLY_LABEL            = "Monatlich&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "W&ouml;chentlich";
var CONTACT_LABEL            = "NetBeans darf mich kontaktieren";
var LANGUAGE_LABEL           = "IDE-Sprache:";
var PLATFORM_LABEL           = "Plattform:";
var PLUGIN_MANAGER_LABEL     = "Mit der Pluginverwaltung der IDE k&ouml;nnen Sie jederzeit Pakete hinzuf&uuml;gen und entfernen (Extras | Plugins).<br><br>";
var JAVATOOLSBUNDLE_LABEL    = "Sie k&ouml;nnen die NetBeans IDE auch als Teil des <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">Java EE 5 Tools-Paketes</a> oder <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">MySQL GlassFish-Pakets</a> herunterladen.";
var SOURCE_BINARY_LABEL      = "Der NetBeans-Quelltext und das ausf&uuml;hrbare Programm ohne Laufzeitumgebung sind auch im <a id=\"zip_link\" href=\"{0}\">Zip-Format</a> erh&auml;ltlich.";
var BUILD_WIKI_LABEL         = "Lesen Sie hier <a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\">wie man den Quelltext der IDE kompiliert</a>, oder folgen Sie den <a href=\"{0}\">Installationsanweisungen</a>.";
var PLATFORM_DEV_LABEL       = "Mit der NetBeans IDE f\u00fcr Java SE k\u00f6nnen Sie Anwendungen auf Basis der NetBeans-Plattform entwickeln. Erfahren Sie hier mehr \u00fcber die <a href=\"{0}\">NetBeans Platform</a>.";
var PLATFORM_INFO_LINK       = "http://platform.netbeans.org/platform-get.html";

var LICENSE_NOTES_LINK      = "http://www.netbeans.org/about/legal/product-licences.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";
var PYTHON_LINK              = "http://download.netbeans.org/netbeans/6.5/python/ea/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download_de.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d_de.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h_de.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";
