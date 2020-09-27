//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
// alert(myHeading.textContent);

//var myHTML = document.querySelector('html');
//myHTML.onclick = function(){
//    alert('痛っ! つつくのはやめて!');    
//}

//上と同じ
//document.querySelector('html').onclick = function() {
//    alert('痛っ! つつくのはやめて!');
//}

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox_icon.jfif') {
      myImage.setAttribute ('src','images/firefox_icon_2.jfif');
    } else {
      myImage.setAttribute ('src','images/firefox_icon.jfif');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('あなたの名前を入力してください。');
    if(!myName || myName === null){  //値がない場合 または null の場合
        setUserName();
      } else {
        //Web Storage API でブラウザにデータを格納、後で受け取る
        localStorage.setItem('name', myName);  
        myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
    }
}

if(!localStorage.getItem('name')) {　　// ! は否定演算子
    setUserName();　　//nameのデータが存在しなければプロンプト出す。
  } else {
    //nameのデータが存在していれば（以前の訪問時にユーザーが設定した場合　　
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

myButton.onclick = function() {
    setUserName();
}


