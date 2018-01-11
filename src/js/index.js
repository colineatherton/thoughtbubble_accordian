function accordion() {
  var openContentID;
  var $accordionBars = $(".js-accordion__bar");

  $(".accordion__bar__content").hide();

  $accordionBars.click(function(event) {
    var targetContentID = $(this).attr("data-target-content-id");
    var $targetContentElement = $("#" + targetContentID);

    $(".accordion__bar__content").css({
      "max-height": "0px"
    });

    $(".accordion__bar__content").fadeOut("slow")

    $accordionBars.find(".accordion__bar__inner")
      .removeClass("accordion__bar__inner--active");

    $accordionBars.find(".accordion__bar__inner__icon")
      .removeClass("accordion__bar__inner__icon--active");

    if (targetContentID === openContentID) {
      openContentID = undefined;
    } else {
      openContentID = targetContentID;

      var $loadingContent = $targetContentElement.find(".js-contentLoading");
      var $textContent = $targetContentElement.find(".js-content");

      $(this).find(".accordion__bar__inner")
        .addClass("accordion__bar__inner--active");

      $(this).find(".accordion__bar__inner__icon")
        .addClass("accordion__bar__inner__icon--active");

      var url = "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html";

      $targetContentElement.css({
        "max-height": "50px",
        "transition": "max-height 1.5s ease-in"
      });

      $targetContentElement.show()
        .find(".js-contentLoading")
        .show();

      $targetContentElement.find(".js-content")
        .hide()
        .load(url, function(){
          $loadingContent.fadeOut("slow");
          $targetContentElement.css({
            "max-height": "500px",
            "transition": "max-height 1.5s ease-in"
          });
          $textContent.delay("slow").fadeIn("slow");
        });
    }

  });

}
accordion();
