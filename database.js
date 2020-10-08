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
    apiKey: ${{ secrets.API_KEY }},
    authDomain: "favourite-quotes-288820.firebaseapp.com",
    databaseURL: "https://favourite-quotes-288820.firebaseio.com/",
    storageBucket: "favourite-quotes-288820.appspot.com"
};
firebase.initializeApp(config);

var database = firebase.database();
var quotesRef = firebase.database().ref().child('quote');
quotesRef.on('value', snap => {
    var data = snap.val();
    console.log(data);
    for(key in snap.val()){
        var sect = document.createElement('section');
        var h2 = document.createElement('h2');
        sect.appendChild(h2);
        sect.className = 'quote';
        h2.innerHTML = data[key];
        document.getElementsByTagName('body')[0].appendChild(sect);
    }
});