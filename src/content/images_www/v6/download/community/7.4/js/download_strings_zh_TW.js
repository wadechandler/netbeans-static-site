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

var BUNDLED_SERVERS_GROUP_NAME = "\u5167\u5efa\u7684\u4f3a\u670d\u5668";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "NetBeans IDE \u4e0b\u8f09\u5957\u4ef6";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "\u7531\u793e\u7fa4\u8ca2\u737b\u7684\u5404\u570b\u8a9e\u8a00 NetBeans IDE \u4e0b\u8f09\u5957\u4ef6";
var NETBEANS_PACKS_MSG 		  = "\u652f\u63f4\u7684\u6280\u8853";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

//var JDK_NOTE_ALL      = "\u5b89\u88dd\u8207\u904b\u884c PHP\u3001Ruby \u8207 C/C++ \u7b49 NetBeans \u5957\u4ef6\uff0c\u9700\u8981 Java 6 \u6216 Java 5\u3002\u60a8\u53ef\u4ee5\u5230 <a href=\"{0}\">java.com \u4e0b\u8f09\u6700\u65b0\u7684 Java \u7248\u672c</a>\u3002<br><br>\u5b89\u88dd\u8207\u904b\u884cJava SE\u3001JavaFX\u3001Java \u8207\u6240\u6709 NetBeans \u5957\u4ef6\uff0c\u9700\u8981 JDK 6 \u8207 JDK 5\u3002\u60a8\u53ef\u4e0b\u8f09 <a href=\"{1}\">\u7368\u7acb\u904b\u884c\u7684 JDK</a> \u6216\u4e0b\u8f09\u6700\u65b0\u7248\u672c\u7684 <a href=\"{2}\">JDK \u8207 NetBeans IDE Java SE \u5957\u4ef6</a>\u3002<br><br>";
var JDK_NOTE_ALL      = "Java 6 is required for installing and running the PHP and C/C++ NetBeans Bundles. You can download the <a href=\"{0}\">latest Java at java.com</a>.<br><br>JDK 6 is required for installing and running the Java SE, Java EE and All NetBeans Bundles. You can download <a href=\"{1}\">standalone JDK</a> or download the latest <a href=\"{2}\">JDK with NetBeans IDE Java SE bundle</a>.<br><br>";

//var JDK_NOTE_MACOSX   = "\u5b89\u88dd\u8207\u904b\u884c NetBeans IDE\uff0c\u9700\u8981 JDK 5.0\u3002";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "\u514d\u8cbb,&nbsp;{0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "\u5099\u8a3b\uff1a";
var NOTE_AND_SEP   = "{0} \u8207 {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} is not available in {1}";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} is not available for {1}";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} are not available in {1}";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} are not available for {1}";

var ZIP_FILES_LIST_NAME             = "Zip \u6a94";
var MODULE_CLUSTERS_FILES_LIST_NAME = "Module \u96c6\u5408";

var NOTE_SOLARIS = "\u5099\u8a3b\uff1aJava ME \u53ea\u9069\u7528\u65bc Windows \u8207 Linux\u3002<br>UML \u5957\u4ef6\u5b58\u5728\u65bc\u66f4\u65b0\u4e2d\u5fc3\u3002";
var NOTE_MACOSX  = "\u5099\u8a3b\uff1aJava ME \u53ea\u9069\u7528\u65bc Windows \u8207 Linux\u3002<br>UML \u5957\u4ef6\u5b58\u5728\u65bc\u66f4\u65b0\u4e2d\u5fc3\u3002";
var NOTE_ZIP     = "\u5099\u8a3b\uff1aGlassFish \u8207 Apache Tomcat \u50c5\u63d0\u4f9b\u9069\u7528\u65bc\u5404\u5e73\u53f0\u7684\u5b89\u88dd\u7a0b\u5f0f\u3002UML \u5957\u4ef6\u5b58\u5728\u65bc\u66f4\u65b0\u4e2d\u5fc3\u3002";
var NOTE_OTHER   = "\u5099\u8a3b\uff1aUML \u5957\u4ef6\u5b58\u5728\u65bc\u66f4\u65b0\u4e2d\u5fc3\u3002";
var NOTE_JAVAFX  = "\u53ea\u5b58\u5728\u65bc <a href=\"{0}\">NetBeans&nbsp;6.5.1</a>";
var NOTE_ALL     = "Note: Greyed out technologies are not supported for this platform.";

var MORE_LANGUAGES    = "\u66f4\u591a\u8a9e\u8a00...";
var COMMUNITY_MESSAGE = "NetBeans \u793e\u7fa4\u8ca2\u737b\u4e86\u6240\u6709\u53ef\u5728\u6b64\u7db2\u9801\u4e0b\u8f09\u7684\u8a9e\u8a00\u3002\u5982\u6b32\u67e5\u8a62\u66f4\u591a\u6709\u95dc\u5730\u5340\u5316\u5957\u4ef6\u7684\u8cc7\u8a0a\uff0c\u8acb\u53c3\u7167 <a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\">\u793e\u7fa4\u72c0\u614b\u7db2\u9801</a>\u3002\u5982\u6b32\u4e0b\u8f09\u6700\u65b0\u7531\u793e\u7fa4\u6240\u8ca2\u737b\u7684\u8a9e\u8a00\u5957\u4ef6\uff0c\u8acb\u53c3\u8a2a <a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">\u5730\u5340\u5316\u5916\u639b\u7db2\u9801</a>\u3002";
var COMMUNITY_CONTRIBUTED_SEP    = " -- \u793e\u7fa4\u8ca2\u737b -- " ;
var SUN_SUPPORTED_SEP            = " -- \u6607\u967d\u8d0a\u52a9 -- " ;

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "NetBeans IDE \u4e0b\u8f09";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "NetBeans IDE \u4e0b\u8f09";


var NETBEANS_DOWNLOAD_HEADER = "NetBeans IDE {0} \u4e0b\u8f09";
var DEVELOPMENT_TITLE        = "\u958b\u767c\u7248\u672c";
var ARCHIVE_TITLE            = "\u6b77\u53f2\u5c01\u5b58";
var PYTHON_TITLE             = "Python&nbsp;EA";
var EMAIL_LABEL              = "\u96fb\u5b50\u90f5\u4ef6\u4f4d\u5740(\u9078\u64c7\u6027)\uff1a&nbsp;";
var SUBSCRIBE_LABEL          = "\u8a02\u95b1\u96fb\u5b50\u5831\uff1a";
var MONTHLY_LABEL            = "\u6bcf\u6708";
var WEEKLY_LABEL             = "\u6bcf\u5468";
var CONTACT_LABEL            = "NetBeans \u53ef\u4ee5\u900f\u904e\u96fb\u5b50\u90f5\u4ef6\u806f\u7d61\u60a8";
var LANGUAGE_LABEL           = "IDE \u8a9e\u8a00\uff1a";
var PLATFORM_LABEL           = "\u5e73\u53f0\uff1a";
var PLUGIN_MANAGER_LABEL     = "\u7a0d\u5f8c\u60a8\u53ef\u4ee5\u900f\u904e IDE \u7684\u5916\u639b\u7ba1\u7406\u5668 (\u5de5\u5177|\u5916\u639b) \u4f86\u65b0\u589e\u6216\u79fb\u9664\u5916\u639b\u3002<br><br>";
var JAVATOOLSBUNDLE_LABEL    = "\u4e0b\u8f09\u5176\u4ed6 NetBeans IDE \u7684\u6574\u5408\u7248\u672c\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5230 <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">Java EE 5 \u5de5\u5177\u6574\u5408\u7248</a> \u6216 <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">MySQL GlassFish \u6574\u5408\u7248</a>\u3002";
var SOURCE_BINARY_LABEL      = "NetBeans \u539f\u59cb\u78bc\u8207\u53ef\u57f7\u884c\u6a94\u7686\u6709 <a id=\"zip_link\" href=\"{0}\">zip \u6a94\u683c\u5f0f\u7684\u7248\u672c</a>\u3002";
var BUILD_WIKI_LABEL         = "\u8acb\u53c3\u898b<a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\">\u5982\u4f55\u5f9e\u539f\u59cb\u78bc\u5efa\u69cb IDE \u6b65\u9a5f</a>\u6216<a href=\"{0}\">\u5b89\u88dd\u6b65\u9a5f</a>\u3002";
var PLATFORM_DEV_LABEL       = "\u60a8\u53ef\u4ee5\u4f7f\u7528 NetBeans IDE \u4e2d\u7684 Java SE \u958b\u59cb\u958b\u767c\u57fa\u65bc NetBeans \u5e73\u53f0\u7684\u61c9\u7528\u7a0b\u5f0f\u3002\u66f4\u591a\u8cc7\u8a0a\u8acb\u53c3\u8003 <a href=\"{0}\">NetBeans \u5e73\u53f0</a>\u3002";
var PLATFORM_INFO_LINK       = "http://platform.netbeans.org/platform-get.html";

var LICENSE_NOTES_LINK      = "http://www.netbeans.org/about/legal/product-licences.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";
var PYTHON_LINK             = "http://download.netbeans.org/netbeans/6.5/python/ea/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download_zh_TW.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d_zh_TW.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h_zh_TW.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";
