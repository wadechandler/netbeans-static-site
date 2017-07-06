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

var BUNDLED_SERVERS_GROUP_NAME = "Wbudowane&nbsp;serwery";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "Wersje NetBeans IDE do pobrania";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "Wersje NetBeans IDE do pobrania w j\u0119zykach t\u0142umaczonych przez spo\u0142eczno\u015b\u0107";
var NETBEANS_PACKS_MSG 		  = "Wspierane&nbsp;technologie";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

// var JDK_NOTE_ALL      = "Java 6 jest wymagana, aby zainstalowa\u0107 i uruchomi\u0107 wersj\u0119 NetBeans PHP, Ruby oraz C/C++. Mo\u017cesz pobra\u0107 najnowsz\u0105 wersj\u0119 <a href=\"{0}\">Javy na java.com</a>.<br><br>JDK 6 jest wymagane do instalacji i uruchomienia Java SE, JavaFX, Java i pe\u0142nej wersji NetBeans. Mo\u017cesz pobra\u0107 <a href=\"{1}\">samodzieln\u0105 wersj\u0119 JDK</a> lub pobra\u0107 najnowsz\u0105 wersj\u0119 <a href=\"{2}\">JDK z NetBeans IDE Java SE</a>.<br><br>";
var JDK_NOTE_ALL      = "Java 6 is required for installing and running the PHP and C/C++ NetBeans Bundles. You can download the <a href=\"{0}\">latest Java at java.com</a>.<br><br>JDK 6 is required for installing and running the Java SE, Java EE and All NetBeans Bundles. You can download <a href=\"{1}\">standalone JDK</a> or download the latest <a href=\"{2}\">JDK with NetBeans IDE Java SE bundle</a>.<br><br>";
//var JDK_NOTE_MACOSX   = "JDK 5.0 is required for installing and running the NetBeans IDE.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "Darmowa, {0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "Notatka: ";
var NOTE_AND_SEP   = "{0} i {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} nie jest dost\u0119pny w {1}";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} nie jest dost\u0119pny dla {1}";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} nie s\u0105 dost\u0119pne w {1}";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} nie s\u0105 dost\u0119pne dla {1}";

var ZIP_FILES_LIST_NAME             = "Pliki Zip";
var MODULE_CLUSTERS_FILES_LIST_NAME = "Klastry modu\u0142u";

var NOTE_SOLARIS = "Notatka: Java ME jest dost\u0119pna tylko dla systemu Windows i Linux. <br>Paczka UML jest dost\u0119pna poprzez Centrum Aktualizacji.";
var NOTE_MACOSX  = "Notatka: Java ME jest dost\u0119pna tylko dla systemu Windows i Linux. <br>Paczka UML jest dost\u0119pna poprzez Centrum Aktualizacji.";
var NOTE_ZIP     = "Notatka: GlassFish i Apache Tomcat s\u0105 dost\u0119pne dla instalatora specyficznego dla ka\u017cdego systemu operacyjnego. Paczka UML jest dost\u0119pna poprzez Centrum Aktualizacji.";
var NOTE_OTHER   = "Notatka: Paczka UML jest dost\u0119pna poprzez Centrum Aktualizacji.";
var NOTE_JAVAFX  = "Dost\u0119pna wy\u0142\u0105cznie z <a href=\"{0}\">NetBeans&nbsp;6.5.1</a>";
var NOTE_ALL     = "Note: Greyed out technologies are not supported for this platform.";

var MORE_LANGUAGES    = "Wi\u0119cej j\u0119zyk\u00f3w...";
var COMMUNITY_MESSAGE = "Spo\u0142eczno\u015b\u0107 NetBeans posiada ogromny wk\u0142ad w tworzenie wersji j\u0119zykowych dost\u0119pnych do pobrania na tej stronie. Aby uzyska\u0107 wi\u0119cej informacji dotycz\u0105cych wolumenu t\u0142umacze\u0144 zawartego w pobieranym IDE, sprawd\u017a <a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\">stron\u0119 prezentujac\u0105 status t\u0142umaczenia</a>. Aby pobra\u0107 ostatnie t\u0142umaczenia spo\u0142eczno\u015bci NetBeans, odwied\u017a <a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">stron\u0119 opisuj\u0105c\u0105 wtyczk\u0119 dla lokalizacji</a>.";
var COMMUNITY_CONTRIBUTED_SEP    = " -- Community Contributed -- " ;
var SUN_SUPPORTED_SEP            = " -- Oracle Supported -- " ;

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "Pobieranie NetBeans IDE";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "Pobieranie NetBeans IDE";


var NETBEANS_DOWNLOAD_HEADER = "Pobieranie NetBeans IDE {0}";
var DEVELOPMENT_TITLE        = "Rozwojowe";
var ARCHIVE_TITLE            = "Archiwum";
var PYTHON_TITLE             = "Python&nbsp;EA";
var EMAIL_LABEL              = "Email&nbsp;adres&nbsp;(alternatywnie):&nbsp;";
var SUBSCRIBE_LABEL          = "Zapisz&nbsp;si\u0119&nbsp;do&nbsp;newsletter:";
var MONTHLY_LABEL            = "Miesi\u0119czne&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "Tygodniowe";
var CONTACT_LABEL            = "Informuj&nbsp;mnie&nbsp;na&nbsp;ten&nbsp;adres";
var LANGUAGE_LABEL           = "J\u0119zyk IDE:";
var PLATFORM_LABEL           = "Platforma:";
var PLUGIN_MANAGER_LABEL     = "Mo\u017cesz doda\u0107 lub usun\u0105\u0107 paczki p\u00f3\u017aniej poprzez Zarz\u0105dc\u0119 wtyczek IDE (Narz\u0119dzia | Wtyczki).<br><br>";
var JAVATOOLSBUNDLE_LABEL    = "Mo\u017cesz r\u00f3wnie\u017c pobra\u0107 NetBeans IDE jako cz\u0119\u015b\u0107 <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">paczki narz\u0119dzi Java EE 5</a> lub <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">paczki MySQL GlassFish</a>.";
var SOURCE_BINARY_LABEL      = "Kod \u017ar\u00f3d\u0142owy i binaria NetBeans bez paczek uruchomieniowych s\u0105 dost\u0119pne w <a id=\"zip_link\" href=\"{0}\">plikach zip</a>.";
var BUILD_WIKI_LABEL         = "Zobacz tak\u017ce <a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\">instrukcje jak zbudowa\u0107 NetBeans ze \u017ar\u00f3de\u0142</a> lub <a href=\"{0}\">instrukcje instalacji</a>.";
var PLATFORM_DEV_LABEL       = "Mo\u017cesz rozpocz\u0105\u0107 tworzenie aplikacji opartych na Platformie NetBeans u\u017cywaj\u0105c NetBeans IDE dla Java SE. Dowiedz si\u0119 wi\u0119cej na temat <a href=\"{0}\">Platformy NetBeans</a>.";
var PLATFORM_INFO_LINK       = "http://platform.netbeans.org/platform-get.html";

var LICENSE_NOTES_LINK      = "http://www.netbeans.org/about/legal/product-licences.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";
var PYTHON_LINK              = "http://download.netbeans.org/netbeans/6.5/python/ea/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download_pl.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d_pl.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h_pl.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";
