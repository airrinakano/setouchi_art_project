const imgs = ["img/黒くした３.png", "img/黒くした２.png", "img/黒くした.png"];
let num = 0;
slideShow();

function slideShow() {
  document.getElementById("headerpic").src = imgs[num];
  if (num == imgs.length - 1) {
    num = 0;
  } else {
    num++;
  }

  setTimeout("slideShow()", 3000);
}

//トグルボタンが押されたときに、クラスを付与
function addClass() {
  const nav = document.getElementsByClassName("nav");
  const nav_toggle = document.getElementsByClassName("nav_toggle");
  nav[0].classList.toggle("show");
  nav_toggle[0].classList.toggle("show");
}

$(function () {
  // eachTextAnimeにappeartextというクラス名を付ける定義
  function EachTextAnimeControl() {
    $(".eachTextAnime").each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("appeartext");
      } else {
        $(this).removeClass("appeartext");
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    console.log("ここきた");
    EachTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    //spanタグを追加する
    var element = $(".eachTextAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split("").forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox +=
              '<span style="animation-delay:.' + i + 's;">' + t + "</span>";
          } else {
            var n = i / 10;
            textbox +=
              '<span style="animation-delay:' + n + 's;">' + t + "</span>";
          }
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });

    EachTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面が読み込まれたらすぐ
});
