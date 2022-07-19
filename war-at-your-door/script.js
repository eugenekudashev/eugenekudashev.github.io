$(document).ready( () => {
  
  gsap.registerPlugin(MotionPathPlugin);
  
  animate_intro()
  // $("#intro").hide()
  $("#slide1, #slide2, #slide3, #slide4, #slide_whatt").hide()
  
  // -----------------------------------------------
  
  $("#intro .btn").click( () => {
    $("#intro").hide(); $("#slide1").show();
    gsap.to("#slide1 .btn", {scale: 1.05, duration: 2, repeat: 1000, yoyo: true})
    document.getElementById("directions").src = "assets/headphones.mp3"
    document.getElementById("directions").play()
  })
  
  $("#slide1 .btn").click( () => {
    $("#slide1").hide(); $("#slide2").show();
    gsap.to("#slide2 .btn", {scale: 1.05, duration: 2, repeat: 1000, yoyo: true})
    document.getElementById("directions").src = "assets/screenoff.mp3"
    document.getElementById("directions").play()
  })
  
  $("#slide2 .btn").click( () => {
    $("#slide2").hide()
    $("#slide3").show()
    $("#slide3 .btn").hide()
    document.getElementById("player").play()
    
    // 5 minute countdown on last slide
    var countdown = setInterval( () => { 
      var mm = parseInt( $("#mm").text() )
      var ss = parseInt( $("#ss").text() )
      if( mm+ss == 0 ) {clearInterval(countdown); $("#countdown").hide(); return;} // we reached 0:00, stop counting
      var upd = 60*mm + ss - 1
      $("#mm").text(Math.floor(upd / 60))
      var new_ss = Math.floor(upd % 60)
      if(new_ss < 10) new_ss = "0" + new_ss
      $("#ss").text(new_ss)
    } , 1000 )
    
    setTimeout( () => {
      document.getElementById("directions").src = "assets/stop_audio.mp3"
      document.getElementById("directions").play()
      $("#slide3 .btn").show()
      gsap.to("#slide3 .btn", {scale: 1.05, duration: 2, repeat: 1000, yoyo: true})
    }, 60000)
  })
  
  $("#slide3 .btn").click( () => {
    document.getElementById("player").pause()
    $("#slide3").hide()
    $("#slide4").show()
  })
  
  gsap.to("#slide4 .btn", {scale: 3, duration: 2, repeat: 1000, yoyo: true})
  
  $("#what-btn").click( () => {
    $("#slide_what").show()
    $("#slide4").hide()
  })
  
  $("#slide_what").click( () => {
    $("#slide_what").hide()
    $("#slide4").show()
  })
  
  // -----------------------------------------------
  
  async function animate_intro() {
//     init state
    $("#h2, #intro .btn").hide()
    $("#intro").css("backgroundColor", "red")
        
    var random_pauses = setInterval( function() {
      if(Math.random()>0.7) tl.pause()
      else tl.resume()
    }, 200)
    
    var tl = gsap.timeline();
    
    tl.addPause(1)
    
    tl.to("#logo", {duration: 3, motionPath:{path: "#path"}, onStart: () => { $("#logo h1").addClass("active") }, onComplete: function() {
      $("#logo h1").removeClass("active")
      $("#closedhand").remove()
    }})
    
    
    tl.to("#h2", {duration: 3, motionPath: {path: "#path2"}, onStart: () => { $("#h2 h2").addClass("active"); $("#h2").show(); },onComplete: () => {
      $("#h2 h2").removeClass("active")
      $("#closedhand").remove()
      $("#intro .btn").show();
    }})
    
    tl.to("#intro .btn", { duration: 3, motionPath: {path: "#path3", align: "#path3", alignOrigin: [0.5,0.5]}, onStart: () => {  }, onComplete: () => { $("#closedhand").remove(); $("#intro .btn svg").remove(); clearInterval(random_pauses) } })
    
    tl.to("#intro .btn", {scale:1.2, duration: 2, repeat: 1000, yoyo: true, ease: "linear"})
  } // end of animate_intro
}) 




// var anim

  /*
  anim = new TypeIt("h1", {
  cursor: false,
  speed: 50,
  afterComplete: async () => {
    // intro_is_over = true
    // $("#intro h2").addClass("blink")
    // blink("blink","click anywhere to begin");
    }
  }).go()
  
  delay(1000)
  
  anim = new TypeIt("h2", {
  cursor: false,
  speed: 50,
  afterComplete: async () => {
    // intro_is_over = true
    // $("#intro h2").addClass("blink")
    // blink("blink","click anywhere to begin");
    }
  }).go()
  */
  
  //register the plugin (just once)

    // tl.to("#intro .btn", {scale:1, duration: 2, repeat: 1000})
    
//     let tween = gsap.to("#logo", {
//       duration: 3, 
//       ease: "power1.inOut",
//       motionPath:{
//         path: "#path",
//         align: "#path",
//         autoRotate: false,
//         alignOrigin: [0, 0]
//       }
//     }).then( async () => {
//       $("#cursor").show()
//       $("#closedhand").hide()
//       await delay(2000)
//       $("#cursor").remove()
//       $("#closedhand").remove()
//       $("#h2").show()
//       $("#closedhand").hide()
//       await delay(2000)
//     }).then ( () => {
//       $("#cursor").hide()
//       $("#closedhand").show()
      
//       gsap.to("#h2", {
//         duration: 3, 
//         repeat: 0,
//         repeatDelay: 0,
//         yoyo: true,
//         ease: "power1.inOut",
//         motionPath:{
//           path: "#path2",
//           align: "#path2",
//           autoRotate: false,
//           alignOrigin: [0, 0]
//         }
//       })
//     })

// const delay = ms => new Promise(res => setTimeout(res, ms));