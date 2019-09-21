var fireBase = fireBase || firebase;
var hasInit = false;
	  var config = {
    apiKey: "AIzaSyDpRazC7i3W2S_ylvXbAC3aE-Xxw_7lM0A",
    authDomain: "safety-707a7.firebaseapp.com",
    databaseURL: "https://safety-707a7.firebaseio.com",
    projectId: "safety-707a7",
    storageBucket: "safety-707a7.appspot.com",
    messagingSenderId: "981699494274",
    appId: "1:981699494274:web:4a0cab2298deea0447cf9b"
  };
  // Initialize Firebase
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}