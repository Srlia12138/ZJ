$(function(){
  $('.drawing').click(function(){
    //查看大图
    const worksbody = document.getElementById('home-main-works')
    $(worksbody).after("<div class='wrapper'></div>");
    var imgSrc = $(this).attr('src');
    $(".wrapper").css("background-image", "url(" + imgSrc + ")");
    // $(".wrapper").css("background-size","percentage 60px")
    $('.wrapper').fadeIn(1000);
    //关闭并移除图层
    $('.wrapper').click(function(){
      $('.wrapper').fadeOut(1000).remove();
    });
  });
});

