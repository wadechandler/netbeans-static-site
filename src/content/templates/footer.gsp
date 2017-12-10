        <footer class='grid-container'>
            <h4>Page is a work in progress</h4>
            <div class='grid-x grid-padding-x grid-margin-x'>
                <div class='cell'>
                    <a class="circle with-icon fb" href="//www.facebook.com/NetBeans"> facebook</a>
                    <a class="circle with-icon twitter" href="//twitter.com/netbeans"> twitter</a>
                    <a class="circle with-icon plus" href="//plus.google.com/+netbeans"> google +</a>
                    <a class="circle with-icon slack" href="//netbeans.signup.team/"> slack</a>
                    <a class="circle with-icon youtube" href="//www.youtube.com/user/netbeansvideos"> youtube</a>
                </div>
                <div class="cell">
                            Apache NetBeans is an effort undergoing incubation at The Apache Software
                            Foundation (ASF). Incubation is required of all newly accepted projects
                            until a further review indicates that the infrastructure, communications,
                            and decision making process have stabilized in a manner consistent with
                            other successful ASF projects. While incubation status is not necessarily a
                            reflection of the completeness or stability of the code, it does indicate
                            that the project has yet to be fully endorsed by the ASF.
                </div> 
             </div>
        </footer>
        <script src="${content.rootpath ? content.rootpath : "/"}js/jquery-3.2.1.min.js"></script>
        <script src="${content.rootpath ? content.rootpath : "/"}js/what-input.js"></script>
        <script src="${content.rootpath ? content.rootpath : "/"}js/foundation.min.js"></script>
        <% /* \$ below is required to scape '$' from groovy */ %>
        <script>
            \$(document).foundation();
        </script>
    </body>
</html>
