<%include "header.gsp"%>
<main>
    <article>
        <% if(content.summary) { %>
        <h1>${content.summary}</h1>
        <%}%>
        ${content.body}
    </article>
</main>
<%include "footer.gsp"%>