
function $(id){
  return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function(){
   var changeStyle = $('footer').getElementsByClassName('changeStyle')[0];
   console.log(changeStyle);
   changeStyle.onclick = function(){
      // 改变背景颜色
      var body = document.getElementsByTagName('body')[0];
      body.background = 'images/bg.jpg';
      body.style.backgroundSize = 'cover';
      // 改变图片的logo
      $('logo').src = 'images/logo_white_ee663702.png';
      // 改变导航条
      $('header').style.backgroundColor = 'rgba(0,0,0,0.2)';
      $('header').style.marginTop = '0px';
      $('header').style.height = '40px';
      $('header').style.lineHeight = '40px';
      var aArr = $('header').getElementsByTagName('a');
      for(var i in aArr){
          aArr[i].style.color = 'white';
      }
   };
};

