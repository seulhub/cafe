$(function () {
  $(document).ready(function () {
    const $slider = $("#visual .slider");
    const $slides = $("#visual .slide");
    const total = $slides.length;
    let index = 0;

    function moveSlide() {
      $slider.css("transform", `translateX(-${index * 100}%)`);
    }

    // 자동 슬라이드
    setInterval(function () {
      index++;
      if (index >= total) index = 0;
      // 마지막 슬라이드 후 처음으로
      moveSlide();
    }, 3000);
  });
});
