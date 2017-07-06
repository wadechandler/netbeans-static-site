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

var BUNDLED_SERVERS_GROUP_NAME = "\ubc88\ub4e4 &nbsp; \uc11c\ubc84 ";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "\ub137\ube48\uc988 IDE \ub2e4\uc6b4\ub85c\ub4dc \ubc88\ub4e4 ";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "\ucee4\ubba4\ub2c8\ud2f0 \uc81c\uacf5 \uc5b8\uc5b4\ud310 \ub137\ube48\uc988 IDE \ub2e4\uc6b4\ub85c\ub4dc \ubc88\ub4e4 ";
var NETBEANS_PACKS_MSG 		  = "\uc9c0\uc6d0\ub41c&nbsp; \uae30\uc220 ";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

//var JDK_NOTE_ALL      = "PHP, \ub8e8\ube44 \ubc0f C/C++ \ub137\ube48\uc988 \ubc88\ub4e4\uc744 \uc124\uce58, \uc2e4\ud589\ud558\ub824\uba74 \uc790\ubc14 6 \ub610\ub294 \uc790\ubc14 5\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 <a href=\"{0}\">java.com \uc5d0\uc11c \ucd5c\uc2e0 \uc790\ubc14\ub97c \ub2e4\uc6b4\ub85c\ub4dc</a> \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\ubc14 SE, \uc790\ubc14FX, \uc790\ubc14\uc640 \ubaa8\ub4e0 \ub137\ube48\uc988 \ubc88\ub4e4\uc744 \uc124\uce58, \uc2e4\ud589\ud558\ub824\uba74 JDK 6 \ub610\ub294 JDK 5\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 \ub3c5\ub9bd\ud615\uc758 JDK \ub098 \ud639\uc740 \ucd5c\uc2e0 <a href=\"{2}\">JDK \uc640 \ub137\ube48\uc988 IDE \uc790\ubc14SE \ubc88\ub4e4</a>\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.<br><br>";
var JDK_NOTE_ALL      = "Java 6 is required for installing and running the PHP and C/C++ NetBeans Bundles. You can download the <a href=\"{0}\">latest Java at java.com</a>.<br><br>JDK 6 is required for installing and running the Java SE, Java EE and All NetBeans Bundles. You can download <a href=\"{1}\">standalone JDK</a> or download the latest <a href=\"{2}\">JDK with NetBeans IDE Java SE bundle</a>.<br><br>";
//var JDK_NOTE_MACOSX   = "JDK 5.0 is required for installing and running the NetBeans IDE.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "\ud06c\uae30,&nbsp;{0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "\ub178\ud2b8: ";
var NOTE_AND_SEP   = "{0} \uc640(\uacfc) {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0}\uc740(\ub294) {1}\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0}\uc740(\ub294) {1}\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0}\uc740(\ub294) {1}\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0}\uc740(\ub294) {1}\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4";

var ZIP_FILES_LIST_NAME             = "Zip \ud30c\uc77c";
var MODULE_CLUSTERS_FILES_LIST_NAME = "\ubaa8\ub4c8 \ud074\ub7ec\uc2a4\ud130";

var NOTE_SOLARIS = "\ub178\ud2b8: \uc790\ubc14 ME\ub294 \uc708\ub3c4\uc6b0\uc640 \ub9ac\ub205\uc2a4\uc5d0\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.";
var NOTE_MACOSX  = "\ub178\ud2b8: \uc790\ubc14 ME\ub294 \uc708\ub3c4\uc6b0\uc640 \ub9ac\ub205\uc2a4\uc5d0\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.";
var NOTE_ZIP     = "\ub178\ud2b8: \uae00\ub798\uc2a4\ud53c\uc2dc\uc640 \uc544\ud30c\uce58 \ud1b0\ucea3\uc740 \ud50c\ub7ab\ud3fc \uc9c0\uc815 \uc124\uce58 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.";
var NOTE_ALL     = "Note: Greyed out technologies are not supported for this platform.";

var MORE_LANGUAGES    = "\uc5b8\uc5b4 \ub354\ubcf4\uae30...";
var COMMUNITY_MESSAGE = "\ub137\ube48\uc988 \ucee4\ubba4\ub2c8\ud2f0\ub294 \ud574\ub2f9 \ud398\uc774\uc9c0\uc758 \ub2e4\uc6b4\ub85c\ub4dc \uac00\ub2a5\ud55c \uc5b8\uc5b4\ud310\uc5d0 \ub300\ud574 \uc804\uc801\uc73c\ub85c \uae30\uc5ec\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc6b4\ub85c\ub4dc\ub41c \uc9c0\uc5ed\ud654 \ubcfc\ub968\uc5d0 \ub300\ud574 \uc880\ub354 \uc0b4\ud3b4 \ubcf4\uc2dc\ub824\uba74 <a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\">\ucee4\ubba4\ub2c8\ud2f0 \ud604\ud669 \ud398\uc774\uc9c0</a>\ub97c \ud655\uc778\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \ucd5c\uc2e0 \ucee4\ubba4\ub2c8\ud2f0 \uae30\uc5ec\uc5d0 \ucc38\uc5ec\ud558\uc2dc\ub824\uba74, <a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">\uc9c0\uc5ed\ud654 \ud50c\ub7ec\uadf8 \uc778 \ud398\uc774\uc9c0</a>\ub97c \ubc29\ubb38 \ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.";
var COMMUNITY_CONTRIBUTED_SEP    = " -- \ucee4\ubba4\ub2c8\ud2f0 \uc9c0\uc6d0 -- " ;
var SUN_SUPPORTED_SEP            = " -- \uc36c \uc9c0\uc6d0 -- " ;

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "\ub137\ube48\uc988 IDE \ub2e4\uc6b4\ub85c\ub4dc";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "\ub137\ube48\uc988 IDE \ub2e4\uc6b4\ub85c\ub4dc";



var NETBEANS_DOWNLOAD_HEADER = "\ub137\ube48\uc988 IDE {0} \ub2e4\uc6b4\ub85c\ub4dc";
var DEVELOPMENT_TITLE        = "\uac1c\ubc1c";
var ARCHIVE_TITLE            = "\uc544\uce74\uc774\ube0c";
var EMAIL_LABEL              = "\uc774\uba54\uc77c&nbsp;\uc8fc\uc18c&nbsp;(\uc120\ud0dd):&nbsp;";
var SUBSCRIBE_LABEL          = "\uad6c\ub3c5&nbsp;&nbsp;\ub274\uc2a4\ub808\ud130:";
var MONTHLY_LABEL            = "\uc6d4\ubcc4&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "\uc8fc\uac04\ubcc4";
var CONTACT_LABEL            = "\ub137\ube48\uc988\uac00&nbsp;\uc704\uc758&nbsp;\uc8fc\uc18c\ub85c&nbsp;\ub0b4\uac8c&nbsp;\ubb38\uc758\ud560&nbsp;\uc218&nbsp;\uc788\uc2b5\ub2c8\ub2e4.";
var LANGUAGE_LABEL           = "IDE \uc5b8\uc5b4:";
var PLATFORM_LABEL           = "\ud50c\ub7ab\ud3fc:";
var PLUGIN_MANAGER_LABEL     = "\ucd94\ud6c4 IDE \ud50c\ub7ec\uadf8 \uc778 \ub9e4\ub2c8\uc800 (\ub3c4\uad6c | \ud50c\ub7ec\uadf8\uc778) \uc744 \uc0ac\uc6a9\ud558\uc5ec \ud328\ud0a4\uc9c0\ub97c \ucd94\uac00\ud558\uac70\ub098 \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.<br><br>";
var JAVATOOLSBUNDLE_LABEL    = "\uc5ec\ub7ec\ubd84\uc740 <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">\uc790\ubc14 EE 5 \ub3c4\uad6c \ubc88\ub4e4</a> \ub610\ub294 <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">MySQL \uae00\ub798\uc2a4\ud53c\uc2dc \ubc88\ub4e4</a>\uc758 \uc77c\ubd80\ub85c \ub137\ube48\uc988 IDE\ub97c \ub2e4\uc6b4\ub85c\ub4dc \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.";
var SOURCE_BINARY_LABEL      = "\ub7f0\ud0c0\uc784 \ubc88\ub4e4\uc774 \uc5c6\ub294 \ub137\ube48\uc988 \uc18c\uc2a4 \ucf54\ub4dc\uc640 \ubc14\uc774\ub108\ub9ac \ube4c\ub4dc\ub294 <a id=\"zip_link\" href=\"{0}\">zip \ud30c\uc77c \ud3ec\ub9f7</a>\uc73c\ub85c\ub3c4 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.";
var BUILD_WIKI_LABEL         = "<a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\">\uc18c\uc2a4\ub85c\ubd80\ud130 IDE\ub97c \ube4c\ub4dc\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \ub3c4\uc6c0\ub9d0</a>\uc774\ub098 <a href=\"{0}\">\uc124\uce58 \ub3c4\uc6c0\ub9d0</a>\uc744 \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.";
var PLATFORM_DEV_LABEL       = "\uc5ec\ub7ec\ubd84\uc740 \uc790\ubc14 SE\ub97c \uc704\ud574 \ub137\ube48\uc988 IDE\ub97c \uc0ac\uc6a9\ud55c \ub137\ube48\uc988 \ud50c\ub7ab\ud3fc\uc744 \uae30\ubc18\uc73c\ub85c \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8 \uac1c\ubc1c\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. <a href=\"{0}\">\ub137\ube48\uc988 \ud50c\ub7ab\ud3fc</a>\uc5d0 \ub300\ud574 \uc880\ub354 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4;";
var PLATFORM_INFO_LINK       = "http://platform.netbeans.org/platform-get.html";


var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";
