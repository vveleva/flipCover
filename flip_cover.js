function flipCover (className, options) {
  var options;
  if (typeof className === "object") {
    options = className;
  } else {
    options.className = className;
  }

  var className = options.className;
  var url = options.url;
  var linkName = options.linkName;

  var $section = $(".flip-cover-" + className).addClass(className + "-section");
  var $button = $("<div>").addClass(className + "-button");
  $button.html("<a href='" + url + "'>" + linkName + "</a>");
  var $cover = $("<div>").addClass(className + "-cover");
  $cover.html("<div class='" + className + "-outer'></div><div class='" + className + "-inner'></div>");
  $section.html($button);
  $cover.insertAfter($button);
 };
