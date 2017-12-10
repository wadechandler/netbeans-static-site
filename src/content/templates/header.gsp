<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${content.metadata && content.metadata.title ? content.metadata.title : "NetBeans - Fits the pieces together"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,700,800,600' rel='stylesheet' type='text/css'>
        <% if(content.metadata && content.metadata.keywords) {%>
        <meta name="keywords" content="${content.metadata.keywords}">
        <%}%>
        <% if(content.metadata && content.metadata.description) {%>
        <meta name="description" content="${content.metadata.description}">
        <%}%>
        <link href='${content.rootpath ? content.rootpath : "/"}css/foundation.min.css' rel='stylesheet' type='text/css'>
        <link href='${content.rootpath ? content.rootpath : "/"}css/netbeans.css' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <% /* Foundation 6 top bar. See https://foundation.zurb.com/sites/docs/top-bar.html */ %>
        <div class="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
          <button class="menu-icon" type="button" data-toggle="responsive-menu"></button>
          <div class="title-bar-title">NetBeans</div>
        </div>
        <div class="top-bar" id="responsive-menu">
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <li><a href="//netbeans.org/features/index.html">NetBeans IDE</a></li>
              <li><a href="//netbeans.org/features/platform/index.html">NetBeans Platform</a></li>
              <li><a href="//netbeans.org/enterprise/index.html">Enterprise</a></li>
              <li><a href="//plugins.netbeans.org/PluginPortal/">Plugins</a></li>
              <li><a href="//netbeans.org/kb/index.html">Docs & Support</a></li>
              <li><a href="//netbeans.org/community/index.html">Community</a></li>
            </ul>
          </div>
          <div class="top-bar-right">
            <ul class="menu">
              <li><a href="/"><img style='height: 24px; vertical-align: middle;' src="${content.rootpath ? content.rootpath : "/"}images/logo-2.svg" alt="logo" /> Apache NetBeans</a></li>
            </ul>
          </div>
        </div>

