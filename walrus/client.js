// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  function RandomizeArray( arr ) {
    return arr.sort( function() {
      return Math.random() > Math.random() ? 1 : -1;  
    })
  }

  /*walruses = RandomizeArray([
  "http://wallpapercave.com/wp/HRVgvBA.jpg",
  "https://www.wildrepublic.com/Content/uploads/walrus-1a-xl.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/37/Walrus_-_Kamogawa_Seaworld_-_1.jpg",
  "http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/Q-Z/walrus-mom-baby.jpg",
  "https://i.ytimg.com/vi/CohJksnlT1g/maxresdefault.jpg",
  "http://kingofwallpapers.com/walrus/walrus-017.jpg",
  "https://d284gedng9vuu0.cloudfront.net/article_media/2015/08/walrus-alaska-61ca23de.jpg",
  "http://bsnscb.com/data/out/210/39756752-walrus-wallpapers.jpeg",
  "https://www.hakaimagazine.com/sites/default/files/styles/content_image_custom_user_multi_column_3x/public/walrus-haul-out.jpg?itok=milH7phB",
  "https://c1.staticflickr.com/5/4006/4684089330_4b6b70c413_b.jpg",
  "https://gapadventures.files.wordpress.com/2009/10/walrus-in-spitsbergen.jpg",
  "https://images6.alphacoders.com/324/324827.jpg",
  "http://motherboard-images.vice.com/content-images/contentimage/no-id/1462809628539377.jpg",
  "https://wallpaperscraft.com/image/walrus_face_sea_dweller_old_seal_55896_3840x2400.jpg",
  "http://2.bp.blogspot.com/-2L1SUbWNzvc/Ujsqw986sII/AAAAAAAAB6I/t_l0Hjw6EdU/s1600/Spitsbergen_2013-54.jpg",
  "http://1.bp.blogspot.com/-XFt39VvWnYQ/TpP1FciPLzI/AAAAAAAAAjw/d7nOj60RkDs/s1600/animal+picture+of+the+day.jpg",
  // "https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/walrus_pup_side_2010_Norseman_Sarah_Sonsthagen.jpg"
  "https://cdn.gomix.com/c9bbbff7-3854-4534-a80a-713779d25616%2F17.jpg"
  ])*/
  
  walruses = RandomizeArray(["http://eugenekudashev.com/walrus/1__compressed.jpg",
"http://eugenekudashev.com/walrus/2.jpg",
"http://eugenekudashev.com/walrus/3__compressed.jpg",
"http://eugenekudashev.com/walrus/4__compressed.jpg",
"http://eugenekudashev.com/walrus/5.jpg",
"http://eugenekudashev.com/walrus/6__compressed.jpg",
"http://eugenekudashev.com/walrus/7__compressed.jpg",
"http://eugenekudashev.com/walrus/8__compressed.jpg",
"http://eugenekudashev.com/walrus/9__compressed.jpg",
"http://eugenekudashev.com/walrus/10__compressed.jpg",
"http://eugenekudashev.com/walrus/11__compressed.jpg",
"http://eugenekudashev.com/walrus/12__compressed.jpg",
"http://eugenekudashev.com/walrus/13__compressed.jpg",
"http://eugenekudashev.com/walrus/14__compressed.jpg",
"http://eugenekudashev.com/walrus/15__compressed.jpg",
"http://eugenekudashev.com/walrus/16.jpg",
"http://eugenekudashev.com/walrus/17__compressed.jpg"])
  
  lines = RandomizeArray([
    "i also used to work for a startup",
    "your boss is probably a dick. sorry",
    "do you really have to go to that meeting?",
    //"keep clicking",
    "walruses don't go to standups",
    "sign up for my newsletter",
    "you should follow me on twitter",
    //"ocean and chill",
    "the shit you're doing probably doesn't matter",
    "you should see my conversion rates, man",
    "too bad you can't a/b-test your life",
    "can't wait to hear your unique selling points",
    "do you disrupt?",
    "i keep dreaming of data pipelines",
    "tell me all about your series b round",
    "data-driven approach? please tell me more",
    "brand awareness helps me live a better life",
    "holistic approach made me a better walrus",
    "some of us just don't lean in",
    "the stars are aligned, just like our business goals",
    "i know everything about pain points",
    //"what else could you be doing now?",
    //"walruses are on your side, if it makes you feel any better",
    //"this shit never ends",
    //"what do you expect from me?",
    //"i'm just a walrus",
    "i'm just a website showing pictures of walruses",
    "you'll be happier some day (maybe)",
    "there are real jobs too, you know",
    "",
    "you're taking life advice from a walrus. just saying.",
    "i'd like to add you to my professional network on linkedin",
    "at least you have stock options",
    "friday night call to action: no calls, no action",
    "funnels are fun. get it?"
  ]);
  
  // revenue, KPIs, demographics, resources, pain points, content marketing strategy,
  // deliverables, align, user goals, business goals, leads, ROI, meetups, lean in
  
  var clicks = 0
  
  function getWalrus() {
    return walruses[clicks % walruses.length]
  }
  
  function makeWalrusSpeak() {
    return lines[clicks % lines.length]
  }
  
  function DoAllTheThings() {
    $("body").css("background-image", "url(" + getWalrus() + ")")
    clicks += 1
    $("h1").html(makeWalrusSpeak())
  }

  $("body").click ( function() {
    DoAllTheThings()
  } )
  
  $(document).keypress(function( event ) {
  if ( event.which == 32 ) {
     event.preventDefault();
     
    DoAllTheThings()
  }
  
});
  
});
