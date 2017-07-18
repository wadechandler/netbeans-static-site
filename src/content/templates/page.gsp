<%include "header.gsp"%>
<main>
    <article>
        <% if((content.metadata && content.metadata.summary) || content.summary) { %>
        <h1>${content.summary ?: content.metadata.summary}</h1>
        <%}%>
        ${content.body}
    </article>
</main>
<%include "footer.gsp"%>