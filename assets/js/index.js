$(function(){
  //set1 slidebenner
  var set1Idx = Math.floor(Math.random() * $('.slide li').size());
  $('.slide li').eq(set1Idx).addClass('on').children('img').show();
  function slidefunc(start,end,idx){
    $('.slide li').eq(idx).addClass('on').children('img').css({
      'display':'block',
      'left':start
    }).animate({
      'left':end
    }).parent().siblings().removeClass('on')
  };
  var slideInter = setInterval(function(){
    $('.next').click();
  },2000);
  $('.slide').mouseenter(function(){
    clearInterval(slideInter)
  });
  $('.slide').mouseleave(function(){
    slideInter = setInterval(function(){
      $('.next').click();
    },2000);
  });
  $('.slide .next').on({
    'click':function(){

      slidefunc('0','-100%',set1Idx)
      set1Idx ++
      slidefunc('100%',0,set1Idx)
      if(set1Idx == $('.slide li').length){
        set1Idx = 0
        slidefunc('100%','0',set1Idx)
      }
    }
  });
  $('.slide .prev').on({
    'click':function(){
      slidefunc('0','100%',set1Idx)
      set1Idx --
      slidefunc('-100%','0',set1Idx)
      if(set1Idx < 0){
        set1Idx = $('.slidebanner li').length -1
        slidefunc('-100%','0',set1Idx)
      }
    }
  });
  $('.slide li a').click(function(){
    var thisNum = $(this).parent('li').index();
    var viewNum = $('.slide li.on').index();
    if(thisNum > viewNum){
      slidefunc('0','-100%',viewNum);
      slidefunc('100%','0',thisNum);
    }else if(thisNum < viewNum){
      slideMove('0','100%',viewNum);
      slideMove('-100%',0,thisNum);
    }
  });
  //set3 allmenu
  // var set3Idx = 0;
  // function set3slide(start,end,idx){
  //   $('.taste li').eq(set3Idx).children('img').css({
  //     'display':'block',
  //     'left':start
  //   }).animate({
  //     'left':end
  //   })
  // };
  // function slidefunc(start,end,idx){
  //   $('.taste li').eq(idx).addClass('on').children('img').css({
  //     'display':'block',
  //     'left':start
  //   }).animate({
  //     'left':end
  //   }).parent().siblings().removeClass('on')
  // };
  // $('.taste .set3next').on({
  //   'click':function(){
  //     set3slide('0','-100%',set3Idx)
  //     set3Idx ++
  //     set3slide('100%',0,set3Idx)
  //     if(set3Idx == $('.slide li').length){
  //       set3Idx = 0
  //       slidefunc('100%','0',set3Idx)
  //     }
  //   }
  // });
  // $('.taste .set3prev').on({
  //   'click':function(){
  //     slidefunc('0','100%',set3Idx)
  //     set3Idx --
  //     slidefunc('-100%','0',set3Idx)
  //     if(set3Idx < 0){
  //       set3Idx = $('.slidebanner li').length -1
  //       slidefunc('-100%','0',set3Idx)
  //     }
  //   }
  // });


});
