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


var BUILD_DISPLAY_VERSION       = "6.5";
var BUILD_DISPLAY_VERSION_SHORT = "6.5";

var ZIP_FILES_PREFIX            = "netbeans-6.5-200811100001-ml";
var BUNDLE_FILES_PREFIX         = "netbeans-6.5-ml";
var FXBUNDLE_FILES_PREFIX       = "netbeans-6.5";
var BOUNCER_PRODUCT_PREFIX      = "netbeans-6.5";

var COMMUNITY_BUILD             = "0";
var ADD_MORE_REDIRECT_VALUE     = "1";
var MORE_LANGUAGES_REDIRECT_URL = "http://bits.netbeans.org/netbeans/6.5/community/latest/";

var BUILD_LOCATION = "http://download.netbeans.org/netbeans/6.5/final/";

var LOAD_OMNITURE_CODE = 1;
var LOAD_GOOGLE_ANALYTICS_CODE = 0;
var USE_BOUNCER = 0;
var ADD_VERSION_INFO_TO_URL = 1;

var BOUNCER_URL = "http://services.netbeans.org/bouncer/index.php";

var SOURCES_AND_BINARIES_URL = "javascript: open_zip_link()";
//var SOURCES_AND_BINARIES_URL = BUILD_LOCATION + "zip/";

function add_download_tabs() {
	add_download_tab("6.5");
	// add_download_tab(JAVAFX_TITLE, JAVAFX_LINK);
  add_download_tab("6.7", "https://netbeans.org/downloads/6.7/");
	add_download_tab(PYTHON_TITLE, PYTHON_LINK);
	add_download_tab(DEVELOPMENT_TITLE, DEVELOPMENT_BUILDS_LINK);
	add_download_tab(ARCHIVE_TITLE,ARCHIVE_BUILDS_LINK);
}
