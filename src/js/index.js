function accordion() {
  var openContentID;
  var $accordionBars = $(".js-accordion__bar");

  $(".accordion__bar__content").hide();

  $accordionBars.click(function(event) {
    var targetContentID = $(this).attr("data-target-content-id");
    var $targetContentElement = $("#" + targetContentID);

    $(".accordion__bar__content").hide();

    $accordionBars.find(".accordion__bar__inner")
      .removeClass("accordion__bar__inner--active");

    $accordionBars.find(".accordion__bar__inner__icon")
      .removeClass("accordion__bar__inner__icon--active");

    $targetContentElement.find(".js-content").html("");

    if (targetContentID === openContentID) {
      openContentID = undefined;
    } else {
      openContentID = targetContentID;

      $(this).find(".accordion__bar__inner")
        .addClass("accordion__bar__inner--active");

      $(this).find(".accordion__bar__inner__icon")
        .addClass("accordion__bar__inner__icon--active");

      var url = "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html";

      $targetContentElement.show()
        .find(".js-contentLoading")
        .show();

      $targetContentElement.find(".js-content")
        .hide()
        .load(url, function(){
          $(".js-contentLoading").fadeOut("slow");
          $(".js-content").delay("slow").fadeIn("slow");
        });
    }

  });

}
accordion();
