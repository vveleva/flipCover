function flipCover (css, options) {
  var options = options || {};
  if (typeof css === "object") {
    options = css;
  } else {
    options.css = css;
  }

  var css = options.css;
  var url = options.url;
  var text = options.text || "";

  var $section = $(".flip-cover-" + css).addClass(css + "-section");
  var $button = $("<div>").addClass(css + "-button");
  $button.html($("<a>").text(text).attr("href", url));
  var $cover = $("<div>").addClass(css + "-cover");
  $cover.html("<div class='" + css + "-outer'></div><div class='" + css + "-inner'></div>");
  $section.html($button);
  $cover.insertAfter($button);
 };
