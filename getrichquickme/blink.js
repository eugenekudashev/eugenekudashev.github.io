 function blink(outputelemnt, textToBlink){
     let x = true;
       setInterval( ()=>{
           if(x){
            $("." + outputelemnt).html( textToBlink )
            x = false;
           }else{
            $("." + outputelemnt).html( "<br/>" )
            x = true;
           }}, 800,
           );
       }