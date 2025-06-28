let web3 = new Web3("https://cloudflare-eth.com");

var test_env = false;

var counter = 0;
var names = [
  "Lawson",
  "Lennon",
  "Mohammad",
  "Keshawn",
  "Aron",
  "Hayden",
  "Emilio",
  "Zander",
  "Vance",
  "Ishaan",
  "Tyson",
  "Donald",
  "Quintin",
  "Arjun",
  "Bryce",
  "Zachary",
  "Agustin",
  "Deven",
  "Bruno",
  "Troy",
  "Grady",
  "Tyrone",
  "Jaime",
  "Zachariah",
  "Franco",
  "Jacob",
  "Jonas",
  "Aydan",
  "Camden",
  "Chris",
  "Adonis",
  "Taylor",
  "Kaiden",
  "Aiden",
  "Adrien",
  "Aaron",
  "Bryant",
  "Barrett",
  "Emanuel",
  "Spencer",
  "Leon",
  "Jan",
  "Wesley",
  "Jerome",
  "Alvin",
  "Zayne",
  "Jaylen",
  "Ezequiel",
  "Michael",
  "Alijah",
  "Wade",
  "Jaron",
  "Timothy",
  "Cooper",
  "Haiden",
  "Toby",
  "Ashton",
  "Izayah",
  "Mekhi",
  "Dane",
  "Emerson",
  "Ian",
  "Alan",
  "Amir",
  "Immanuel",
  "Rashad",
  "Ernest",
  "Pierre",
  "Ty",
  "Callum",
  "Quinton",
  "Easton",
  "Micah",
  "Dexter",
  "Lincoln",
  "Isaias",
  "Devyn",
  "Denzel",
  "Addison",
  "Tony",
  "Salvador",
  "Dillan",
  "Cristopher",
  "Nathan",
  "Raphael",
  "Yurem",
  "Curtis",
  "Bradley",
  "Matthias",
  "Kole",
  "Gerald",
  "Billy",
  "Edgar",
  "Kristopher",
  "Rory",
  "Tobias",
  "Deacon",
  "Issac",
  "Ronan",
  "Malaki",
  "Bradyn",
  "Jamison",
  "Pablo",
  "Ezekiel",
  "Fernando",
  "Lamont",
  "Bernard",
  "Maurice",
  "Zaire",
  "Ronnie",
  "Caleb",
  "Brendon",
  "Oswaldo",
  "Blaze",
  "Johnny",
  "Lamar",
  "Armando",
  "Isiah",
  "Sincere",
  "Sidney",
  "Ainsley",
  "Aubrie",
  "Sidney",
  "Irene",
  "Jazmine",
  "Kennedy",
  "Amy",
  "Shaylee",
  "Michelle",
  "Gabriela",
  "Armani",
  "Mila",
  "Kali",
  "Isabell",
  "Cherish",
  "Savanah",
  "Jaylene",
  "Mariana",
  "Taniyah",
  "Elsa",
  "Jade",
  "Sasha",
  "Helena",
  "Cheyanne",
  "Miley",
  "Marisol",
  "Madalynn",
  "Jaslene",
  "Mary",
  "Elizabeth",
  "Amara",
  "Journey",
  "Imani",
  "America",
  "Jaida",
  "Riley",
  "Johanna",
  "Annabel",
  "Ann",
  "Mara",
  "Jaylynn",
  "Monica",
  "Paulina",
  "Claire",
  "Annalise",
  "Bethany",
  "Andrea",
  "Kristen",
  "Siena",
  "Sylvia",
  "Hailie",
  "Kailee",
  "Ashleigh",
  "Julianna",
  "Dania",
  "Kelly",
  "Abagail",
  "Anabelle",
  "Jessica",
  "Macy",
  "Sariah",
  "Ali",
  "Haven",
  "Linda",
  "Zaria",
  "Crystal",
  "Kamryn",
  "Ana",
  "Brisa",
  "Shiloh",
  "Ashlee",
  "Joy",
  "Leticia",
  "Mackenzie",
  "Kiera",
  "Jaylah",
  "Alena",
  "Bianca",
  "Aleena",
  "Lily",
  "Jaqueline",
  "Aleah",
  "Evelyn",
  "Lorelai",
  "Olive",
  "Theresa",
  "Maddison",
  "Yaritza",
  "Tessa",
  "Paris",
  "Aryana",
  "Hailee",
  "Maia",
  "Marley",
  "Jamya",
  "Nyasia",
  "Jazlyn",
  "Elise",
  "Penelope",
  "Perla",
  "Carleigh",
  "Laila",
  "Kathy",
  "Haylee",
  "Destiney",
  "Sofia",
  "Alma",
  "Julissa",
  "Celeste",
  "Karli",
  "Madelyn",
  "Tanya",
  "Chana",
  "Yasmine",
  "Judith",
  "Lillie",
  "Hadassah",
  "Esperanza",
  "Giuliana",
  "Lisa",
];
var places = [
  "Lexington-Fayette",
  "Kentucky",
  "Columbus",
  "Ohio",
  "San Jose",
  "California",
  "Orlando",
  "Florida",
  "Tucson",
  "Arizona",
  "Raleigh",
  "North Carolina",
  "Oklahoma City",
  "Oklahoma",
  "San Bernardino",
  "California",
  "San Diego",
  "California",
  "Atlanta",
  "Georgia",
  "Pittsburgh",
  "Pennsylvania",
  "Huntington",
  "New York",
  "Bakersfield",
  "California",
  "Montgomery",
  "Alabama",
  "St. Paul",
  "Minnesota",
  "Phoenix",
  "Arizona",
  "Miami",
  "Florida",
  "Minneapolis",
  "Minnesota",
  "New Orleans",
  "Louisiana",
  "Toledo",
  "Ohio",
  "Oakland",
  "California",
  "Omaha",
  "Nebraska",
  "Rochester",
  "New York",
  "Colorado Springs",
  "Colorado",
  "Durham",
  "North Carolina",
  "Scottsdale",
  "Arizona",
  "Arlington",
  "Virginia",
  "Birmingham",
  "Alabama",
  "Washington",
  "District of Columbia",
  "Boise",
  "Idaho",
  "Albuquerque",
  "New Mexico",
  "Aurora",
  "Colorado",
  "Anchorage",
  "Alaska",
  "Detroit",
  "Michigan",
  "St. Louis",
  "Missouri",
  "Santa Ana",
  "California",
  "Arlington",
  "Texas",
  "Henderson",
  "Nevada",
  "Stockton",
  "California",
  "Las Vegas",
  "Nevada",
  "Corpus Christi",
  "Texas",
  "Denver",
  "Colorado",
  "Garland",
  "Texas",
  "Dallas",
  "Texas",
  "Philadelphia",
  "Pennsylvania",
  "Tampa",
  "Florida",
  "Hialeah",
  "Florida",
  "Chula Vista",
  "California",
  "Buffalo",
  "New York",
  "Greensboro",
  "North Carolina",
  "Plano",
  "Texas",
  "Fresno",
  "California",
  "Laredo",
  "Texas",
  "Memphis",
  "Tennessee",
  "Milwaukee",
  "Wisconsin",
  "Sacramento",
  "California",
  "Charlotte",
  "North Carolina",
  "Tulsa",
  "Oklahoma",
  "Cincinnati",
  "Ohio",
  "Indianapolis",
  "Indiana",
  "Chandler",
  "Arizona",
  "Jacksonville",
  "Florida",
  "Austin",
  "Texas",
  "San Francisco",
  "California",
  "Kansas City",
  "Missouri",
  "Portland",
  "Oregon",
  "Jersey City",
  "New Jersey",
  "Boston",
  "Massachusetts",
  "Baltimore",
  "Maryland",
  "Norfolk",
  "Virginia",
  "Glendale",
  "Arizona",
  "North Hempstead",
  "New York",
  "El Paso",
  "Texas",
  "Lincoln",
  "Nebraska",
  "Fort Wayne",
  "Indiana",
  "Fort Worth",
  "Texas",
  "Nashville-Davidson",
  "Tennessee",
  "Chesapeake",
  "Virginia",
  "Chicago",
  "Illinois",
  "Modesto",
  "California",
  "Lubbock",
  "Texas",
  "St. Petersburg",
  "Florida",
  "Los Angeles",
  "California",
  "Riverside",
  "California",
  "Virginia Beach",
  "Virginia",
  "Reno",
  "Nevada",
  "Mesa",
  "Arizona",
  "San Antonio",
  "Texas",
  "Long Beach",
  "California",
  "Newark",
  "New Jersey",
  "Anaheim",
  "California",
  "Houston",
  "Texas",
  "Seattle",
  "Washington",
  "Madison",
  "Wisconsin",
  "Baton Rouge",
  "Louisiana",
  "Cleveland",
  "Ohio",
  "New York",
  "New York",
  "Wichita",
  "Kansas",
  "Akron",
  "Ohio",
  "Honolulu",
  "Hawaii",
];

var intro_is_over = false;

const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

// init or something
() => {};

$("#metamask").click(async () => {
  if (!isMetaMaskInstalled()) alert("metamask is not installed😿");
  else getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  if (accounts[0]) $("#metamask").text("metamask wallet connected✅");
}

let accounts = [];
var gas_fee_value = "470DE4DF820000"; //0.02ether converted to wei (* 10^18) and converted to hex

$("#payme").click(() => {
  if (!isMetaMaskInstalled()) alert("metamask is not installed😿");
  else {
    if (!accounts[0]) alert("wallet not connected😿");
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: "0xb39653Be7bbeCf976b717aAaFa042D7bd69787b4",
            value: gas_fee_value,
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  }
});

// intro animation
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

var anim;

const intro_animation = async () => {
  // $("#intro").css("background-color", "red")
  // await delay(300)
  // $("#intro").css("background-color", "black")
  // await delay(300)
  $("#intro").css("background-color", "red");
  await delay(700);
  $("#intro").css("background-color", "black");
  $("#intro h1").text("get");
  await delay(700);
  $("#intro").css("background-color", "red");
  $("#intro h1").text("get rich");
  await delay(700);
  $("#intro").css("background-color", "black");
  await delay(700);
  $("#intro").css("background-color", "red");
  $("#intro h1").text("get rich quick");
  await delay(350);
  $("#intro p").text("#NFT");
  await delay(350);
  $("#intro p").text("#NFT #web3");
  await delay(350);
  $("#intro p").text("#NFT #web3 #crypto");
  await delay(350);
  $("#intro p").text("#NFT #web3 #crypto #metaverse");

  await delay(1000);

  anim = new TypeIt("#intro h2", {
    speed: 50,
    afterComplete: async () => {
      intro_is_over = true;
      $("#intro h2").addClass("blink");
      blink("blink", "click anywhere to begin");
    },
  })
    .type("a once in a lifetime opportunity")
    .pause(1000)
    .delete()
    .type("this is your chance")
    .pause(1000)
    .delete()
    .type("your life is about to change")
    .pause(1000)
    .delete()
    .type("you will now become rich")
    .pause(1000)
    .delete()
    .pause(1000)
    .type("click anywhere to begin")
    .go();
};

// helper function for animated transitions between slides
function transition_animation(a, b) {
  $(".red-circle").animate({ width: "300em", height: "300em" }, 750, () => {
    $(a).hide();
    $(b).show();
    $(".red-circle").animate({ width: "0", height: "0" }, 250, () => {});
  });
}

$(function () {
  var audio = new Audio("./assets/590_full_catch-the-bullet_0143_preview.mp3");
  // this needs to be global, so i can stop it later
  var audio_fin = new Audio(
    "./assets/benny_hill_theme_-7340371656728599903.mp3",
  );
  // preloading it here as well to avoid delays/bugs later

  var eth_to_usd_rate = 0;
  $.get(
    "https://api.coinbase.com/v2/exchange-rates?currency=ETH",
    function (data) {
      eth_to_usd_rate = Number(data.data.rates.USD).toFixed(2);
      console.log(eth_to_usd_rate);
    },
  );

  // handle visibility, could be done better

  if (test_env == false) {
    // $("#intro").hide()
    intro_animation();
    $("#slide0").hide();
    $("#slide1").hide();
    $("#slide2").hide();
    $("#slide3").hide();
    $("#slide4").hide();
  } else {
    $("#intro").hide();
    // intro_animation()
    $("#slide0").hide();
    // $("#slide1").hide()
    $("#slide2").hide();
    $("#slide3").hide();
    $("#slide4").hide();
  }

  const range = document.getElementById("range"),
    rangeV = document.getElementById("rangeV"),
    setValue = () => {
      const newValue = Number(
          ((range.value - range.min) * 100) / (range.max - range.min),
        ),
        newPosition = 10 - newValue * 0.2;
      // rangeV.innerHTML = `<span>${range.value}ETH</span>`;
      // rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;

      if (newValue == 0) {
        alert("really?");
        return;
      } else if (newValue == 100) {
        alert("hey, don't be too greedy");
        return;
      } else if (newValue == 69) {
        alert("Nice.");
        return;
      }

      $(".how-much").text(newValue.toFixed(2));
      $("#eth-to-usd").text((newValue * eth_to_usd_rate).toFixed(2));
    };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener("input", setValue);

  // ---------------------------------------------
  // INTRO STATE HANDLING -- TRANSITION TO SLIDE 1

  var intro_impatience = 0;
  $("#intro").click(async () => {
    intro_impatience++;
    if (intro_impatience == 3) {
      anim.destroy();
      $("#intro h2").html(
        "a once in a lifetime opportunity<br/><br/>\
this is your chance<br/><br/>\
your life is about to change<br/><br/>\
you will now become rich<br/><br/>\
click anywhere to begin",
      );
      await delay(3000);
      intro_is_over = true;
    }

    if (intro_is_over) {
      $("#intro").hide();
      $("#slide0").show();
      // transition_animation("#intro", "#slide0")

      // animate slider (2 movements)
      var step = 0.25;
      const slider_init_move = setInterval(() => {
        if (parseFloat($("#range").val()) > 67 && step > 0) step *= -1;
        if (parseFloat($("#range").val()) == 23.25 && step < 0)
          clearInterval(slider_init_move);

        $("#range").val(parseFloat($("#range").val()) + step);
      }, 1);

      await delay(1);

      $(".modal").show();
      $(".modal-play").click(() => {
        audio.play();
        audio.loop = true;
        $(".modal").hide();
      });
      // https://www.premiumbeat.com/royalty-free-tracks/catch-the-bullet
      $(".modal-nah").click(() => {
        $(".modal").hide();
      });
    }
  });

  const foo = async () => {
    // do something
  };

  var prize_pool = 116790;
  setInterval(async () => {
    var test_timer_counter = 0;
    var test_timer = setInterval(() => {
      $("#prize-pool").text(Math.floor(Math.random() * 999999));
      test_timer_counter++;
      if (test_timer_counter == 66) clearInterval(test_timer);
    }, 15);
    prize_pool -= Math.floor(Math.random() * 500);
    await delay(1050);
    $("#prize-pool").text(prize_pool);
    var online_step_sign = Math.random() > 0.5 ? 1 : -1;
    $("#users-online").text(
      parseInt($("#users-online").text()) +
        Math.floor(Math.random() * 5) * online_step_sign,
    );
  }, 5000);

  // ---------------------------------------------

  $("#slide0 .getgetget").click(() => {
    transition_animation("#slide0", "#slide1");

    document.cookie = "amount = " + parseFloat($("#range").val());
  });

  $("#no-wallet").click(() => {
    $("#wallet-addr").val("0xb39653Be7bbeCf976b717aAaFa042D7bd69787b4");
  });

  $("#slide1 .getgetget").click(async () => {
    // validate address
    var addr = $("#wallet-addr").val();
    if (!Web3.utils.isAddress(addr)) {
      // it's not an ETH address
      // try to resolve as ENS
      await web3.eth.ens
        .getAddress(addr)
        .then(function (address) {
          console.log(address);
          $("#wallet-addr").val(address);
        })
        .catch(function (e) {
          console.error(e.message); // "oh, no!"
          alert("invalid ETH / ENS address❌");
        });
      return;
    } else {
      transition_animation("#slide1", "#slide2");

      $(".how-much-red").text(Number(document.getElementById("range").value));
      $(".current_fee_eth").text(
        (Number(document.getElementById("range").value) / 1000).toFixed(2),
      );
      gas_fee_value = (
        (Number(document.getElementById("range").value) / 1000).toFixed(2) *
        Math.pow(10, 18)
      ).toString(16);
      $(".current_fee_usd").text(
        Number(document.getElementById("range").value) * 4,
      );
    }
  });

  $("#slide2 .getgetget").click(async () => {
    transition_animation("#slide2", "#slide3");

    // 5 minute countdown on last slide
    var payment_countdown = setInterval(() => {
      var mm = parseInt($("#mm").text());
      var ss = parseInt($("#ss").text());
      if (mm + ss == 0) {
        clearInterval(payment_countdown);
        return;
      } // we reached 0:00, stop counting
      var upd = 60 * mm + ss - 1;
      $("#mm").text(Math.floor(upd / 60));
      var new_ss = Math.floor(upd % 60);
      if (new_ss < 10) new_ss = "0" + new_ss;
      $("#ss").text(new_ss);
    }, 1000);

    // payment popups
    var show_popups = function () {
      if (Math.random() > 0.2) $(".popup").first().remove();
      counter = Math.floor(5000 * Math.random() + 500);
      $("#slide3").append(
        "<p class='popup' style='background:blue;position:fixed; top: " +
          Math.floor(Math.random() * window.innerHeight) +
          "px; left: " +
          Math.floor(Math.random() * window.innerWidth) +
          "px; '>" +
          names[Math.floor(Math.random() * names.length)] +
          " from " +
          places[Math.floor(Math.random() * places.length)] +
          " just got paid $" +
          (counter * 37.2).toFixed(2) +
          "</p",
      );
      setTimeout(show_popups, counter);
    };

    setTimeout(show_popups, counter);

    setInterval(() => {
      $("#countdown").css("fontSize", "+=0.2px");
    }, 1000);

    // --------------------

    var animation_ongoing = true;
    $(".disabled").click(() => {
      if (animation_ongoing) alert("pay the gas fees to get your FREE money");
    });

    // await delay(60 * 1000)
    // alert("something went wrong. the page will be reloaded.")
    // $("#slide3").hide()
    // await delay(2000)
    // $("#slide3").show()
    // $("#mm").text("05")
    // $("#ss").text("00")
    // await delay(60 * 1000)
    // $("#slide3").hide()
    // alert("your computer is offline. check your internet connection.")
    // await delay(5000)
    // $("#mm").text("05")
    // $("#ss").text("00")
    // $("#slide3").show()

    await delay(1 * 60 * 1000);
    // await delay(5 * 1000) // TEST, NOT FOR PROD
    $("#slide3 .disabled").removeClass("disabled");
    animation_ongoing = false; // had to do this, otherwise the $(".disabled") event handler was triggering, even after class was removed

    $("#slide3 .getgetget").click(() => {
      transition_animation("#slide3", "#slide4");
      audio.pause();
      audio.src = "./assets/benny_hill_theme_-7340371656728599903.mp3";
      audio.play();
    });
  });
});
// end of $(function
