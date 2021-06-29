let nav = document.getElementsByTagName('nav')[0];
let isScrolling = false;
window.onscroll = function(){
    isScrolling = true;
}

window.setInterval(function(){
    if(isScrolling){
        nav.style.background = 'rgba(29, 17, 40,0)';
        nav.style.transitionDelay = '0s';
        isScrolling = false;
    }
    else{
        nav.style.background = 'rgba(29, 17, 40,0.9)';
        nav.style.transitionDelay = '0.2s';
    }
}, 100);

var config = {
    apiKey: "AIzaSyBV80MlBEzSOl8lj0nB24LizH_Kv061oq8",
    authDomain: "favourite-quotes-288820.firebaseapp.com",
    databaseURL: "https://favourite-quotes-288820.firebaseio.com/",
    storageBucket: "favourite-quotes-288820.appspot.com"
};
firebase.initializeApp(config);
var database = firebase.database();
var sect = document.createElement('section');

function showQuotes(showName){
    var quotesRef = firebase.database().ref().child(showName);
    quotesRef.on('value', snap => {
        var data = snap.val();
        console.log(data);
        sect.innerHTML=""; //to have the new set of quotes replace the old ones
        sect.className = "card-wrapper";
        for(character in data){
           for(index in data[character]){
            var div = document.createElement('div');
            sect.appendChild(div);
            div.className = 'card';
            div.innerHTML = data[character][index] + "<br> -" + character;
            document.getElementsByTagName('body')[0].appendChild(sect);
           }  
        }
    });
}
