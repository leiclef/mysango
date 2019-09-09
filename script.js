$(function () {
  // テキストボックスにフォーカス時、フォームの背景色を変化
  $('.search-input')
    .focusin(function (e) {
      $('.search-submit').animate({ fontSize: '24px' }, 500);
    })
    .focusout(function (e) {
      $('.search-submit').animate({ fontSize: '20px' }, 500);
    });
});
