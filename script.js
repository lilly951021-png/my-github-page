$(document).ready(function() {
  
  // 1. jQuery 功能：點擊圖片開啟燈箱放大效果
  $('.preview-img').on('click', function() {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    
    $('#modal-img').attr('src', imgSrc);
    $('#modal-caption').text(imgAlt);
    
    // 使用 jQuery 的 fadeIn 淡入顯示
    $('#image-modal').css('display', 'flex').hide().fadeIn(300);
  });

  // 2. jQuery 功能：點擊關閉按鈕或彈窗背景關閉燈箱
  $('.close-btn, #image-modal').on('click', function(e) {
    if (e.target !== $('#modal-img')[0]) {
      $('#image-modal').fadeOut(250);
    }
  });

  // 3. jQuery 功能：切換深色 / 淺色主題
  $('#toggle-theme-btn').on('click', function() {
    $('body').toggleClass('dark-mode');
    
    if ($('body').hasClass('dark-mode')) {
      $(this).text('切換為淺色主題');
    } else {
      $(this).text('切換為深色主題');
    }
  });

});