$(document).ready(function() {
  $(".img-container img").click(function() {
    const img = $(this);
    const highlight = $(".highlight");
    highlight.removeClass(".hide");
    highlight.find(".description").html(img.attr("alt"));
    highlight.find("img").attr("src", img.attr("src"));
  });
});
