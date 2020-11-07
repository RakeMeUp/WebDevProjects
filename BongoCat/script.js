lowLag.init({'urlPrefix':'sounds/'});
lowLag.load(["bongo0.mp3", "bongo0.wav"], "bongo0")
lowLag.load(["bongo1.mp3", "bongo1.wav"], "bongo1")

$(window).ready(function () {

  //setting up flags
  let AFired, DFired = false;

  $('.bongo-btn').on('mousedown touchstart', function (e) {7
    //prevents doubleclick
    e.preventDefault();
    //gets id of clicked obj
    let targetId = e.currentTarget.id;
    playSoundSwapPic(targetId);
  });

  $(document).on('mouseup touchend', function () {
    //small delay, to elongate hitting animation
    setTimeout(() => {
      setImgToDefault()
    }, 50);
    
  });

  $(document).on('keydown', function (e) {
    //prevents accidental escaping the document, like tabbing, alt, etc.
    e.preventDefault();
    //makes CapsLock state irrelevant
    let keyPressed = e.key.toUpperCase();

    if(keyPressed === 'A' && AFired === false){
      AFired = true;
      lowLag.play('bongo0');
      $('#imgL').attr('src', 'img/hitL.png');

    }else if(keyPressed === 'D' && DFired === false){
      DFired = true;
      lowLag.play('bongo1');
      $('#imgR').attr('src', 'img/hitR.png');
    }
  });

  $(document).keyup(function (e) { 
    if(e.key.toUpperCase() == 'A'){
      $('#imgL').attr('src', 'img/upL.png');
      AFired = false;
    } else if (e.key.toUpperCase() == 'D'){
      $('#imgR').attr('src', 'img/upR.png');
      DFired = false;
    }
  });

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
});