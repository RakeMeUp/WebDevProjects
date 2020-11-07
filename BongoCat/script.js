$(document).ready(function () {
  lowLag.init({'urlPrefix':'sounds/'});
  lowLag.load(["bongo0.mp3", "bongo0.wav"], "bongo0")
  lowLag.load(["bongo1.mp3", "bongo1.wav"], "bongo1")

  function playSoundSwapPic(targetId){
    if(targetId == 'bongo0'){
      $('#imgL').attr('src', 'img/hitL.png');
      lowLag.play('bongo0');
    }else if (targetId == 'bongo1'){
      $('#imgR').attr('src', 'img/hitR.png');
      lowLag.play('bongo1')
    }
  };
  
  function setImgToDefault(){
    $('#imgL').attr('src', 'img/upL.png');
    $('#imgR').attr('src', 'img/upR.png');
  };

  $('.bongo-btn').mousedown(function (e) {
    let targetId = e.currentTarget.id;
    playSoundSwapPic(targetId);
  });

  $(document).mouseup(function () {
    setImgToDefault();
  });


  let AFired = false;
  let DFired = false;

  $(document).on('keydown', function (e) {
    e.preventDefault();
    let key = e.key.toUpperCase();

    if(key === 'A' && AFired === false){
      lowLag.play('bongo0');
      AFired = true;
      $('#imgL').attr('src', 'img/hitL.png');
    }else if(key === 'D' && DFired === false){
      lowLag.play('bongo1');
      DFired = true;
      $('#imgR').attr('src', 'img/hitR.png');
    }
  });

  $(document).keyup(function (e) { 
    if(e.key.toUpperCase() == 'A'){
      $('#imgL').attr('src', 'img/upL.png');
      AFired = false;
      console.log(AFired)
    } else if (e.key.toUpperCase() == 'D'){
      $('#imgR').attr('src', 'img/upR.png');
      DFired = false;
    }
  });

});