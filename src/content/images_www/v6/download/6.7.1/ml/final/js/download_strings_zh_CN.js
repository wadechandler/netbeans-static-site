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

var BUNDLED_SERVERS_GROUP_NAME = "\u7ED1\u5B9A\u7684\u670D\u52A1\u5668";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "NetBeans IDE \u4E0B\u8F7D\u5305";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "\u7531\u793E\u533A\u7FFB\u8BD1\u7684 NetBeans IDE \u4E0B\u8F7D\u5305";
var NETBEANS_PACKS_MSG 		  = "\u6240\u652F\u6301\u7684\u6280\u672F";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

var JDK_NOTE_ALL      = "\u5B89\u88C5\u548C\u8FD0\u884C PHP\u3001Ruby\u3001C/C++ \u8FD9\u4E9B NetBeans \u5305\u65F6\u9700\u8981 Java 6 \u6216 Java 5\u3002\u60A8\u53EF\u4EE5\u4E0B\u8F7D<a href=\"{0}\">java.com \u4E0A\u6700\u65B0\u7684 Java \u7248\u672C</a>\u3002<br><br>\u5B89\u88C5\u548C\u8FD0\u884C Java SE\u3001JavaFX\u3001Java\u3001All \u8FD9\u4E9B NetBeans \u5305\u65F6\u9700\u8981 JDK 6 \u6216 JDK 5\u3002 \u60A8\u53EF\u4EE5\u4E0B\u8F7D<a href=\"{1}\">\u5355\u72EC\u7684 JDK</a> \u6216\u8005\u4E0B\u8F7D\u6700\u65B0\u7684 <a href=\"{2}\">JDK \u548C NetBeans IDE Java SE \u5B89\u88C5\u5305</a>\u3002<br><br>";
//var JDK_NOTE_MACOSX   = "JDK 5.0 is required for installing and running the NetBeans IDE.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "\u514D\u8D39\uFF0C{0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "\u8BF7\u6CE8\u610F\uFF1A";
var NOTE_AND_SEP   = "{0} \u548C {1}";
var NOTE_COMMA_SEP = "{0}\uFF0C{1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} \u4E0D\u5728 {1} \u4E2D";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} \u4E0D\u5728 {1} \u4E2D";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} \u4E0D\u5728 {1} \u4E2D";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} \u4E0D\u5728 {1} \u4E2D";

var ZIP_FILES_LIST_NAME             = "Zip \u6587\u4EF6";
var MODULE_CLUSTERS_FILES_LIST_NAME = "\u6A21\u5757\u7FA4\u96C6";

var NOTE_SOLARIS = "\u8BF7\u6CE8\u610F\uFF1AJava ME \u4EC5\u53EF\u7528\u4E8E Windows \u548C Linux \u4E0A\u3002";
var NOTE_MACOSX  = "\u8BF7\u6CE8\u610F\uFF1AJava ME \u4EC5\u53EF\u7528\u4E8E Windows \u548C Linux \u4E0A\u3002";
var NOTE_ZIP     = "\u8BF7\u6CE8\u610F\uFF1A\u53EA\u6709\u67D0\u4E9B\u7279\u5B9A\u5E73\u53F0\u7684\u5B89\u88C5\u5305\u4E2D\u5305\u542B GlassFish \u548C Apache Tomcat\u3002";
var NOTE_OTHER   = "\u8BF7\u6CE8\u610F\uFF1AUML \u73B0\u653E\u5728\u66F4\u65B0\u4E2D\u5FC3\u4E0A\u3002";
var NOTE_JAVAFX  = "\u4EC5\u5728 <a href=\"{0}\">NetBeans&nbsp;6.5.1</a> \u4E2D\u4F7F\u7528";

var MORE_LANGUAGES    = "\u66F4\u591A\u8BED\u8A00\u7248\u672C...";
var COMMUNITY_MESSAGE = "\u6B64\u9875\u9762\u53EF\u4E0B\u8F7D\u7684\u5404\u79CD\u8BED\u8A00\u7248\u672C\u5B8C\u5168\u7531 NetBeans \u793E\u533A\u8D21\u732E\u3002\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u7FFB\u8BD1\u91CF\u7684\u4FE1\u606F\u53EF\u53C2\u8003<a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\">\u793E\u533A\u7FFB\u8BD1\u72B6\u6001</a>\u9875\u9762\u3002\u8981\u60F3\u4E0B\u8F7D\u793E\u533A\u6700\u65B0\u7684\u8D21\u732E\uFF0C\u8BF7\u8BBF\u95EE<a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">\u672C\u5730\u5316\u63D2\u4EF6</a>\u9875\u9762\u3002";
var COMMUNITY_CONTRIBUTED_SEP    = " -- \u7531\u793E\u533A\u8D21\u732E -- " ;
var SUN_SUPPORTED_SEP            = " -- \u7531 Sun \u652F\u6301 -- " ;

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "NetBeans IDE \u4E0B\u8F7D";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "NetBeans IDE \u4E0B\u8F7D";

var NETBEANS_DOWNLOAD_HEADER = "NetBeans IDE {0} \u4E0B\u8F7D";
var DEVELOPMENT_TITLE        = "\u5F00\u53D1\u7248";
var ARCHIVE_TITLE            = "\u65E9\u671F\u7248";
var PYTHON_TITLE             = "Python&nbsp;EA";
var EMAIL_LABEL              = "\u7535\u5B50\u90AE\u4EF6\u5730\u5740\uFF08\u53EF\u9009\uFF09\uFF1A";
var SUBSCRIBE_LABEL          = "\u8BA2\u9605\u65B0\u95FB\u90AE\u4EF6\uFF1A";
var MONTHLY_LABEL            = "\u6BCF\u6708&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "\u6BCF\u5468";
var CONTACT_LABEL            = "NetBeans&nbsp;\u53EF\u4F7F\u7528\u6B64\u5730\u5740\u8054\u7CFB\u6211"; 
var LANGUAGE_LABEL           = "IDE \u8BED\u8A00\uFF1A";
var PLATFORM_LABEL           = "\u5E73\u53F0\uFF1A"; 
var PLUGIN_MANAGER_LABEL     = "\u60A8\u53EF\u4EE5\u7A0D\u540E\u901A\u8FC7 IDE \u63D2\u4EF6\u7BA1\u7406\u5668\uFF08\u5DE5\u5177|\u63D2\u4EF6\uFF09\u6DFB\u52A0\u6216\u8005\u5220\u9664\u8F6F\u4EF6\u5305\u3002<br><br>"; 
var JAVATOOLSBUNDLE_LABEL    = "\u60A8\u4E5F\u53EF\u4EE5\u4E0B\u8F7D\u5305\u542B NetBeans IDE \u7684 <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">Java EE 5 \u5DE5\u5177\u5305</a> \u6216 <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">MySQL GlassFish \u5B89\u88C5\u5305</a>\u3002";
var SOURCE_BINARY_LABEL      = "NetBeans \u6E90\u4EE3\u7801\u548C\u4E8C\u8FDB\u5236\u751F\u6210\u6587\u4EF6\uFF08\u4E0D\u5305\u62EC\u96C6\u6210\u7684\u8FD0\u884C\u73AF\u5883\uFF09\u8FD8\u4EE5<a id=\"zip_link\" href=\"{0}\">zip \u6587\u4EF6\u683C\u5F0F</a>\u5B58\u5728\u3002";
var BUILD_WIKI_LABEL         = "\u8BF7\u53C2\u89C1<a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\">\u5982\u4F55\u7531\u6E90\u6587\u4EF6\u751F\u6210 IDE \u7684\u8BF4\u660E</a>\u6216<a href=\"{0}\">\u5B89\u88C5\u6307\u5BFC</a>\u3002";

var LICENSE_NOTES_LINK      = "https://netbeans.org/about/legal/product-licences.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";
var PYTHON_LINK              = "http://download.netbeans.org/netbeans/6.5/python/ea/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download_zh_CN.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d_zh_CN.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h_zh_CN.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";

var LEGAL_INFO_HEADER = "\u91CD\u8981\u7684\u6CD5\u5F8B\u4FE1\u606F\uFF1A";

var CDDL_GPLV2_LINK = "https://netbeans.org/cddl-gplv2.html";
var LICENSE_DETAILS_LINK = "https://netbeans.org/about/legal/code_dependency_matrix.html";

var LEGAL_INFO_MESSAGE = "\u5927\u90E8\u5206 NetBeans IDE {0} \u4EE3\u7801\u90FD\u662F\u5728\u53CC\u8BB8\u53EF\u8BC1\uFF0C\u5373<a href=\"{1}\">\u901A\u7528\u5F00\u53D1\u548C\u53D1\u5E03\u8BB8\u53EF\u8BC1(CDDL) 1.0 \u548C GNU \u901A\u7528\u516C\u5171\u8BB8\u53EF\u8BC1(GPL) v2</a>\u5141\u8BB8\u4E0B\u53EF\u7528\u3002\u8BE6\u7EC6\u4FE1\u606F\u53C2\u89C1<a href=\"{2}\">NetBeans \u4E2D\u7684\u7EC4\u4EF6</a>\u4EE5\u53CA\u9002\u7528\u4E8E\u8FD9\u4E9B\u7EC4\u4EF6\u7684\u8BB8\u53EF\u8BC1\u3002\u8BF7\u9605\u8BFB<a href=\"{3}\">\u6CD5\u5F8B\u58F0\u660E</a>\u3002";

var NEW_SUBSCRIBE_WEEKLY_LABEL        = "\u8BA2\u9605\u6BCF\u5468\u65F6\u8BAF";
var NEW_SUBSCRIBE_EMAIL_LABEL         = "E-mail:";
var NEW_SUBSCRIBE_MESSAGE_SUBSCRIBED  = "{0} \u5DF2\u8BA2\u9605\u6BCF\u5468\u65F6\u8BAF";
var SUBSCRIBE_BUTTON_HIGHLIGHT        = "subscribe_h_zh_CN.gif";
var SUBSCRIBE_BUTTON_NORMAL           = "subscribe_zh_CN.gif";
var NEW_SUBSCRIBE_MESSAGE_INVALID     = "\u8bf7\u6307\u5b9a\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u8ba2\u9605";
