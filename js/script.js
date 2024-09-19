setTimeout(function(){$('.img_wrap').isotope()},100)

//포트폴리오 영역

$('.img_wrap').isotope({
  // options
  itemSelector: '.p_box',
  layoutMode: 'vertical'
});


$(".btns>li").click(function(){
  $(this).addClass("active")
  $(this).siblings().removeClass("active")
  const i=$(this).attr("data-filter")
  // data-filter값을 호출하여 i에 넣어주겠다/ attr(attribute)-> 속성값 매서드 호출
  // $(this).attr("data-filter", "속성값") -> 속성 메서드 호출+호출값 변경 ex)이미지 변경 : "src","경로"
  $('.img_wrap').isotope({filter:i})
})


//푸터 롤링텍스트
$('.rolling_text').marquee({
  duration: 1.5e4, // 속도
  gap: 10, // 간격
  delayBeforeStart: 500, // 시작 delay값
  direction: 'left', // 방향
  duplicated: true, // 선택 영역 복제
  pauseOnHover: true, // hover시 일시중지 여부
  startVisible: true,
});


//스크롤 메뉴

(function (global, $) {

  var $menu     = $('.menu li.m'),
      $contents = $('.scroll'),
      $doc      = $('html, body');
  $(function () {
      // 해당 섹션으로 스크롤 이동
      $menu.on('click','a', function(e){
          var $target = $(this).parent(),
              idx     = $target.index(),
              section = $contents.eq(idx),
              offsetTop = section.offset().top;
          $doc.stop()
                  .animate({
                      scrollTop :offsetTop
                  }, 800);
          return false;
      });
  });

  // menu class 추가
  $(window).scroll(function(){
      var scltop = $(window).scrollTop();
      $.each($contents, function(idx, item){
          var $target   = $contents.eq(idx),
              i         = $target.index(),
              targetTop = $target.offset().top;

          if (targetTop <= scltop) {
              $menu.removeClass('on');
              $menu.eq(idx).addClass('on');
          }
          if (!(100 <= scltop)) {
              $menu.removeClass('on');
          }
      })

  });

  AOS.init();

}(window, window.jQuery));




