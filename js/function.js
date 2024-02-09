function alertButton(){
    alert('ご登録ありがとうございます');
    window.location = "case1_b.html";
}
function alertButton2(){
    alert('あぁ！詐欺に引っかかってしまった！！！');
    alert('突然請求してくるなんて怪しい！！');
    window.location = "gameover.html";
}
function alertButton3(){
    alert('ご購入ありがとうございました。');
    alert('後日...');
    window.location = "gameover4.html";
}
function alertButton4(){
    alert('インストール完了...');
    window.location = "gameover3.html";
}
function alertButton5(){
    window.location = "case2_b.html";
}
window.addEventListener ('DOMContentLoaded',function timer(){
    var limit = 300;
    this.setInterval(() => {
    var hour = Math.floor(limit / 3600);
    var min = Math.floor(limit / 60);
    var hourminus = Math.floor(60 * hour);
    var min = Math.floor(min - hourminus);
    var sec = Math.floor(limit % 60);
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    var str1 = "<h2>" +"残り時間" + hour + ":" + min + ":" + sec + "</h2>";
    document.getElementById('timer').innerHTML = str1 ;
    if (limit == -1) {
        alert('時間が切れましたが特に何も起きません。');
        alert('ただの詐欺だったようです。');
    }
    limit = limit - 1;
}
    , 1000);
});
window.addEventListener ('DOMContentLoaded',function counter(){
    var limit = Math.floor( Math.random() * 60 ) + 300;
    this.setInterval(() => {
    limit = limit + Math.floor( Math.random() * 6 ) - 2;
    if (limit < 300) {
        limit = 300;
        }
    document.getElementById('counter').innerHTML = limit + "人が閲覧中" ;
}
    , 1000);
});
window.addEventListener ('DOMContentLoaded',function counter2(){
    var limit = Math.floor( Math.random() * 30 ) + 100;
    this.setInterval(() => {
    limit = limit + Math.floor( Math.random() * -2 + 1 );
    if (limit < 20) {
        limit = 20;
        }
    document.getElementById('counter2').innerHTML = "残り" + limit + "個!!!" ;
}
    , 1000);
});
function alertButton6(){
    alert('ちょっと待った!');
    window.location = "gameover2.html";
}
function alertButton7(){
    alert('|熱帯雨林ショッピング|モンスターエナジーの購入のお知らせ');
    alert('|熱帯雨林ショッピング|熊のぬいぐるみの購入のお知らせ');
    alert('|熱帯雨林ショッピング|火星の土地の購入のお知らせ');
    alert('|熱帯雨林ショッピング|ウィッグの購入のお知らせ');
    alert('|熱帯雨林ショッピング|パーティー入場チケットの購入のお知らせ');
    window.location = "damedayo.html";}

function alertButton8(){
    window.location = "mainpage.html";
}