// document.getElementById('top_scroll').addEventListener('click', function() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth' //為文檔添加平滑滾動效果
//     });
//   });

  $('#top_scroll').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });