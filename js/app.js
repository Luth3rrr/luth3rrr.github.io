document.addEventListener("DOMContentLoaded", function() {
const firebaseConfig = {
  apiKey: "AIzaSyDz0obDDy51SeY6RHcHGPrGAi0Ol1-8VBE",
  authDomain: "mugi-2023.firebaseapp.com",
  databaseURL: "https://mugi-2023-default-rtdb.firebaseio.com",
  projectId: "mugi-2023",
  storageBucket: "mugi-2023.appspot.com",
  messagingSenderId: "257017906410",
  appId: "1:257017906410:web:38bb7865692242b3628393",
  measurementId: "G-8HSQ31CXBF"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the Firestore database
  const db = firebase.firestore();

  // Add an event listener to track clicks on game links with data-game-id="game" attribute
  document.querySelectorAll("[data-game-id='game']").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      const user = firebase.auth().currentUser;
      if (user) {
        // User is signed in, update the XP in the Firestore database
        const userRef = db.collection("users").doc(user.uid);

        userRef.get()
          .then((doc) => {
            if (doc.exists) {
              // Document exists, update the XP and level
              const currentXP = doc.data().xp || 0;
              const updatedXP = currentXP + 100;
              const currentLevel = doc.data().level || 1;
              const xpToLevelUp = 2000;
              let updatedLevel = currentLevel;

              if (updatedXP >= xpToLevelUp * currentLevel) {
                updatedLevel = currentLevel + 1;
              }

              userRef.update({
                xp: updatedXP,
                level: updatedLevel,
              })
              .then(() => {
                // Redirect to the profile page after updating the XP and level
                window.location.href = "profile.html";
              })
              .catch((error) => {
                console.error("Error updating user data: ", error);
              });
            } else {
              console.error("User document not found!");
            }
          })
          .catch((error) => {
            console.error("Error getting user document: ", error);
          });
      }
    });
  });
});
