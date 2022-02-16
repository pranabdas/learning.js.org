---
title: Document Object Model
sidebar_label: DOM
---

The Web browser is itself an object, Browser Object. We can interact with it
like we do with any other object. We can get the window size using an object
property, or open a new tab using a method. The html content inside the BOM, is
called DOM. Here, we will discuss how we can interact with various DOM elements.

For example, you can type these things in the console:
```js
document.URL
document.title
document.head
document.body
```
And it will return specific DOM elements.

For this tutorial, we will use another html file `dom-tutorial.html`.

#### querySelector

We can use `querySelector` to target any element in the html as we do in CSS.
Note that `querySelector` will return the first instance of the selection, while
`querySelectorAll` will return the list of all matching elements. Now try
yourself:
```js
document.querySelector("h2")
document.querySelector(".description")
document.querySelector("ul")
document.querySelectorAll("h4")
document.querySelectorAll("li")
```

### Access and change element

We can select and change and element in the html document:
```js
document.querySelector("h4.city").innerHTML
document.querySelector("h4.city").outerHTML
```

Now we can change these elements by simply assigning new values.
```js
document.querySelector("h4.city").innerHTML = "List of cities:"
```

We can access and change `class` or `id` as well:
```js
document.querySelector(".city").className
document.querySelector(".city").classList
document.querySelector(".city").classList.add("new-class")
document.querySelector(".city").classList.remove("new-class")
```
