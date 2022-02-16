---
title: Event handler
---

We can do something based on the browser events, like when a button is clicked,
page is scrolled etc.

Let's create a simple html page:
```html
<html>
    <head>
        <title>Event Handler</title>
        <style>
            .header {
                background-color: aqua;
            }
        </style>
    </head>

    <body>
        <h1 class="header">Hello Event Handler</h1>
    </body>

    <script>
        const topHeader = document.querySelector(".header");

        function clicked() {
            alert("Top header is clicked!")
        }

        topHeader.onclick = clicked;
    </script>
</html>
```

Now whenever we click our header, we will see an alert saying, "Top header is
clicked". The full list of browser events are available in [MDN website](
https://developer.mozilla.org/en-US/docs/Web/Events).
