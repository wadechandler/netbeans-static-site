/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 * 
 * Copyright (c) 2010, Oracle and/or its affiliates. All rights reserved.
 * 
 * The contents of this file are subject to the terms of either the GNU General
 * Public License Version 2 only ("GPL") or the Common Development and Distribution
 * License("CDDL") (collectively, the "License"). You may not use this file except in
 * compliance with the License. You can obtain a copy of the License at
 * https://netbeans.org/cddl-gplv2.html or nbbuild/licenses/CDDL-GPL-2-CP. See the
 * License for the specific language governing permissions and limitations under the
 * License.  When distributing the software, include this License Header Notice in
 * each file and include the License file at nbbuild/licenses/CDDL-GPL-2-CP.  Sun
 * designates this particular file as subject to the "Classpath" exception as
 * provided by Sun in the GPL Version 2 section of the License file that
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

var BUNDLED_SERVERS_GROUP_NAME = "\u30d0\u30f3\u30c9\u30eb&nbsp;\u30b5\u30fc\u30d0\u30fc";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "NetBeans IDE \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30d0\u30f3\u30c9\u30eb";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "NetBeans IDE \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30d0\u30f3\u30c9\u30eb(\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u3088\u308b\u8a00\u8a9e)";
var NETBEANS_PACKS_MSG 		  = "\u30b5\u30dd\u30fc\u30c8\u30c6\u30af\u30ce\u30ed\u30b8\u30fc";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/ja/6/download.html";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/ja/6/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

var JDK_NOTE_ALL      = "NetBeans \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057 PHP\u3001Ruby\u3001C/C++ \u306e NetBeans \u30d0\u30f3\u30c9\u30eb\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f Java 6 \u307e\u305f\u306f Java 5 \u304c\u5fc5\u8981\u3067\u3059\u3002<a href=\"{0}\">\u6700\u65b0\u306e Java \u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9</a>\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002<br><br>NetBeans \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057 Java SE\u3001JavaFX\u3001Java \u304a\u3088\u3073\u3059\u3079\u3066\u306e\u30d0\u30f3\u30c9\u30eb\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f JDK 6 \u307e\u305f\u306f JDK 5 \u304c\u5fc5\u8981\u3067\u3059\u3002<a href=\"{1}\">\u6700\u65b0\u306e JDK \u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9</a>\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u306f <a href=\"{2}\">JDK \u3068 NetBeans IDE \u306e Java SE \u30d0\u30f3\u30c9\u30eb</a> \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002<br><br>";
//var JDK_NOTE_MACOSX   = "JDK 5.0 is required for installing and running the NetBeans IDE.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "\u7121\u511f,&nbsp;{0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "\u6ce8\u610f: ";
var NOTE_AND_SEP   = "{0} \u304a\u3088\u3073 {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} \u306f {1} \u306b\u306f\u542b\u307e\u308c\u3066\u3044\u307e\u305b\u3093";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} \u306f {1} \u3067\u306f\u5229\u7528\u3067\u304d\u307e\u305b\u3093";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} \u306f {1} \u306b\u306f\u542b\u307e\u308c\u3066\u3044\u307e\u305b\u3093";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} \u306f {1} \u3067\u306f\u5229\u7528\u3067\u304d\u307e\u305b\u3093";

var ZIP_FILES_LIST_NAME             = "ZIP \u30d5\u30a1\u30a4\u30eb";
var MODULE_CLUSTERS_FILES_LIST_NAME = "\u30e2\u30b8\u30e5\u30fc\u30eb\u30af\u30e9\u30b9\u30bf";

var NOTE_SOLARIS = "\u6ce8\u610f: Java ME \u306f Windows \u304a\u3088\u3073 Linux \u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u5229\u7528\u3067\u304d\u307e\u3059\u3002<br>UML \u30d1\u30c3\u30af\u306f\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u30bb\u30f3\u30bf\u30fc\u304b\u3089\u5229\u7528\u3067\u304d\u307e\u3059\u3002";
var NOTE_MACOSX  = "\u6ce8\u610f: Java ME \u306f Windows \u304a\u3088\u3073 Linux \u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u5229\u7528\u3067\u304d\u307e\u3059\u3002<br>UML \u30d1\u30c3\u30af\u306f\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u30bb\u30f3\u30bf\u30fc\u304b\u3089\u5229\u7528\u3067\u304d\u307e\u3059\u3002";
var NOTE_ZIP     = "\u6ce8\u610f: GlassFish \u3068 Apache Tomcat \u306f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3054\u3068\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u3067\u306e\u307f\u5229\u7528\u3067\u304d\u307e\u3059\u3002 UML \u30d1\u30c3\u30af\u306f\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u30bb\u30f3\u30bf\u30fc\u304b\u3089\u5229\u7528\u3067\u304d\u307e\u3059\u3002";
var NOTE_OTHER   = "\u6ce8\u610f: UML \u30d1\u30c3\u30af\u306f\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u30bb\u30f3\u30bf\u30fc\u304b\u3089\u5229\u7528\u3067\u304d\u307e\u3059\u3002";
var NOTE_JAVAFX  = "<br>JavaFX \u306f\u82f1\u8a9e\u306e\u307f\u306e\u30ea\u30ea\u30fc\u30b9\u3067 Windows \u304a\u3088\u3073 Mac OS X \u3067\u5229\u7528\u3067\u304d\u307e\u3059\u3002";

var MORE_LANGUAGES    = "\u305d\u306e\u4ed6\u306e\u8a00\u8a9e...";
var COMMUNITY_MESSAGE = "NetBeans \u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u3088\u308a\u8ca2\u732e\u3055\u308c\u305f\u7ffb\u8a33\u8a00\u8a9e\u3092\u3053\u306e\u30da\u30fc\u30b8\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002\u7ffb\u8a33\u7bc4\u56f2\u306b\u3064\u3044\u3066\u306f<a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\">\u30c6\u30fc\u30bf\u30b9\u30da\u30fc\u30b8</a>\u3092\u3054\u89a7\u4e0b\u3055\u3044\u3002\u6700\u65b0\u306e\u958b\u767a\u30d3\u30eb\u30c9\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u306b\u306f<a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">\u30d7\u30e9\u30b0\u30a4\u30f3\u30da\u30fc\u30b8</a>\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002";

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "NetBeans IDE \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "NetBeans IDE \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9";

var NETBEANS_DOWNLOAD_HEADER = "NetBeans IDE {0} \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9";
var DEVELOPMENT_TITLE        = "\u958b\u767a\u7248";
var ARCHIVE_TITLE            = "\u30a2\u30fc\u30ab\u30a4\u30d6";
var JAVAFX_TITLE             = "JavaFX";
var PYTHON_TITLE             = "Python&nbsp;EA";
var EMAIL_LABEL              = "Email&nbsp;\u30a2\u30c9\u30ec\u30b9&nbsp;(\u4efb\u610f):&nbsp;";
var SUBSCRIBE_LABEL          = "\u30cb\u30e5\u30fc\u30b9\u30ec\u30bf\u30fc\u3092\u8cfc\u8aad:";
var MONTHLY_LABEL            = "\u6708\u3054\u3068&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "\u9031\u3054\u3068";
var CONTACT_LABEL            = "NetBeans \u304c\u3053\u306e\u30a2\u30c9\u30ec\u30b9\u5b9b\u306b\u9023\u7d61\u3057\u3066\u3082\u3088\u3044";
var LANGUAGE_LABEL           = "\u8a00\u8a9e:";
var PLATFORM_LABEL           = "\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0:";
var PLUGIN_MANAGER_LABEL     = "\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u306f IDE \u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u30fc (\u30c4\u30fc\u30eb | \u30d7\u30e9\u30b0\u30a4\u30f3) \u3067\u30d1\u30c3\u30af\u3092\u8ffd\u52a0\u3001\u524a\u9664\u3067\u304d\u307e\u3059\u3002<br>";
var JAVATOOLSBUNDLE_LABEL    = "\u307e\u305f <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">Java EE 5 Tools Bundle</a> \u3084 <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">MySQL GlassFish Bundle</a> \u306e\u4e00\u90e8\u3068\u3057\u3066 NetBeans IDE \u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u3067\u304d\u307e\u3059\u3002";
var SOURCE_BINARY_LABEL      = "NetBeans \u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u3001\u5b9f\u884c\u74b0\u5883\u306e\u30d0\u30f3\u30c9\u30eb\u3092\u9664\u304f\u30d0\u30a4\u30ca\u30ea\u30d3\u30eb\u30c9\u306f <a href=\"{0}\">zip \u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f</a> \u3067\u3082\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u53ef\u80fd\u3067\u3059\u3002"; 
var BUILD_WIKI_LABEL         = "\u30bd\u30fc\u30b9\u304b\u3089 IDE \u3092\u30d3\u30eb\u30c9\u3059\u308b\u306b\u306f\u3001<a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\">\u624b\u9806</a>\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002";

var LICENSE_NOTES_LINK      = "https://netbeans.org/about/legal/product-licences.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";
var JAVAFX_LINK              = "http://www.javafx.com/";
var PYTHON_LINK              = "http://download.netbeans.org/netbeans/6.5/python/ea/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download_ja.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d_ja.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h_ja.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";

var LEGAL_INFO_HEADER = "\u91cd\u8981\u306a\u8457\u4f5c\u6a29\u60c5\u5831:";

var CDDL_GPLV2_LINK = "https://netbeans.org/cddl-gplv2.html";
var LICENSE_DETAILS_LINK = "https://netbeans.org/about/legal/code_dependency_matrix.html";

var LEGAL_INFO_MESSAGE = "NetBeans Community Distributions are available under a Dual License consisting of the <a href=\"https://netbeans.org/cddl-gplv2.html\">Common Development and Distribution License (CDDL) v1.0 and GNU General Public License (GPL) v2</a>. Such distributions include additional components under separate licenses identified in the <a href=\"https://netbeans.org/about/legal/product-licences.html\">License file</a>. See the <a href=\"https://netbeans.org/about/legal/product-licences.html\">Third Party License</a> for external components included in NetBeans and their associated licenses.";
