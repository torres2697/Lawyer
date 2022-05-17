jQuery(document).ready(function ($) {
  // табы
  $(".offer__item").click(function () {
    $(".offer__item").removeClass("active");
    $(this).addClass("active");
    $(".offer__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
  $(".offer__item-mob").click(function () {
    $(".offer__item-mob").removeClass("active");
    $(this).addClass("active");
    $(".offer__content-mob").removeClass("active");
    $(this).next().toggleClass("active");
  });

  // slider
  if ($(".privilege__slider")) {
    $(".privilege__slider").on(
      "init reInit afterChange",
      function (event, slick, currentSlide) {
        let currentSlideNumber = (currentSlide ? currentSlide : 0) + 1;
        currentSlideNumber =
          currentSlideNumber > 9
            ? currentSlideNumber
            : "0" + currentSlideNumber;
        let slideLength = slick.$slides.length;
        slideLength = slideLength > 9 ? slideLength : "0" + slideLength;
        $(".privilege__slider-inner .numbers__current").text(
          currentSlideNumber
        );
        $(".privilege__slider-inner .numbers__wrap").text(slideLength);
      }
    );

    $(".privilege__slider").slick({
      prevArrow: `<button type='button' class='slick-prev pull-left'><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">           <circle opacity="0.7" r="17" transform="matrix(-1 0 0 1 17.5 17.5)" fill="#3A3B41" stroke="#FDFDFD"/>           <g opacity="0.5" clip-path="url(#clip0)">        <path d="M21.1572 10.8136L14.4708 17.5L21.1572 24.1864L19.0937 26.25L10.3437 17.5L19.0937 8.75L21.1572 10.8136Z" fill="#F5F5F5"/>            </g>          <defs>         <clipPath id="clip0">       <rect width="17.5" height="17.5" fill="white" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 24.5 26.25)"/>           </clipPath>           </defs>           </svg></button >`,
      nextArrow: `<button type='button' class='slick-next pull-right'><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">          <circle opacity="0.7" cx="17.5" cy="17.5" r="17" fill="#3A3B41" stroke="#FDFDFD"/>           <g opacity="0.5" clip-path="url(#clip0)">           <path d="M13.3428 10.8136L20.0292 17.5L13.3428 24.1864L15.4063 26.25L24.1563 17.5L15.4063 8.75L13.3428 10.8136Z" fill="#F5F5F5"/>           </g>           <defs>           <clipPath id="clip0">          <rect width="17.5" height="17.5" fill="white" transform="translate(10 26.25) rotate(-90)"/>           </clipPath>            </defs>          </svg></button>`,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: "0",
      speed: 500,
      infinity: false,
    });
  }

  // slider-deal
  if ($(".work")) {
    $(".work").on(
      "init reInit afterChange",
      function (event, slick, currentSlide) {
        let currentSlideNumber = (currentSlide ? currentSlide : 0) + 1;
        currentSlideNumber =
          currentSlideNumber > 9
            ? currentSlideNumber
            : "0" + currentSlideNumber;
        let slideLength = slick.$slides.length;
        slideLength = slideLength > 9 ? slideLength : "0" + slideLength;
        $(".works .numbers__current").text(currentSlideNumber);
        $(".works .numbers__wrap").text(slideLength);
      }
    );
    $(".work").slick({
      prevArrow: `<button type='button' class='slick-pre pull-left'><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">           <circle opacity="0.7" r="17" transform="matrix(-1 0 0 1 17.5 17.5)" fill="#3A3B41" stroke="#FDFDFD"/>           <g opacity="0.5" clip-path="url(#clip0)">        <path d="M21.1572 10.8136L14.4708 17.5L21.1572 24.1864L19.0937 26.25L10.3437 17.5L19.0937 8.75L21.1572 10.8136Z" fill="#F5F5F5"/>            </g>          <defs>         <clipPath id="clip0">       <rect width="17.5" height="17.5" fill="white" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 24.5 26.25)"/>           </clipPath>           </defs>           </svg></button >      <div class="numbers">
            <p class="numbers__current">
                01
            </p>
            <p class="numbers__last">
                /<span class="numbers__wrap">15</span>
            </p>
        </div>`,
      nextArrow: `<button type='button' class= 'slick-nex pull-right' > <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">          <circle opacity="0.7" cx="17.5" cy="17.5" r="17" fill="#3A3B41" stroke="#FDFDFD" />           <g opacity="0.5" clip-path="url(#clip0)">           <path d="M13.3428 10.8136L20.0292 17.5L13.3428 24.1864L15.4063 26.25L24.1563 17.5L15.4063 8.75L13.3428 10.8136Z" fill="#F5F5F5" />           </g>           <defs>           <clipPath id="clip0">          <rect width="17.5" height="17.5" fill="white" transform="translate(10 26.25) rotate(-90)" />           </clipPath>            </defs>          </svg></button> `,
      slidesToShow: 1,
    });
  }
});
