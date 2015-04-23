function flipCover (css, options) {
  var options = options || {};
  if (typeof css === "object") {
    options = css;
  } else {
    options.css = css;
  }

  var css = options.css;
  var url = options.url;
  var text = options.text || css;

  var $section = $(".flip-cover-" + css).addClass(css + "-section");
  var $button =  $("<div>").addClass(css + "-button");
  var $cover =   $("<div>").addClass(css + "-cover");
  var $outer =   $("<div>").addClass(css + "-outer");
  var $inner =   $("<div>").addClass(css + "-inner");

  $cover.html($outer);
  $inner.insertAfter($outer);

  $button.html($("<a>").text(text).attr("href", url));

  $section.html($button);
  $cover.insertAfter($button);
 };
