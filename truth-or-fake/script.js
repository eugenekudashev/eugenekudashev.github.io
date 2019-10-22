$("document").ready(function() {
  var fake = []
  var real = []
  
  fake = [
    "Грета Тунберг объявила о старте всемирного детского похода за экологию",
    "Президентом Парагвая избрали доярку",
    "Швеция откажется от национальных вооруженных сил к 2024 году",
    "Парламент Монголии денонсировал договор о распаде Золотой Орды",
    "«Аэрофлот» намерен изменить подход к освящению используемой техники",
    "В Санкт-Петербурге откроется первый вуз, готовящий вебкам-моделей",
    "Власти Грузии открыли первую в стране прозрачную поликлинику",
    "В Якутии успешно вывели первую партию мамонтов",
    "В России создадут благотворительный фонд для помощи бизнесменам, пострадавшим от санкций",
    "Россиянам начнут выплачивать пенсии биткоинами",
    "В России пройдут стихийные народные митинги за ограничение свободы собраний",
    "Мединский назвал фильм «Джокер» порочащим честь клоунов и пригрозил отобрать у него прокатную лицензию",
    "В российских школах будут изучать песни Михаила Круга",
    "Вестминстерское аббатство предоставит мусульманам место для потрошения баранов на Курбан-байрам",
    "Украинец пытался разрушить памятник Октавиану Августу в Риме, по ошибке перепутав его с Путиным",
    "В Кении проводят гуманитарную акцию в поддержку Омска",
    "РПЦ предложила гражданам вкладываться в храмостроительные кооперативы"
         ]
  real = [
    //"Россияне выбрали лучших кандидатов в президенты среди киногероев",
    "Россияне назвали Штирлица лучшим кандидатом на пост президента",
    "Постпредство России посоветовало НАТО купить учебники по истории",
    "Детей освободят от платы за вывоз мусора",
"«Росконтроль» проверил российский чай в пакетиках",
    "Медведев заявил, что в российской экономике все в порядке",
    "Поставщики сообщили о росте цен на гречку в России",
    "Боец Росгвардии погиб во время экзамена",
    "На Сахалине власти открыли аллею с поролоновыми русалками за полмиллиона рублей",
"На 3D-принтере напечатали шоколадную конфету с жидкой начинкой",
"В Новосибирске полицейский допросил покойника во время расследования",
"В Москве на Ярославском шоссе автомобиль насмерть сбил крокодила",
"В Москве мужчина насмерть подавился салом в темноте",
"В Воронеже жителям многоэтажки вместо отопления по батареям пустили ток",
"В Костроме продают сырки со вкусом тревоги",
"Наркоман покусал российского двойника Леонардо ДиКаприо",
"В Пятигорске робот в папахе станцевал лезгинку перед Дмитрием Рогозиным",
"Омич попал в больницу после попытки съесть стул"
         ]
  
  /*
  https://yandex.ru/news/story/Boec_Rosgvardii_pogib_vo_vremya_ehkzamena--f600259127e99d3225bec6f08af70bb4?lr=213&lang=ru&stid=UR8vBbIOlpJ9KvrnzZhu&persistent_id=77458803&rubric=incident&from=index
  https://yandex.ru/news/story/Gorbachev_ozvuchil_pobeditelej_v_kholodnoj_vojne--fc7fba1f39208b415178eebe33efafd4?lr=213&lang=ru&stid=qP8y4U3aH9nV_VNSlahv&persistent_id=77612881&rubric=index&from=index
  https://yandex.ru/news/story/Rossiyane_vybrali_luchshikh_kandidatov_v_prezidenty_sredi_kinogeroev--bf5c75297167bd8cfd663819e851ea9e?lr=213&lang=ru&stid=sS6JC5DYLPgE_bmk4U_W&persistent_id=77495653&rubric=personal_feed&from=index
  https://yandex.ru/news/story/Postpredstvo_Rossii_posovetovalo_NATO_kupit_uchebniki_po_istorii--2cf9f89aaa653e736bf0edcc0ac1a0b5?lr=213&lang=ru&stid=LDiTS8cj22xjLDrRYggJ&persistent_id=77621674&rubric=politics&from=index
  https://yandex.ru/news/story/Detej_osvobodyat_ot_platy_za_vyvoz_musora--b7f3f6ebb9f4f5c81d35a3012c003333?lr=213&lang=ru&stid=ro2rZpq1HbsHXXaK46eu&persistent_id=77485742&rubric=society&from=index
  https://yandex.ru/news/story/Roskontrol_proveril_rossijskij_chaj_v_paketikakh--52bc4dd60f73c1d4bf6dac33109c7eef?lr=213&lang=ru&stid=6GSGgjSTGellb1Z-EFoS&persistent_id=77511896&rubric=society&from=index
  https://yandex.ru/news/story/Medvedev_zayavil_chto_v_rossijskoj_ehkonomike_vse_v_poryadke--0e5a170203aaa8d78029f20085973252?lr=213&lang=ru&stid=2SxhfV9nHr6PrKFNi0Yw&persistent_id=77534433&rubric=business&from=index
  https://yandex.ru/news/story/Postavshhiki_soobshhili_o_roste_cen_na_grechku_v_Rossii--b7f3a0413211e044c77e978ffc800eff?lr=213&lang=ru&stid=hOhTeB4rV-3T6E718wWO&persistent_id=77534106&rubric=business&from=index
  
  */
  
  // initiate
  var str = "";
  var answer;
  var score = 0;
  var max_score = (real.length + fake.length) * 10;
  
  //helper function
  function load_string() {
    if( Math.random() > 0.5 ) {
      str = real[Math.floor(Math.random()*real.length)]
      answer = true;
      
      //remove element from array (?)
      real.splice(real.indexOf(str), 1);
  }
    else {
      str = fake[Math.floor(Math.random()*fake.length)]
      answer = false;
      
      fake.splice(fake.indexOf(str), 1);
    }
    // print
    $("h1").text(str)
  }
  
  // populate
  load_string();
  
  //process keys
    $(document).keydown(function( event ) {
      if ( event.which == 37 ) {
         event.preventDefault();
        $("#correct").click()
      }
      if ( event.which == 39 ) {
         event.preventDefault();
         
        $("#wrong").click()
      }
    })
  
  $("span").click(function() {
    var tmp = $(this);
    if($(this).attr('id')=="correct" && answer==true || $(this).attr('id')=="wrong" && answer==false ) {
      tmp.addClass('correct')
      score += 10;
      $("#score").text(score)
      
      setTimeout(function(){
        tmp.removeClass('correct')
        $("h1").animate({width:'toggle'},150);
      }, 1000);
      
    }
    else {
      tmp.addClass('wrong')
      score -= 5;
      $("#score").text(score)
      
      setTimeout(function(){
        tmp.removeClass('wrong')
        $("h1").animate({width:'toggle'},150);
      }, 1000);
    }
    
    //check if game over or not
    if(real.length > 0 && fake.length > 0) {
      // load next
      setTimeout(function(){
        load_string();
        $("h1").animate({width:'toggle'},150);
      }, 1250);
      
    }
    else {
      $("h1").html("ура, это конец!<br/><br/> счёт: " + score + "/" + max_score + " <br/><br/>новостей больше нет, но вы держитесь<br/><br/><a href=''>сыграть еще раз</a>")
      $("#question").hide()
      $("#score").hide()
    }
    
  })
  
})



