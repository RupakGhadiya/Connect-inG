var firebaseConfig = {
  apiKey: "AIzaSyCfgEovLJ_fNp61zc3XO37fQOlFBbuFdLE",
  authDomain: "connect-ing-559c9.firebaseapp.com",
  databaseURL: "https://connect-ing-559c9-default-rtdb.firebaseio.com",
  projectId: "connect-ing-559c9",
  storageBucket: "connect-ing-559c9.appspot.com",
  messagingSenderId: "530561683637",
  appId: "1:530561683637:web:67e8b53cc4c312afbb6efc",
  measurementId: "G-VVFF3M3ZJZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("signed Up Successfully")
}


function logIn(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Login Successfully")  
  window.location="../index.html";
}

function Logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    
  });
}





firebase.auth().onAuthStateChanged(function(user) {
  var notLoggedIn = document.getElementById('not-logged-in')
  var loggedIn = document.getElementById('logged-in')
  if (user) {
    // User is signed in.
    loggedIn.style.display = 'block'
    notLoggedIn.style.display = 'none'
    document.getElementById('user.email').innerHTML = firebase.auth().currentUser.email;
  } else {
    // No user is signed in.
    loggedIn.style.display = 'none'
    notLoggedIn.style.display = 'block'
  }
});


function Login(event){
  event.preventDefault()
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    console.log('Error signing in,',error.message)
    alert(error.message)
  }).then(function(user){
    if(user){
      alert('login Successfully')
    }
  })
}
