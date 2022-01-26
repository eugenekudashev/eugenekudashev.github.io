// https://github.com/bryc/code/blob/master/jshash/PRNGs.md
// xoshiro128+ (128-bit state generator in 32-bit)
Math.random = (function xoshiro128p() {
  // Using the same value for each seed is _screamingly_ wrong
  // but this is 'good enough' for a toy function.
  let a = Date.now(),
    b = Date.now(),
    c = Date.now(),
    d = Date.now()
  return function () {
    let t = b << 9,
      r = a + d
    c = c ^ a
    d = d ^ b
    b = b ^ c
    a = a ^ d
    c = c ^ t
    d = (d << 11) | (d >>> 21)
    return (r >>> 0) / 4294967296
  }
})()

$("#price").text(Math.floor( Math.random() * 1000000 ) / 100)

$(function() {  //jquery ready

    setTimeout( () => {
      $(".intro").hide()
    }, 5000)
  
    var randomizer = window.setInterval(function() {
      //flip a coin -- which "random" function should be used
      
    })
  
    var random_0_to_10k = window.setInterval(function(){
      var old_price = parseFloat ( $("#price").text() )
      
      var new_price = Math.floor( Math.random() * 1000000 ) / 100
      $("#price").text(new_price)
      
      var d = new Date();
      var n = d.toLocaleTimeString();
      addData(myChart, n, new_price)
      
      if(new_price>old_price) var direction = "+"
        else var direction = "-"
      
      $("#change").text( direction + Math.floor(100*Math.abs(new_price - old_price) / Math.min( old_price, new_price )) + "%")
      
      $("#change").removeClass("up")
      $("#change").removeClass("down")
      if(direction == "+") $("#change").addClass("up")
      else if(direction == "-") $("#change").addClass("down")
      
    }, 1300);
  
//     var random_0_to_10 = window.setInterval(function(){
//         var old_price = parseFloat ( $("#price").text() )

//         var new_price = Math.floor( Math.random() * 1000 ) / 100
//         $("#price").text(new_price)

//         if(new_price>old_price) var direction = "+"
//           else var direction = "-"

//         $("#change").text( direction + Math.floor(100*Math.abs(new_price - old_price) / Math.min( old_price, new_price )) + "%")

//         $("#change").removeClass("up")
//         $("#change").removeClass("down")
//         if(direction == "+") $("#change").addClass("up")
//         else if(direction == "-") $("#change").addClass("down")

//       }, 1300);
  
  
  
  
  
    $("#buy").click(function(){
      var funds_fiat = parseFloat ( $("#funds-fiat").text() )
      var current_price = parseFloat ( $("#price").text() )
      if(funds_fiat>current_price) {
        $("#funds-fiat").text( Math.floor(funds_fiat - current_price) )
        $("#funds-coin").text( parseFloat ( $("#funds-coin").text() ) + 1 )
        $("#funds-fiat").css({backgroundColor:"yellow"})
        setTimeout( () => { $("#funds-fiat").css({backgroundColor:"white"}) }, 500 )
      }
      else {
        $(".no-funds").show()
        setTimeout( () => {
          $(".no-funds").hide()
        }, 1000)
      }
    })
  
  $("#sell").click(function() {
    var funds_fiat = parseFloat ( $("#funds-fiat").text() )
    var current_price = parseFloat ( $("#price").text() )
    var funds_coin = parseFloat ( $("#funds-coin").text() )
    if(funds_coin>0) {
      $("#funds-coin").text( parseFloat ( $("#funds-coin").text() ) - 1 )
      $("#funds-fiat").text( Math.floor(funds_fiat + current_price) )
      $("#funds-fiat").css({backgroundColor:"yellow"})
      setTimeout( () => { $("#funds-fiat").css({backgroundColor:"white"}) }, 500 )
    }
    else {
        $(".no-coins").show()
        setTimeout( () => {
          $(".no-coins").hide()
        }, 1000)
      }
  })
})









const labels = [
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Randomcoin - price history',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {responsive: true,
    maintainAspectRatio: false}
  };

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}