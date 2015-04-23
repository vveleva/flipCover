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

| Options       | Description              | Default         |
| ------------- |:------------------------:|:---------------:|
| `css`         | CSS class of your choice | required        |
| `text`        | text inside the button   | `css`           |
| `url`         | link for text            | N/A             |
| `width`       | width of button          | length of `text`|
| `height`      | height of button         | 40px (number less 40px will be ignored)|

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
// Require file
//= require flip_cover

// Call function
flipCover({"dribbble", { url: "https://dribbble.com/vveleva", text: "vveleva" });

// you can also pass everything as an object
flipCover({
  css: "dribbble",
  url: "https://dribbble.com/vveleva",
  text: "vveleva",
  width: "80px"
});
```

In your CSS file:

```scss
// Import mixin
@import "flip_cover.scss"

// Call mixin
@include flip-cover("dribbble", "d", #FC1786);
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
@include flip-cover("email", "example", #F80);
```
###### Preview:

![email][email]


[all_buttons]: ./screenshots/all_buttons.png
[dribbble]: ./screenshots/dribbble.png
[email]: ./screenshots/email.png
