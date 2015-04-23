# flipCover

FlipCover is a CSS/JS mixin for styling social media links.

![all_buttons][all_buttons]

### [Demo on CodePen](http://codepen.io/vveleva/pen/Areng)


# API


### .flipCover(css [, options])

#### Contents
- `.flipCover(css)`
- `.flipCover(css, jsObject)`
- `.flipCover(jsObject)`

<br>

| Options        | Description|
| ------------- |:-------------:|
| `css`      | CSS class of your choice |
| `text` | text inside the button      |
| `url`     | link for text      |
<br>

# Usage

Download `flip_cover.css` and `flip_cover.js` and place them in your assets.


### Examples

In your HTML file:

```html
<div class="flip-cover-dribbble"></div>
```

In your JS file:

```js
// Require the file
//= require flip_cover

// Call the function
flipCover({"dribbble", { url: "https://dribbble.com/vveleva", text: "vveleva" });

// Or pass everything as an object
flipCover({
  css: "dribbble",
  url: "https://dribbble.com/vveleva",
  text: "vveleva"
});
```

In your CSS file:

```scss
// Import the mixins
@import "flip_cover.scss"

// Call mixins
@include flip-cover("dribbble", "cover text", #FC1786, 80px);
```
###### Preview:

![dribbble][dribbble]

<br>
### Example of an email without a link

HTML:
```html
<div class="flip-cover-email"></div>
```

JS:
```js
flipCover("email", { text: "user@example.com" });
```

CSS:
```scss
@include flip-cover("email", "example", #F80, 80px);
```
###### Preview:

![email][email]


[all_buttons]: ./screenshots/all_buttons.png
[dribbble]: ./screenshots/dribbble.png
[email]: ./screenshots/email.png
