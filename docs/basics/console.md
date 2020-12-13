### Introduction to Browser console  

Once you are on the browser console, you will see a sort of terminal with **>** prompt waiting for you to type commands. 

First of all, we can print something like "Hello, world!". One way is to issue a browser alert. 
```js 
> alert("Hello Javascript!")
``` 

Press **return** and you will see a browser alert saying "Hello Javascript". You have to click close or Ok to dismiss the alert. This could be bit annoying, so we will directly print in our console: 
```js 
> console.log("Hello Javascript!") 

Hello Javascript!
``` 

We can do some basic math as well. 
```js 
> console.log(3 + 5.6)

8.6 
``` 

We can assign some variables as well, and operate on them. 
```js 
> var name = "Pranab" 
  console.log(name)

Pranab 

> var x = 7; 
  var y = 4; 
  var mult = x*y; 
  console.log(mult)

28 
``` 

You get the idea. Note that it is not necessary to end a line in Javascript with semicolon, this is just my personal preference for better code readability. 

We can do something bit more advanced like getting printing the date:
```js 
> var date = new Date(); 
  console.log(date)

Wed Apr 22 2020 13:18:27 GMT+0800 (+08) 
``` 

We assigned our date variable a new object called `Date()`. 

Now what if we want to print something on the browser viewport? For that we need to understand the structure of our html page. We have an html page with empty body. We will inject something on the body. 
```js 
document.body.innerHTML = "<p> Today is: " + date + "</p>"
``` 

Now you see the paragraph with date appearing in our html viewport. However, the date object is bit messy. We can clean it up using some methods: 
```js 
document.body.innerHTML = "<p> Today is : " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + ".</p>"
```

However, you will notice one wired thing. The month is previous month. Here the month count starts from 0 (but not the date and Year though), wo we need to add 1 to the month to get correct month. 
```js 
document.body.innerHTML = "<p> Today is : " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + ".</p>"
``` 

Note that whatever we are doing in the console are not saved anywhere. So we reload the page, everything will be gone. Console is the playground for you to test your Javascript. 

We can preserve our Javascript code by putting it inline with the html page or writing the javascript in a separate file, and loading the file with the html. 

We can write javascript inline with html within the `<script></script>` tags. 

#### Linking to external script files 

Here we will write our javascript in a separate file called *script.js*. We will add the script tag after the body element. 
```js
<script src="script.js"></script>
```
Now we can write our code in the file script.js and reload the index.html to see our changes. 

Note that if we put the script tag in the head, we need to include `defer` or `async` attribute, otherwise it will run into problem of finding the body element before it is created. 
