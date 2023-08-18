gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  console.log(currentScroll);

  if ($(".indexPage").length > 0) {
    if (currentScroll > "6500") {
      $(".incision").addClass("visible");
    } else {
      $(".incision").removeClass("visible");
    }

    // if (currentScroll > "8200") {
    //   $(".production").addClass("caption-visible");
    // } else {
    //   $(".production").removeClass("caption-visible");
    // }
  }

  if ($(".btn-top-page").length > 0) {
    let btnTopPage = $(".btn-top-page");
    let scrollWhich = 700;

    if (currentScroll > scrollWhich) {
      !btnTopPage.hasClass("show") && btnTopPage.addClass("show");
    } else {
      btnTopPage.hasClass("show") && btnTopPage.removeClass("show");
    }
  }
});

$(document).ready(function () {
  if ($("[data-aos]").length > 0) {
    $("[data-aos]").each((i, el) => {
      AOS.init({
        offset: 0,
        duration: 1500,
        // once: true,
      });
    });
  }

  if ($(".grettings__slider").length > 0) {
    const swiper = new Swiper(".grettings__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      effect: "cards",
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".grettings .swiper-button-next",
        prevEl: ".grettings .swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    $(".grettings__slider .swiper-slide").on("click", function () {
      let index = $(this).index();
      swiper.slideTo(index);
    });
  }

  if ($(".typeFood__slider").length > 0) {
    const swiper = new Swiper(".typeFood__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      effect: "cards",
      speed: 1000,
      navigation: {
        nextEl: ".typeFood__slider__next",
        prevEl: ".typeFood__slider__prev",
      },
      pagination: {
        el: ".typeFood__slider__pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".typeFood-picture__slider").length > 0) {
    const sliders = document.querySelectorAll(".typeFood-picture__slider");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            navigation: {
              nextEl: ".typeFood-picture__slider .swiper-button-next",
              prevEl: ".typeFood-picture__slider .swiper-button-prev",
            },
            pagination: {
              el: ".typeFood-picture__slider .swiper-pagination",
              type: "fraction",
              renderFraction: function (currentClass, totalClass) {
                return (
                  '<span class="' +
                  currentClass +
                  '"></span>' +
                  " из " +
                  '<span class="' +
                  totalClass +
                  '"></span>'
                );
              },
            },
            on: {
              init: function (swiper) {},
            },
            breakpoints: {},
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".sertificate__slider").length > 0) {
    const swiper = new Swiper(".sertificate__slider", {
      spaceBetween: 80,
      autoHeight: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      navigation: {
        nextEl: ".sertificate__slider .swiper-button-next",
        prevEl: ".sertificate__slider .swiper-button-prev",
      },
      pagination: {
        el: ".sertificate__slider .swiper-pagination",
        type: "progressbar",
      },
      on: {
        init: function (swiper) {
          setTimeout(function () {
            swiper.slideTo(2);
            $(".sertificate__slider").addClass("init");
          }, 600);
        },
      },
    });
  }

  if ($(".catalog-main__slider").length > 0) {
    const swiper = new Swiper(".catalog-main__slider", {
      slidesPerView: 5,
      loop: true,
      spaceBetween: 0,
      centeredSlides: true,
      initialSlide: 2,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      on: {
        init: function () {
          let title = $(".catalog-main__slider .swiper-slide")
            .eq(5)
            .attr("data-title");
          let text = $(".catalog-main__slider .swiper-slide")
            .eq(5)
            .attr("data-text");

          changeTextCatalog(title, text);
        },
      },
      autoHeight: true,
      effect: "creative",
      slideToClickedSlide: true,
      creativeEffect: {
        prev: {
          translate: ["-200%", 25, 0],
          rotate: [0, 0, 0],
        },
        next: {
          translate: ["200%", 25, 0],
          rotate: [0, 0, 0],
        },
      },
      navigation: {
        nextEl: ".catalog-main__slider .swiper-button-next",
        prevEl: ".catalog-main__slider .swiper-button-prev",
      },
      pagination: {
        el: ".catalog-main__slider .swiper-pagination",
        type: "progressbar",
      },
    });

    swiper.on("init", function () {});

    swiper.on("slideChange", function () {
      let title = $(".catalog-main__slider .swiper-slide")
        .eq(swiper.activeIndex)
        .attr("data-title");
      let text = $(".catalog-main__slider .swiper-slide")
        .eq(swiper.activeIndex)
        .attr("data-text");

      changeTextCatalog(title, text);
    });
  }

  if ($(".production__slider").length > 0) {
    const swiper = new Swiper(".production__slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".production__slider .swiper-button-next",
        prevEl: ".production__slider .swiper-button-prev",
      },
      pagination: {
        el: ".production__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".production-page__slider").length > 0) {
    const swiper = new Swiper(".production-page__slider", {
      slidesPerView: 1,
      autoHeight: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: ".production-page__sliderWrapper .swiper-button-next",
        prevEl: ".production-page__sliderWrapper .swiper-button-prev",
      },
      pagination: {
        el: ".production-page__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".delivery-slider").length > 0) {
    const swiper = new Swiper(".delivery-slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".delivery-slider .swiper-button-next",
        prevEl: ".delivery-slider .swiper-button-prev",
      },
      pagination: {
        el: ".delivery-slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".events-slider").length > 0) {
    const swiper = new Swiper(".events-slider", {
      slidesPerView: 1,
      autoHeight: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: ".events-slider__wrap .swiper-button-next",
        prevEl: ".events-slider__wrap .swiper-button-prev",
      },
      pagination: {
        el: ".events-slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".slider-simple").length > 0) {
    const swiper = new Swiper(".slider-simple", {
      slidesPerView: 1,
      autoHeight: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: ".slider-simple__wrap .swiper-button-next",
        prevEl: ".slider-simple__wrap .swiper-button-prev",
      },
      pagination: {
        el: ".slider-simple .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".universal-containers").length > 0) {
    const swiper = new Swiper(".universal-containers__slider", {
      slidesPerView: 1,
      autoHeight: true,
      initialSlide: 1,
      navigation: {
        nextEl: ".universal-containers .swiper-button-next",
        prevEl: ".universal-containers .swiper-button-prev",
      },
      pagination: {
        el: ".universal-containers__slider .swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
    });

    swiper.on("slideChange", function () {
      $(".universal-containers__item img").map(function () {
        let url = $(this).attr("data-picture-dafault");
        $(this).attr("src", url);
      });
    });

    $(".universal-gallery__item").hover(function () {
      let url = $(this).attr("data-picture");

      $(this)
        .parents(".universal-containers__item")
        .find("img")
        .attr("src", url);
    });
  }

  if ($(".reviews-product").length > 0) {
    const swiper = new Swiper(".reviews-product__slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".reviews-product .swiper-button-next",
        prevEl: ".reviews-product .swiper-button-prev",
      },
      pagination: {
        el: ".reviews-product__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".catalog-invis__slider").length > 0) {
    const swiper = new Swiper(".catalog-invis__slider", {
      slidesPerView: 1,
      autoHeight: true,
      pagination: {
        el: ".catalog-invis__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".eventList-small").length > 0) {
    const sliders = document.querySelectorAll(".eventList-small");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 37,
            autoHeight: true,
            on: {
              init: function (swiper) {},
            },
            breakpoints: {},
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".product__picture").length > 0) {
    const swiperNavigation = new Swiper(".swiper-navigation", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const swiper = new Swiper(".product__picture__slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".product__picture .swiper-button-next",
        prevEl: ".product__picture .swiper-button-prev",
      },
      pagination: {
        el: ".product__picture .swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
      thumbs: {
        swiper: swiperNavigation,
      },
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });

    $(".tabs").on("_before", function () {
      if ($(".list-cites").length > 0) {
        isVisibleMapBlock();
      }
    });

    // исправление бага в chrome
    $(".tabs-links li").eq(0).find("a").trigger("click");

    $(".tabs").on("_after", function () {
      $(".tabs-body").removeClass("swiper-wait");
    });
  }

  if ($(".incision-adv__item").length > 0) {
    $(".incision-adv__item").on("click", function () {
      $(".incision-adv__item").removeClass("active");
      $(this).addClass("active");
    });
  }

  if ($("select").length > 0) {
    $("select").map(function () {
      if ($(this).attr("multiple")) {
        $(this).selectric({
          multiple: {
            separator: ", ",
            keepMenuOpen: true,
            maxLabelEntries: false,
          },
        });
      } else {
        $(this).selectric({
          onOpen: function () {},
          onChange: function (element) {
            if ($(element).attr("id") === "select-city") {
              if ($(element).val() === "Москва") {
                $(".google-map").stop().slideDown();
                $(".distr-section .contacts-map").stop().slideUp();
              } else {
                $(".google-map").stop().slideUp();
                $(".distr-section .contacts-map").stop().slideDown();
              }
            }
          },
          onClose: function () {},
        });
      }
    });
  }

  if ($(".distr-section .list-cites .btn").length > 0) {
    $(".distr-section .list-cites .btn").on("click", function () {
      $(".google-map").stop().slideDown();
      $(".distr-section .contacts-map").stop().slideUp();

      setTimeout(function () {
        scrollGoogleMap();
      }, 400);
    });

    function scrollGoogleMap() {
      let mapBlock = $(".google-map");
      $("html, body").animate({ scrollTop: mapBlock.offset().top }, 300);
      return false;
    }
  }

  if ($(".play-video").length > 0) {
    $(".play-video").on("click", function (e) {
      e.preventDefault();
      $(this).addClass("played");
      $(this).siblings("video").trigger("play");
      $(this).siblings("video")[0].setAttribute("controls", true);
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("a[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".btn-phone-add").length > 0) {
    $(".btn-phone-add").on("click", function (event) {
      event.preventDefault();

      let parents = $(this).parents(".input-list");
      let phones = parents.find(".phone-input");
      let id = phones.length + 1;

      let html = `<div class="input-wrapper">
      <input type="text" placeholder="Телефон*" class="phone-input" id='phone-${id}'>
      </div>`;

      parents
        .find(phones[phones.length - 1])
        .parents(".input-wrapper")
        .after(html);

      parents.find(`.phone-input`).map(function () {
        $(this).inputmask({
          mask: "+7(999) 999-99-99",
          placeholder: "*",
          showMaskOnHover: false,
          showMaskOnFocus: true,
          clearIncomplete: true,
        });
      });
    });
  }

  if ($(".our-brands__item").length > 0) {
    $(".our-brands__item").on("click", function () {
      $(this).toggleClass("opened");
      $(this).find(".our-invis").slideToggle();
    });
  }

  if ($(".counter-box").length > 0) {
    let show = true;
    let countbox = ".counter-box";

    $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (
        w_top + 500 >= e_top ||
        w_height + w_top == d_height ||
        e_height + e_top < w_height
      ) {
        $(".benefits__number").css("opacity", "1");
        $(".about-numbers__list .num").spincrement({
          thousandSeparator: "",
          duration: 3000,
        });

        $(".possibilities .num").spincrement({
          thousandSeparator: "",
          duration: 5000,
        });

        show = false;
      }
    });
  }

  if ($(".city-bl").length > 0) {
    $(".city-bl").on("click", function (event) {
      event.preventDefault();

      $(".city-bl").removeClass("active");
      $(".list-cites .btn").removeClass("show");
      $(this).addClass("active");
      $(this).next(".btn").addClass("show");
    });

    isVisibleMapBlock();
  }

  if ($("#calendar").length > 0) {
    let current = 28;
    let old = 27;

    let months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    function Calendar(id, year, month) {
      let Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = "<div class='tr'>";

      if (DNfirst != 0) {
        for (let i = 1; i < DNfirst; i++) calendar += "<div class='td'></div>";
      } else {
        for (let i = 0; i < 6; i++) calendar += "<div class='td'></div>";
      }

      for (let i = 1; i <= Dlast; i++) {
        if (
          i == new Date().getDate() &&
          D.getFullYear() == new Date().getFullYear() &&
          D.getMonth() == new Date().getMonth()
        ) {
          calendar += "<div class='td today'>" + i + "</div>";
        } else {
          let custom = "";
          switch (i) {
            case current:
              custom = "coming";
              break;

            case old:
              custom = "past";
              break;

            default:
              custom = "";
              break;
          }

          calendar += `<div class='td ${custom}'>${i}</div>`;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
          calendar += "</div><div class='tr'>";
        }
      }

      for (var i = DNlast; i < 7; i++)
        calendar += "<div class='td td-empty'>&nbsp;";

      document.querySelector("#" + id + " .tbody").innerHTML =
        calendar + "</div>";

      document.querySelector(".events .calendarTitle .month").innerHTML =
        months[D.getMonth()];

      document.querySelector(".events .calendarTitle .year").innerHTML =
        D.getFullYear();

      document.querySelector(".events .calendarTitle .month").dataset.month =
        D.getMonth();

      document.querySelector(".events .calendarTitle .year").dataset.year =
        D.getFullYear();

      // переключение месяцев
      if ($(".listMount").length > 0) {
        $(".listMount li").eq(D.getMonth()).addClass("active");
        $(".listMount li").click(function () {
          $(".listMount li").removeClass("active");
          $(this).addClass("active");
          let current = $(this).index();
          Calendar(
            "calendar",
            document.querySelector(".events .calendarTitle .year").dataset.year,
            current
          );
        });
      }
    }

    Calendar("calendar", new Date().getFullYear(), new Date().getMonth());

    // переключатель минус месяц
    document.querySelector(".events .calendarPrev").onclick = function () {
      $(".listMount li").removeClass("active");
      Calendar(
        "calendar",
        document.querySelector(".events .calendarTitle .year").dataset.year,
        parseFloat(
          document.querySelector(".events .calendarTitle .month").dataset.month
        ) - 1
      );
    };

    // переключатель плюс месяц
    document.querySelector(".events .calendarNext").onclick = function () {
      $(".listMount li").removeClass("active");
      Calendar(
        "calendar",
        document.querySelector(".events .calendarTitle .year").dataset.year,
        parseFloat(
          document.querySelector(".events .calendarTitle .month").dataset.month
        ) + 1
      );
    };
  }

  if ($(".events-all").length > 0) {
    let eventDateArray = [12, 24];

    let months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    $(".events-mons__item").map(function (index, event) {
      let calendarID = `calendar${index}`;

      $(this).find(".calendar").attr("id", calendarID);
      $(this).find(".calendarTitle .month").text(months[index]);

      Calendar(calendarID, new Date().getFullYear(), index);
    });

    function Calendar(id, year, month) {
      let Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = "<div class='tr'>";

      if (DNfirst != 0) {
        for (let i = 1; i < DNfirst; i++) calendar += "<div class='td'></div>";
      } else {
        for (let i = 0; i < 6; i++) calendar += "<div class='td'></div>";
      }

      for (let i = 1; i <= Dlast; i++) {
        let custom = "";

        if (eventDateArray.includes(i)) {
          custom = "event";
        }

        calendar += `<div class='td ${custom}'>${i}</div>`;
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
          calendar += "</div><div class='tr'>";
        }
      }

      for (var i = DNlast; i < 7; i++)
        calendar += "<div class='td td-empty'>&nbsp;";

      document.querySelector("#" + id + " .tbody").innerHTML =
        calendar + "</div>";
    }
  }

  if ($(".js-action-link").length > 0) {
    let isLeave = false;

    $(".js-action-link").mouseover(function (event) {
      let than = $(this);
      let block = than.attr("data-open");

      if (than.hasClass("active")) {
        console.log("back");
        return false;
      }

      if ($(".js-action-link").hasClass("active")) {
        $(".js-action-link").removeClass("active");
        $(".invis-block").removeClass("open").slideUp(200);
        $(".invis-block").off("mouseover");
        isLeave = false;
        setTimeout(function () {
          openInvisBlock(than, block, isLeave);
        }, 200);
      } else {
        openInvisBlock(than, block, isLeave);
      }
    });
  }

  if ($(".btn-search").length > 0) {
    $(".btn-search").mouseover(function () {
      console.log("mouseover");
      initSearchBlock();
    });

    function initSearchBlock() {
      let searchBlock = $(".search-invis");
      let searchInput = searchBlock.find("input");

      let timer = setTimeout(function () {
        searchBlock.removeClass("opened").off("mouseleave");
      }, 5000);

      searchBlock.addClass("opened");

      searchBlock.mouseover(function () {
        clearInterval(timer);
      });

      searchBlock.mouseleave(function () {
        let timer = setTimeout(function () {
          searchBlock.removeClass("opened").off("mouseleave");
        }, 5000);

        searchInput.off("input");

        searchInput.on("input", function () {
          clearInterval(timer);
        });
      });

      $(document).mouseup(function (e) {
        if (
          !searchBlock.is(e.target) &&
          searchBlock.has(e.target).length === 0 &&
          !$(".btn-search").is(e.target)
        ) {
          searchBlock.removeClass("opened");
          $(document).off("mouseup");
        }
      });
    }
  }

  if ($(".storage-section__tabs").length > 0) {
    $(".storage-section__tabs .contacts-info__bottom .btn").on(
      "click",
      function (event) {
        event.preventDefault();
        openGoogleMap($(this));
      }
    );

    $(".storage-section__tabs .list-cites .btn").on("click", function (event) {
      event.preventDefault();
      openGoogleMap($(this));
    });

    function openGoogleMap(than) {
      let parents = than.parents(".tabs-body");
      let mapBlock = $(".google-map");

      than.toggleClass("active");
      parents.find(".google-map").stop().slideDown();
      parents.find(".contacts-map").stop().slideUp();

      setTimeout(function () {
        scrollGoogleMap();
      }, 400);
    }

    function scrollGoogleMap() {
      let mapBlock = $(".google-map");
      $("html, body").animate({ scrollTop: mapBlock.offset().top }, 1000);
      return false;
    }
  }

  if ($(".terms-text").length > 0) {
    $(".terms-text").scroll(function () {
      if ($(".terms-text").scrollTop() >= $($(".terms-text")).height()) {
        $(".modal-personal .read-to").addClass("hide");
        $(".modal-personal .modal__controls").addClass("visible");
      }
    });
  }

  if ($("#lottie-1").length > 0) {
    let number = $("#lottie-1").offset().top;

    let theWindow = $(window);
    let winHeight = theWindow.height();
    let animDuration = 1600;
    let animData = {
      container: document.getElementById("lottie-1"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "json/block1.json",
    };

    let anim = bodymovin.loadAnimation(animData);

    function animatebodymovin(duration, animObject) {
      let scrollPosition = theWindow.scrollTop() - number;
      let maxFrames = animObject.totalFrames;
      let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      animObject.goToAndStop(frame, true);
    }

    anim.addEventListener("enterFrame", function (animation) {
      if (animation.currentTime > anim.totalFrames - 1) {
        // animObject.pause();
        anim.pause();
      }
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > number && currentScroll < "4400") {
        animatebodymovin(animDuration, anim);
      }
    });
  }

  if ($("#lottie-2").length > 0) {
    let number = $("#lottie-2").offset().top;

    let theWindow = $(window);
    let winHeight = theWindow.height();
    let animDuration = 4000;
    let animData = {
      container: document.getElementById("lottie-2"),
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "json/block2.json",
    };

    let anim = bodymovin.loadAnimation(animData);

    function animatebodymovin(duration, animObject, paused = 0) {
      let scrollPosition = theWindow.scrollTop() - number - paused;
      let maxFrames = animObject.totalFrames;
      let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      animObject.goToAndStop(frame, true);
    }

    $(window).scroll(function () {
      if ($(this).scrollTop() > number && currentScroll < "6740") {
        animatebodymovin(animDuration, anim);
      }

      if (currentScroll < "6000") {
        $("#lottie-2").removeClass("fixed");
      }

      if (currentScroll > "6740") {
        $("#lottie-2").addClass("paused");
      } else {
        $("#lottie-2").removeClass("paused");
      }

      if (currentScroll >= "6000" && currentScroll <= "7500") {
        $("#lottie-2").addClass("fixed");
        $(".animation-text").addClass("hide");
        anim.pause();
      } else {
        $(".animation-text").removeClass("hide");
      }
    });
  }

  if ($("#lottie-2-2").length > 0) {
    let number = 7500;

    let theWindow = $(window);
    let winHeight = theWindow.height();
    let animDuration = 2000;
    let animData = {
      container: document.getElementById("lottie-2-2"),
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "json/block2_2.json",
    };

    let anim = bodymovin.loadAnimation(animData);

    function animatebodymovin(duration, animObject, paused = 0) {
      let scrollPosition = theWindow.scrollTop() - number - paused;
      let maxFrames = animObject.totalFrames;
      let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      animObject.goToAndStop(frame, true);
    }

    $(window).scroll(function () {
      if ($(this).scrollTop() > number && currentScroll < "9200") {
        animatebodymovin(animDuration, anim);
      }

      if (currentScroll >= number) {
        $("#lottie-2-2").addClass("show");
      } else {
        $("#lottie-2-2").removeClass("show");
      }
    });
  }

  if ($("#lottie-3").length > 0) {
    let number = 10300;

    let theWindow = $(window);
    let winHeight = theWindow.height();
    let animDuration = 2500;
    let animData = {
      container: document.getElementById("lottie-3"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "json/block3.json",
    };

    let anim = bodymovin.loadAnimation(animData);

    function animatebodymovin(duration, animObject) {
      let scrollPosition = theWindow.scrollTop() - number;
      let maxFrames = animObject.totalFrames;
      let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      animObject.goToAndStop(frame, true);
    }

    anim.addEventListener("enterFrame", function (animation) {
      // if (animation.currentTime > anim.totalFrames - 1) {
      //   anim.pause();
      // }
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > number && currentScroll < "12700") {
        animatebodymovin(animDuration, anim);
      }

      if (currentScroll >= "10000") {
        $(".delivery--v1 .desc").addClass("visible");
        $(".delivery--v1 .caption").addClass("visible");
      } else {
        $(".delivery--v1 .desc").removeClass("visible");
        $(".delivery--v1 .caption").removeClass("visible");
      }

      if (currentScroll >= "11000") {
        $(".delivery--v1").addClass("fixed");
      } else {
        $(".delivery--v1").removeClass("fixed");
      }

      if (currentScroll >= "12600") {
        $(".delivery .btn").addClass("show");
      } else {
        $(".delivery .btn").removeClass("show");
      }

      if (currentScroll >= "13250") {
        anim.pause();
      }
    });
  }

  if ($(".indexPage").length > 0) {
    if (ScrollTrigger.isTouch !== 1) {
      gsap.fromTo(
        "#lottie-2",
        { y: 0 },
        {
          y: -1050,
          scrollTrigger: {
            trigger: ".production",
            start: "-930",
            // end: "2500",
            scrub: true,
          },
        }
      );

      // delivery

      gsap.fromTo(
        ".delivery .line",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".delivery",
            start: "2400",
            end: "2430",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".delivery .desc",
        { x: 0 },
        {
          x: 700,
          scrollTrigger: {
            trigger: ".delivery",
            start: "2400",
            end: "2430",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".delivery .caption",
        { x: 0 },
        {
          x: 700,
          scrollTrigger: {
            trigger: ".delivery",
            start: "2400",
            end: "2430",
            scrub: true,
          },
        }
      );
    }
  }

  if ($(".your-lines").length > 0) {
    $(".b-product-lines__cart").on("click", function (e) {
      if (
        !$(".b-product-lines__cart-arrow-wrap").is(e.target) &&
        $(".b-product-lines__cart-arrow-wrap").has(e.target).length === 0
      ) {
        $(".b-product-lines__cart").removeClass("active");

        let parentT = $(".b-product-lines__switch-item-wrap.active"),
          parentTchildren = parentT.find(".b-product-lines__cart");

        for (let n = 0; n < parentTchildren.length; n++) {
          if (parentTchildren.index(n) < $(this).index() + 1) {
            for (let i = 0; i < $(this).index(); i++) {
              parentTchildren
                .eq(i)
                .css("border-radius", "10px 0 0 10px")
                .addClass("b");
            }
          } else {
            for (let b = $(this).index() - 1; b < parentTchildren.length; b++) {
              parentTchildren
                .eq(b)
                .css("border-radius", "0px 10px 10px 0px")
                .addClass("n");
            }
          }
          $(this).addClass("active");
          $(this).css("border-radius", "10px");
        }
      }
    });

    let cartWidth = $(".b-product-lines__cart.active").width(),
      bodyWidth = cartWidth - 16 * 9;

    $(".b-product-lines__cart-body").css("width", bodyWidth + "px");
    $(".b-product-lines__cart-body").css("min-width", bodyWidth + "px");

    $(".b-product-lines__switch-btn").on("click", function (e) {
      let id = $(this).attr("data-id");
      pickLineapItemByDataId(id);
    });

    $(".b-product-lines__cart-arrow_next").on("click", function () {
      let parentT = $(".b-product-lines__switch-item-wrap.active"),
        parentTchildren = parentT.find(".b-product-lines__cart"),
        cartActive = parentT.find(".b-product-lines__cart.active");

      if (cartActive.index() != parentTchildren.length - 1) {
        $(".b-product-lines__cart").removeClass("active");

        for (let n = 0; n < parentTchildren.length; n++) {
          if (parentTchildren.index(n) < cartActive + 1) {
            for (let i = 0; i < cartActive; i++) {
              parentTchildren
                .eq(i)
                .css("border-radius", "10px 0 0 10px")
                .addClass("b");
            }
          } else {
            for (let b = cartActive - 1; b < parentTchildren.length; b++) {
              parentTchildren
                .eq(b)
                .css("border-radius", "0px 10px 10px 0px")
                .addClass("n");
            }
          }
        }

        parentTchildren.eq(cartActive.index() + 1).addClass("active");
        parentTchildren.eq(cartActive.index() + 1).css("border-radius", "10px");
      }
    });

    $(".b-product-lines__cart-arrow_prev").on("click", function () {
      let parentT = $(".b-product-lines__switch-item-wrap.active"),
        parentTchildren = parentT.find(".b-product-lines__cart"),
        cartActive = parentT.find(".b-product-lines__cart.active");

      if (cartActive.index() != 0) {
        $(".b-product-lines__cart").removeClass("active");

        for (let n = 0; n < parentTchildren.length; n++) {
          if (parentTchildren.index(n) < cartActive + 1) {
            for (let i = 0; i < cartActive; i++) {
              parentTchildren
                .eq(i)
                .css("border-radius", "10px 0 0 10px")
                .addClass("b");
            }
          } else {
            for (let b = cartActive - 1; b < parentTchildren.length; b++) {
              parentTchildren
                .eq(b)
                .css("border-radius", "0px 10px 10px 0px")
                .addClass("n");
            }
          }
        }

        parentTchildren.eq(cartActive.index() - 1).addClass("active");
        parentTchildren.eq(cartActive.index() - 1).css("border-radius", "10px");
      }
    });
  }

  if ($(".btn-top-page").length > 0) {
    $(".btn-top-page").on("click", function () {
      $(window).scrollTop(0);
    });
  }

  if ($(".lineap").length > 0) {
    const items = $(".lineap-item");
    const itemsLenght = $(".lineap-item").length;

    items.each((idx, item) => {
      $(item).css("z-index", itemsLenght - idx);
    });

    function pickLineapItemByDataId(id) {
      const item = $(`.lineap-item[data-item=${id}]`);
      if (item.length !== 0) {
        setActiveLineapItem($(item));
      }
    }

    function setActiveLineapItem($item) {
      $(".lineap-item").removeClass("lineap-item--active");
      $(".lineap-item").removeClass("lineap-item--prev");
      $(".lineap-item").css("z-index", "");

      $item.addClass("lineap-item--active");

      const prevElements = $item.prevAll(".lineap-item");

      prevElements.addClass("lineap-item--prev");

      const nextElements = $item.nextAll(".lineap-item");

      nextElements.each((idx, item) => {
        $(item).css("z-index", nextElements.length - idx);
      });
    }

    $(".lineap-item__title").click(function () {
      const parent = $(this).closest(".lineap-item");
      setActiveLineapItem($(parent));
    });

    $(".lineap-item__control--next").click(function () {
      const parent = $(this).closest(".lineap-item");

      const nextItem = parent.next(".lineap-item");

      if (nextItem.length !== 0) {
        setActiveLineapItem($(nextItem));
      }
    });

    $(".lineap-item__control--prev").click(function () {
      const parent = $(this).closest(".lineap-item");

      const prevItem = parent.prev(".lineap-item");

      if (prevItem.length !== 0) {
        setActiveLineapItem($(prevItem));
      }
    });
  }
});

// $(window).on("load", function () {
//   $('body').addClass('load')
// });

function isVisibleMapBlock() {
  $(".list-cites li").map(function () {
    if ($(this).attr("data-visible") === "false") {
      $(this).addClass("show");
    } else {
      $(this).removeClass("show");
    }
  });

  $(".google-map__controls .btn").on("click", function (event) {
    event.preventDefault();

    let parents = $(this).parents(".distr-section");

    $(this).toggleClass("active");
    parents.find(".google-map").stop().slideUp();
    parents.find(".contacts-map").stop().slideDown();
  });
}

function openInvisBlock(than, block, isLeave) {
  than.addClass("active");

  $(`.${block}`).addClass("open").slideDown(200);

  $(than).mouseleave(function () {
    mouseLeaveHandle();
  });

  $(`.${block}`).mouseleave(function () {
    mouseLeaveHandle();
  });

  $(document).mouseup(function (e) {
    let div = $(`.${block}`);
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".js-action-link").removeClass("active");
      div.removeClass("open").slideUp(200);
      $(document).off("mouseup");
    }
  });

  function mouseLeaveHandle() {
    $(than).off("mouseleave");
    $(block).off("mouseleave");

    if (!isLeave) {
      isLeave = true;

      let timer = setTimeout(function () {
        closeInvis(block, timer);
      }, 200);

      $(`.${block}`).mouseover(function () {
        timer && clearTimeout(timer);
        isLeave = false;
      });
    }
  }

  function closeInvis(block, timer = undefined) {
    $(".js-action-link").removeClass("active");
    $(`.${block}`).removeClass("open").slideUp(200);
    $(`.${block}`).off("mouseover");
    $(document).off("mouseup");
    isLeave = false;
    timer && clearTimeout(timer);
  }
}

function pickLineapItemByDataId(id) {
  const item = $(`.lineap-item[data-item=${id}]`);
  if (item.length !== 0) {
    setActiveLineapItem($(item));
  }
}

function setActiveLineapItem($item) {
  $(".lineap-item").removeClass("lineap-item--active");
  $(".lineap-item").removeClass("lineap-item--prev");
  $(".lineap-item").css("z-index", "");

  $item.addClass("lineap-item--active");

  const prevElements = $item.prevAll(".lineap-item");

  prevElements.addClass("lineap-item--prev");

  const nextElements = $item.nextAll(".lineap-item");

  nextElements.each((idx, item) => {
    $(item).css("z-index", nextElements.length - idx);
  });
}

function changeTextCatalog(title, text) {
  $(".catalog-main__right .caption").text(title);
  $(".catalog-main__right p").text(text);
}
