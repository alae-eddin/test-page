
// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.logo', { duration: 200 });

sr.reveal('.BI', { 
  origin: 'left', 
  duration: 2000 
});

sr.reveal('.sleekslider', { 
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1000
});

sr.reveal('.coords', { 
  duration: 200 
});

sr.reveal('.what-we-do ', { 
    origin: 'left', 
  duration: 1000 
});

sr.reveal('.our-services', { 
  origin: 'top', 
  duration: 2000 
});


sr.reveal('.client-brands img', { 
  origin: 'top', 
  duration: 2000 
});

$(document).ready(function() {
    $('.sleekslider').sleekslider({
        thumbs: ['../img/mockups-0.png', '../img/mockups-1.png', '../img/mockups-2.png', '../img/mockups-3.png'],
        labels: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
        speed: 4000
    });

        $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;

})


// function([string1, string2],target id,[color1,color2])    
 consoleText(['<b>BURGER KING</b>'], 'text',['tomato']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


TweenMax.to(object_to_move, 1.00, {x:0, y:10, yoyo:true, repeat:-1});
TweenMax.to(object_to_move, 2.00, { repeat:-1});


   TweenMax.from(".our-services img", 2, {
            delay: 2,
            // opacity: 0,
            // y: 20,
            scale: 0,
            ease: Expo.easeInOut
   });  

  TweenMax.from(".client-brands", 1, {
            delay: 1,
            // opacity: 0,
            // y: 20,
            scale: 0,
            ease: Expo.easeInOut
   });  

/*
    TweenMax.from(".logo", 1, {
        delay: 1.4,
        opacity: 0,
            ease: Power3.easeInOut
    })
 TweenMax.from(".navbar", 1, {
        delay: 1.5,
        opacity: 0,
            ease: Power3.easeInOut
    })


 TweenMax.from(".sleekslider", 1, {
        delay: 1.5,
        opacity: 0,
            ease: Power3.easeInOut
    })



      

      TweenMax.from(".BI", 1, {
            delay: 1.4,
            opacity: 0,
            ease: Expo.easeInOut
      });

      TweenMax.from(".header-status", 1, {
            delay: 1.6,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
      });

         TweenMax.staggerFrom(".we-do", 1, {
            delay: 2.6,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
      }, 0.08);

         TweenMax.from(".our-services img", 3, {
            delay: 3,
            // opacity: 0,
            // y: 20,
            scale: 0,
            ease: Expo.easeInOut
   });  
*/
