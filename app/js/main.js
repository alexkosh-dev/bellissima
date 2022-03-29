$(function () {
  $(".slider-top__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $(".products-item__rate").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
  });

  // click active filter btns
  $(".shop-content__filters-btn").on("click", function () {
    $(".shop-content__filters-btn").removeClass(
      "shop-content__filters-btn--active"
    );
    $(this).addClass("shop-content__filters-btn--active");
  });

  $(".btn-list").on("click", function () {
    $(".shop-content__products").addClass("shop-content__products--list");
  });
  $(".btn-grid").on("click", function () {
    $(".shop-content__products").removeClass("shop-content__products--list");
  });

  $('.products-item__info-btn').on('click', function(){
    $(this).toggleClass('products-item__info-btn--add');
  });

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function initializeClock(id, endtime) {
    var clock = document.querySelector(".promo-timer__inner");
    var daysSpan = clock.querySelector(".promo-timer__item-days");
    var hoursSpan = clock.querySelector(".promo-timer__item-hours");
    var minutesSpan = clock.querySelector(".promo-timer__item-minutes");
    var secondsSpan = clock.querySelector(".promo-timer__item-seconds");

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = $(".promo-timer__inner").attr("data-time");
  initializeClock("promo-timer__inner", deadline);
});
