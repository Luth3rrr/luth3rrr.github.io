
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});
//hamburger
// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();

    window.onload = function(){
    var counter = 0;
    var myImage = document.getElementsByClassName("logo")[0];
    myImage.addEventListener("click", function() {
        counter++;
        if (counter === 10) {
            window.location.href = "https://www.mugitz.com/dictionary.html";
        }
    });
    }
// var bgMusic = document.getElementById("bg-music");
// if(!localStorage.getItem('musicPlayed')) {
//     bgMusic.play();
//     localStorage.setItem('musicPlayed', true);
// }

const firebaseConfig = {
  apiKey: "AIzaSyDGhoxtcdUjczXJSbcGuWOxiMmTlNmmYbo",
  authDomain: "mugi-89580.firebaseapp.com",
  projectId: "mugi-89580",
  storageBucket: "mugi-89580.appspot.com",
  messagingSenderId: "879625806245",
  appId: "1:879625806245:web:375e806b82d0e6540b084c",
  measurementId: "G-CM8V0CYQ85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
var loginBtn = document.getElementById('loginBtn');
var welcomeMsg = document.getElementById('welcomeMsg');

// Check if the user is already logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in, display their name in the welcome message
    welcomeMsg.textContent = "Welcome, " + user.displayName;
  } else {
    // User is not signed in, hide the welcome message
    welcomeMsg.style.display = "none";
  }
});

loginBtn.addEventListener('click', function() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // Display user's name in the welcome message
      welcomeMsg.style.display = "block";
      welcomeMsg.textContent = "Welcome, " + result.user.displayName;
    })
    .catch(function(error) {
      // Handle errors here
    });
});

// Listen to auth state changes to display the user's name in h1 on another page
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var displayName = user.displayName;
    var h1Element = document.getElementById('userDisplay');
    h1Element.textContent = 'Welcome, ' + displayName + '!';
  } else {
    // User is signed out
  }
});
