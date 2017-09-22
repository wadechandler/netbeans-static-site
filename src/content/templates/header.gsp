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
    </head>
    <body>
        <header>
            <div class="inner flex-container-small">
                <nav>
                    <div id="burger-menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul>
                        <li><a class="nav-link" href="//netbeans.org/features/index.html">NetBeans IDE</a></li>
                        <li><a class="nav-link" href="//netbeans.org/features/platform/index.html">NetBeans Platform</a></li>
                        <li><a class="nav-link" href="//netbeans.org/enterprise/index.html">Enterprise</a></li>
                        <li><a class="nav-link" href="//plugins.netbeans.org/PluginPortal/">Plugins</a></li>
                        <li><a class="nav-link" href="//netbeans.org/kb/index.html">Docs & Support</a></li>
                        <li><a class="nav-link" href="//netbeans.org/community/index.html">Community</a></li>
                    </ul>
                </nav>

                <a href="/" id="logo">
                    <img src="${content.rootpath ? content.rootpath : "/"}images/logo-2.svg" alt="logo" />
                    <div>
                        Apache <strong>Net</strong>Beans
                    </div>
                </a>
            </div>
            <form class="search-field">
                <input type="text" />
                <button class="search with-icon"></button>
            </form>
        </header>