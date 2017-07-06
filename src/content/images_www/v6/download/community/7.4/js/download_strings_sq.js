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

var BUNDLED_SERVERS_GROUP_NAME = "Server\u00ebt&nbsp;e&nbsp;tubuar";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "Shkarkimi i tufave t\u00eb NetBeans IDE";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "Shkarkimi i tufave t\u00eb NetBeans IDE n\u00eb gjuh\u00ebt e kontribuara nga komuniteti";
var NETBEANS_PACKS_MSG 		  = "Teknologjit\u00eb&nbsp;e&nbsp;p\u00ebrkrahura";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

//var JDK_NOTE_ALL      = "Java 6 ose Java 5 \u00ebsht\u00eb e k\u00ebrkuar p\u00ebr instalimin dhe ekzekutimin e Tufave NetBeans PHP-s\u00eb, Ruby si dhe C/C++. Ju mund t'i shkakroni  <a href=\"{0}\">Java t\u00eb fundit nga java.com</a>.<br><br>JDK 6 ose JDK 5 \u00ebsht\u00eb e k\u00ebrkuar p\u00ebr instalimin dhe ekzekutimin e Java SE, JavaFX, Java si dhe All NetBeans Bundles. Ju mund t\u00eb shkarkoni <a href=\"{1}\">JDK vet-q\u00ebndruese</a> ose shkarkoni t\u00eb fundmen  <a href=\"{2}\">JDK me NetBeans IDE Java SE bundle</a>.<br><br>";
var JDK_NOTE_ALL      = "Java 6 is required for installing and running the PHP and C/C++ NetBeans Bundles. You can download the <a href=\"{0}\">latest Java at java.com</a>.<br><br>JDK 6 is required for installing and running the Java SE, Java EE and All NetBeans Bundles. You can download <a href=\"{1}\">standalone JDK</a> or download the latest <a href=\"{2}\">JDK with NetBeans IDE Java SE bundle</a>.<br><br>";
//var JDK_NOTE_MACOSX   = "JDK 5.0 is required for installing and running the NetBeans IDE.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "Falas,&nbsp;{0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "Sh\u00ebnim: ";
var NOTE_AND_SEP   = "{0} dhe {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} nuk \u00ebsht\u00eb e gatshme n\u00eb {1}";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} nuk \u00ebsht\u00eb e gatshme p\u00ebr {1}";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} nuk jan\u00eb t\u00eb gatshme n\u00eb{1}";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} nuk jan\u00eb t\u00eb gatshme p\u00ebr {1}";

var ZIP_FILES_LIST_NAME             = "Skedar\u00ebt Zip";
var MODULE_CLUSTERS_FILES_LIST_NAME = "Tufa Module";

var NOTE_SOLARIS = "Sh\u00ebnim: Mobility \u00ebsht\u00eb e gatshme vet\u00ebm p\u00ebr Windows dhe Linux. <br>UML Pack \u00ebsht\u00eb e gatshme n\u00eb Qendr\u00ebn e p\u00ebrdit\u00ebsimit.";
var NOTE_MACOSX  = "Sh\u00ebnim: Java ME \u00ebsht\u00eb e gatshme vet\u00ebm ppr Windows dhe Linux. <br>UML Pack \u00ebsht\u00eb e gatshme n\u00eb Qendr\u00ebn e p\u00ebrdit\u00ebsimit.";
var NOTE_ZIP     = "Sh\u00ebnim: GlassFish si dhe Apache Tomcat jan\u00eb t\u00eb gatshme vet\u00ebm n\u00eb instaluesit e ve\u00e7ant p\u00ebr platforma. UML Pack \u00ebsht\u00eb e gatshme n\u00eb Qendr\u00ebn e p\u00ebrdit\u00ebsimit.";
var NOTE_OTHER   = "Sh\u00ebnim: UML Pack \u00ebsht\u00eb e gatshme n\u00eb Qendr\u00ebn e p\u00ebrdit\u00ebsimit.";
var NOTE_JAVAFX  = "Available only with <a href=\"{0}\">NetBeans&nbsp;6.5.1</a>";
var NOTE_ALL     = "Note: Greyed out technologies are not supported for this platform.";


var MORE_LANGUAGES    = "M\u00eb tep\u00ebr gjuh\u00eb...";
var COMMUNITY_MESSAGE = "Komuniteti i NetBeans-it ka kontribuar n\u00eb gjuh\u00ebn(t) q\u00eb mund t\u00eb shkarkohet na kjo faqe. P\u00ebr t\u00eb marr\u00eb m\u00eb tep\u00ebr informata mbi v\u00ebllimin e lokalizimeve kontrollot <a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\">statusin e faqes s\u00eb komunitetit </a>. P\u00ebr t\u00eb shkarkuar kontributet e fundme t\u00eb komunitetit, vizito <a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">faqja e shtojc\u00ebs s lokalizimi</a>.";
var COMMUNITY_CONTRIBUTED_SEP    = " -- Community Contributed -- " ;
var SUN_SUPPORTED_SEP            = " -- Oracle Supported -- " ;

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "Shkarkimi i NetBeans IDE-s";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "Shkarkimi i NetBeans IDE-s";


var NETBEANS_DOWNLOAD_HEADER = "Shkarkimi i NetBeans IDE {0}";
var DEVELOPMENT_TITLE        = "Zhvillim";
var ARCHIVE_TITLE            = "Akriv\u00eb";
var PYTHON_TITLE             = "Python&nbsp;EA";
var EMAIL_LABEL              = "Adresa&nbsp;e&nbsp;E-post\u00ebs&nbsp;(opsionale):&nbsp;";
var SUBSCRIBE_LABEL          = "An\u00ebtar\u00ebsohu&nbsp;n\u00eb&nbsp;lajmlet\u00ebr:";
var MONTHLY_LABEL            = "Mujore&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "Javore";
var CONTACT_LABEL            = "NetBeans&nbsp;mund&nbsp;t\u00eb&nbsp;kontaktoj\u00eb&nbsp;&nbsp;mua&nbsp;n\u00eb&nbsp;k\u00ebt\u00eb&nbsp;adres\u00eb";
var LANGUAGE_LABEL           = "Gjuha e IDE-s:";
var PLATFORM_LABEL           = "Platforma:";
var PLUGIN_MANAGER_LABEL     = "Ju mund t\u00eb shtoni ose t\u00eb largoni pako m\u00eb von\u00eb duke p\u00ebrdorur Drejtuesin e shtojcave t\u00eb IDE-s (Veglat | Shtojcat).<br>";
var JAVATOOLSBUNDLE_LABEL    = "Ju gjithashtu mund ta shkarkoni NetBeans IDE si pjes\u00eb t\u00eb <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">Tufa e veglave Java EE 5</a>. or <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">Tufa MySQL GlassFish Bundle</a>.";
var SOURCE_BINARY_LABEL      = "Kodi burimor i NetBeans-it dhe nd\u00ebrtimet binarike pa koh\u00eb-veprimet gjithashtu jan\u00eb t\u00eb gatshme n\u00eb <a id=\"zip_link\" href=\"{0}\">formatin e skedar\u00ebve zip</a>.";
var BUILD_WIKI_LABEL         = "Shiko gjithashtu instruksionet <a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\"> se si nd\u00ebrtohet IDE nga burimi</a> ose <a href=\"{0}\">instruksionet e instalimit</a>.";
var PLATFORM_DEV_LABEL       = "Ju mund t\u00eb filloni zhvillimin e aplikacioneve t\u00eb bazuara n\u00eb NetBeans Platform-\u00ebn duke p\u00ebrdorur NetBeans IDE for Java SE. M\u00ebsoni m\u00eb tep\u00ebr p\u00ebr <a href=\"{0}\">NetBeans Platform</a>.";
var PLATFORM_INFO_LINK       = "http://platform.netbeans.org/platform-get.html";

var LICENSE_NOTES_LINK      = "http://www.netbeans.org/about/legal/product-licences.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";
var PYTHON_LINK              = "http://download.netbeans.org/netbeans/6.5/python/ea/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download_sq.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d_sq.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h_sq.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";
