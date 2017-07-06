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

var AUTOMATIC_DOWNLOAD_MESSAGE  = "\uc790\ub3d9\uc73c\ub85c \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc2dc\uc791\ub429\ub2c8\ub2e4<br>,\ub9cc\uc57d \uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74, <a href=\"{0}\" class=\"download_link\">\uc774\uacf3\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ud558\uc2ed\uc2dc\uc624</a>.<br>";

var PRODUCT_NAME      = "\ub137\ube48\uc988 {0}";
var INSTALLER_MESSAGE = "{0}\uc744(\ub97c) \uc704\ud55c \uc124\uce58 \ud504\ub85c\uadf8\ub7a8";
var NOFILE_MESSAGE    = "\uc694\uccad\ub41c \ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4" ;

var NETBEANS_DOWNLOAD_STARTED_PAGE_TITLE       = "\ub137\ube48\uc988 IDE \ub2e4\uc6b4\ub85c\ub4dc \uc2dc\uc791\ub428";
var NETBEANS_DOWNLOAD_STARTED_PAGE_DESCRIPTION = "\ub137\ube48\uc988 IDE \ub2e4\uc6b4\ub85c\ub4dc \uc2dc\uc791\ub428";

var NETBEANS_DOWNLOAD_STARTED_HEADER = "\ub137\ube48\uc988 IDE {0} \ub2e4\uc6b4\ub85c\ub4dc \uc2dc\uc791\ub428";
var RELEASE_NOTES_LABEL = "\ub9b4\ub9ac\uc988 \ub178\ud2b8";
var INSTALL_NOTES_LABEL = "\uc124\uce58 \ub3c4\uc6c0\ub9d0";
var FIND_OUT_MORE_LABEL = "\uc880\ub354 \uc54c\uc544\ubcf4\uae30";
var PLUGINS_LABEL       = "\ud50c\ub7ec\uadf8\uc778";
var PLUGINS_DESCRIPTION = "\ub137\ube48\uc988 \ucee4\ubba4\ub2c8\ud2f0\uc640 \uc11c\ub4dc\ud30c\ud2f0 \ubca4\ub354\ub4e4\uc5d0 \uc758\ud574 \uc81c\uacf5\ub428.";
var TUTORIALS_LABEL     = "\uc790\uc2b5\uc11c";
var TUTORIALS_DESCRIPTION = "\ub137\ube48\uc988 \ucee4\ubba4\ub2c8\ud2f0\uc640 \uc804\ubb38\uac00\ub4e4\uc5d0 \uc758\ud574 \uc791\uc131\ub418\uace0 \uae30\ub85d\ub428.";
var TRAINING_LABEL = "\uad50\uc721";
var TRAINING_DESCRIPTION = "\uadc0\ud558\uc758 \uc2a4\ud0ac\uc744 \ud5a5\uc0c1\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uacfc\uc815\ub4e4";
var SUPPORT_LABEL        = "\uc9c0\uc6d0";
var SUPPORT_DESCRIPTION  = "\ud601\uc2e0\uc5d0 \ucd1b\uc810\uc744 \ub454 \uc720\uc5f0\ud55c \uc9c0\uc6d0 \uc635\uc158.";

// $PRODUCT_NAME $TYPE (Installer for $PLATFORM/Zip)/$Language ($Language_ID) $filename ($SIZE) MD5: $MD5
var INFO_MESSAGE = "{0}{1} {2}/{3} ({4})<br>{5} ({6} MB)<br>MD5: {7}";
var INFO_MESSAGE_OTHER = "{0} ({1} MB)<br>MD5: {2}";

//DO NOT TRANSLATE
var SUBSCRIPTION_PHP_URL = "http://services.netbeans.org/sub.php";


