### Objects 

Defining an object: 
```js 
var course = new Object(); 

course.title = "Learning Javascript"; 
course.level = "Beginner"; 
course.published = true; 

console.log(course);

{title: "Learning Javascript", level: "Beginner", published: true}
```
There is another shorthand: 
```js 
var course = new Object(); 

var course = {
    title: "Learning Javascript", 
    level: "Beginner", 
    published: true,  
}
```

Apart from the object properties, we can also have object methods, to do something on the data. Methods are functions. 
```js 
var course = new Object(); 

var course = {
    title: "Learning Javascript", 
    level: "Beginner", 
    published: true,  
    views: 0,  
    updateViews: function(){
        return ++course.views;
    }
}
```

You can try printing out `course.updateViews()` repeatedly. 

#### Object constructor 

These are sort of templates we can reuse. 
```js 
function Course(title, level, published, views) {
    this.title = title; 
    this.level = level; 
    this.published = published; 
    this.views = views; 
    this.updateViews = function() {
        return ++this.views; 
    }; 
}

var course01 = new Course("Learning Javascript", "Beginner", true, "0"); 

console.log(course01)

Course {title: "Learning Javascript", level: "Beginner", published: true, views: "0", updateViews: function}
```

**Note: ** Often we might need to work with external objects and they might have strange naming convention, like `fonts:serif`. In such cases, javascript will return error if you use dot notation `course.fonts:serif`. There is a bracket notation to call properties as well `course["fonts:serif"]`.   
