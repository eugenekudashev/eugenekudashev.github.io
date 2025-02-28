---
paginate: true
theme: vertical
---



<style>

* {
	font-family: JetBrains Mono;
}

.bespoke-marp-osc {
  display: none !important;
}

section {
  font-size: 350%;
}

section.large {
  font-size: 500%;
}

section.small {
  font-size: 250%;
}

section::after {
  color: #000;
  font-size: 0.6em !important;
}

section.invert::after {
	color: #fff;
}

section.cover::after {
	display: none;
}

section.invert {
	background: black;
	color: white;
}

section li {
  list-style-type: none;
}

p {
  margin-bottom: 1.5em;
}

</style>


# «Я написал скрипт на питоне и нашёл квартиру в Берлине за 2 недели»

## О последствиях автоматизации, или как жить тем, кто не научился программировать

<!-- Поиск квартиры в городе с кризисом жилья — так себе удовольствие. Но его можно автоматизировать! -->

---

Что происходит, когда удовлетворение базовой человеческой потребности начинает целиком зависеть от технологий?

---

Я сейчас живу в Берлине, и, конечно же, как и все в Берлине, 

# я ищу квартиру

Вообще, в Берлине проще запомнить, кто из твоих друзей *не ищет* квартиру

Кризис жилья здесь уже давно, лет десять точно — и всем это известно, и писать об этом было бы совершенно неинтересно и скучно — если бы не одно открытие, которым я хочу поделиться

---

<!-- _class: invert -->

# Благодаря тому, что мы теперь ищем квартиры в интернете, 

## всю скучную рутинную часть поиска оказалось возможно автоматизировать 

— и почти бесплатно

---

Давайте быстро обрисую берлинский контекст

- — Никого здесь не удивишь историей о том, как ты уже год ищешь квартиру и не можешь найти долгосрочный контракт
— В объявлениях «ищу квартиру» регулярно появляются подписи вроде «вознаграждение €5,000 за успешно заключенный контракт» (пять тысяч)
— По словам разных риэлторов, в первые 2-3 минуты после публикации объявления о свободной квартире приходит 100-200-300 откликов

---

(И много других интересных местных нюансов)

Эта информация приводит к нескольким мыслям

1. а так ли уж мне хочется жить в берлине?
2. а что можно сделать, чтобы всё-таки не жить под мостом?

---

А потом я гулял по интернету и нашёл текст

---

Его автор рассказывает, как он автоматизировал поиск квартиры

То есть сделал бота, который постоянно обновлял сайты с квартирами, и отправлял ответы на все новые подходящие объявления

Так он нашёл новый дом за 3 месяца, 484 отправленных отклика, и 13 просмотров

---

<!-- _class: large -->

3 месяца

484 отправленных отклика

13 просмотров

---

Я рад за человека, который смог выбраться из своей сложной ситуации и найти новый дом

Но феномен автоматизации меня совершенно поразил, и точно заслуживает анализа, внимания и осмысления

---

# Оказывается, есть много разных ботов, которые будут искать квартиру за тебя

Истории, которые мне удалось найти, подтверждают, что эти боты не просто помогают искать квартиру, а практически гарантированно её находят

---

<!-- _class: smal_l -->

С одной стороны — ничего удивительного

Люди находят новые способы применять технологии для решения своих задач, и это здорово

Действительно, здорово, что можно автоматизировать такую дурацкую неприятную работу, как отсматривать объявления и отвечать на них

Разве кому-то хочется этим заниматься?

---

# Но никуда нам не деться от того, что бот — это unfair advantage

нечестное преимущество над всеми, у кого нет знаний и навыков написать или запустить бота

---

«Ну как же нечестное, Женя — человек использует свои навыки и знания, чтобы решать свою проблему, что же в этом нечестного?»

Да, можно также сказать, что это здоровая конкуренция на свободном рынке, и вспомнить что «выживает сильнейший»

Но мне всё же кажется, что здесь что-то фундаментально не так

---

# Кажется, что нельзя нормализовывать модель реальности, в которой умение запустить скрипт на питоне может означать разницу между «нашёл квартиру» и «не нашёл»

---

У технологий, и у людей которые их обслуживают, сейчас непомерно много влияния

Но нет никаких объективных причин, по которым разработчик больше заслуживает найти квартиру, чем врач, учитель или примерно кто угодно ещё

---

Ясно, что дело не в боте — бот это лишь финальное звено цепочки

В её начале стоят социально-экономические процессы (глобализация, дешёвый модный город, джентрификация, нехватка жилья, нехватка жилья, нехватка жилья)

А технологии лишь отражают и усиляют неравенство и конкуренцию

---

# На более широком масштабе: сегодня огромное количество критически важных оффлайн опытов, отражающих твои базовые потребности<sup>*</sup>, невозможны без предварительной онлайн-интеракции

- <sup>*</sup> поиск квартиры, поиск работы, запись к врачу, поиск свидания, etc.

---

экран как защитный слой — сперва покажи свой контент, чтобы человек решил, подпускать ли тебя поближе. *оффлайн — роскошь для избранных*

---

<!-- _class: invert -->

# Нам продали это будущее, пообещав, что всё будет очень удобно и доступно в один клик

Но почему-то мы теперь сидим весь день дома, днем ходим на видеозвонки, вечером молча тыкаем пальцами в стеклянный экранчик

---

# Простите, но это какая-то хуйня!

---

Ощущаю огромную усталость от интернета и огромное желание отказаться от «эффективности» и «в один клик» — а точнее, сбалансировать их, и добавить технологиям человечности

---

Единственный выход из интернета — на улицу

---

---

<!-- _class: invert -->

---

---

Предсказуемо, я делаю новый проект

---

# Я буду учиться решать проблемы современной цифровой культуры и искать ответ на вопросы «как делать цифровые пространства, чтобы в них происходила жизнь»

---

Подробности будут позже

---

# Спасибо, что прочитали! 

## Кстати, я ищу квартиру в Берлине с 21-го апреля, на чем дольше тем лучше

Вдруг!


