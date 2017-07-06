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

var BUNDLED_SERVERS_GROUP_NAME = "Servidores&nbsp;embutidos";
                                                   
var MOBILITY_E2E_MESSAGE 	  = "O Assistente de conex\u00e3o Mobility Web Services est\u00e1 incluso apenas na op\u00e7\u00e3o de download \"Tudo\",<br>e n\u00e3o na op\u00e7\u00e3o de download \"Mobility\".";
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "Distribui\u00e7\u00f5es para baixar do NetBeans IDE";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "Baixar distribui\u00e7\u00f5es do NetBeans IDE em linguagens contribu\u00eddas pela comunidade";
var NETBEANS_PACKS_MSG 		  = "NetBeans&nbsp;Pacotes";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JDK_NOTE_ALL      = "JDK 6 ou JDK 5.0 \u00e9 necess\u00e1rio para instalar e executar o NetBeans IDE. Voc\u00ea pode baixar o <a href=\"{0}\">JDK independente</a> ou a \u00faltima vers\u00e3o do <a href=\"{1}\">JDK6 Update {2} com o NetBeans IDE Java SE embutido</a>.";
var JDK_NOTE_MACOSX   = "JDK 5.0 \u00e9 necess\u00e1rio para instalar e executar o NetBeans IDE.";

var FREE_SIZE_MESSAGE  = "{0}&nbsp;MB&nbsp;livre(s)";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "Nota: ";
var NOTE_AND_SEP   = "{0} e {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} n\u00e3o est\u00e1 dispon\u00edvel em {1}";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} n\u00e3o est\u00e1 dispon\u00edvel para {1}";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} n\u00e3o est\u00e3o dispon\u00edveis em {1}";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} n\u00e3o est\u00e3o dispon\u00edveis para {1}";

var ZIP_FILES_LIST_NAME             = "Zip Files";
var MODULE_CLUSTERS_FILES_LIST_NAME = "Module Clusters";

var NOTE_SOLARIS = "Nota: Mobility est\u00e1 dispon\u00edvel apenas para Windows e Linux.";
var NOTE_MACOSX  = "Nota: Mobility est\u00e1 dispon\u00edvel apenas para Windows e Linux. UML para Mac OS X est\u00e1 dispon\u00edvel apenas a partir do Gerenciador de Plugin do IDE (Ferramentas | Plugins).";
var NOTE_ZIP     = "Nota: GlassFish e Apache Tomcat est\u00e3o dispon\u00edveis apenas nos instaladores para plataformas espec\u00edficas.";

var MORE_LANGUAGES    = "Mais idiomais...";
var COMMUNITY_MESSAGE = "A comunidade NetBeans contribuiu para o(s) idioma(s) que pode(m) ser(em) baixada(s) a partir desta p\u00e1gina";

var NETBEANS_DOWNLOAD_HEADER = "Baixar o NetBeans IDE {0}";
var DEVELOPMENT_TITLE        = "Desenvolvimento";
var ARCHIVE_TITLE            = "Arquivo";
var EMAIL_LABEL              = "Endere\u00e7o&nbsp;de&nbsp;email&nbsp;(opcional):&nbsp;";
var SUBSCRIBE_LABEL          = "Inscrever-se&nbsp;na&nbsp;newsletter:";
var MONTHLY_LABEL            = "Mensal&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "Semanal";
var CONTACT_LABEL            = "NetBeans&nbsp;pode&nbsp;me&nbsp;contatar&nbsp;nesse&nbsp;endere\u00e7o";
var LANGUAGE_LABEL           = "Idioma:";
var PLATFORM_LABEL           = "Plataforma:";
var PLUGIN_MANAGER_LABEL     = "Voc\u00ea pode adicionar ou remover pacotes depois utilizando o Gerenciador de Plugins do IDE (Ferramentas | Plugins).<br><br>";
var JAVATOOLSBUNDLE_LABEL    = "Voc\u00ea tamb\u00e9m pode baixar o NetBeans IDE como parte de <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">Java EE 5 Ferramentas embutidas</a> ou <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">MySQL GlassFish Embutidos</a>.";
var SOURCE_BINARY_LABEL      = "O c\u00f3digo-fonte e os bin\u00e1rios do NetBeans sem os servidores embutidos tamb\u00e9m est\u00e3o dispon\u00edveis em <a href=\"javascript: open_zip_link()\">formato de arquivo zip</a>.";
var BUILD_WIKI_LABEL         = "Veja tamb\u00e9m <a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\">instru\u00e7\u00f5es de como construir o IDE a partir do c\u00f3digo-fonte</a> ou <a href=\"{0}\">instru\u00e7\u00f5es de instala\u00e7\u00e3o</a>.";

var LICENSE_NOTES_LINK      = "https://netbeans.org/about/legal/product-licences.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";

var PYTHON_LINK              = "http://download.netbeans.org/netbeans/6.5/python/ea/";
var PYTHON_TITLE             = "Python&nbsp;EA";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
// PLEASE: Verify if the translated path image is correct :)
var DOWNLOAD_BUTTON_NORMAL    = "/images_www/v6/download/6.1/ml/final/img/download_pt_BR.gif";
var DOWNLOAD_BUTTON_DISABLED  = "/images_www/v6/download/6.1/ml/final/img/download_d_pt_BR.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "/images_www/v6/download/6.1/ml/final/img/download_h_pt_BR.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";

var LEGAL_INFO_HEADER = "Informa\u00e7\u00e3o legal importante:";

var CDDL_GPLV2_LINK = "https://netbeans.org/cddl-gplv2.html";
var LICENSE_DETAILS_LINK = "https://netbeans.org/about/legal/code_dependency_matrix.html";

var LEGAL_INFO_MESSAGE = "NetBeans Community Distributions are available under a Dual License consisting of the <a href=\"https://netbeans.org/cddl-gplv2.html\">Common Development and Distribution License (CDDL) v1.0 and GNU General Public License (GPL) v2</a>. Such distributions include additional components under separate licenses identified in the <a href=\"https://netbeans.org/about/legal/product-licences.html\">License file</a>. See the <a href=\"https://netbeans.org/about/legal/product-licences.html\">Third Party License</a> for external components included in NetBeans and their associated licenses.";
