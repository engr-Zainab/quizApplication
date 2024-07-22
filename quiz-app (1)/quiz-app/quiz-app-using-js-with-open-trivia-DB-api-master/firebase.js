//Setting up firebase 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDemvZ9O13OZPS_SWdr17ya95_SEIZmwkE",
    authDomain: "quizappwithfirebase-d3103.firebaseapp.com",
    databaseURL: "https://quizappwithfirebase-d3103-default-rtdb.firebaseio.com",
    projectId: "quizappwithfirebase-d3103",
    storageBucket: "quizappwithfirebase-d3103.appspot.com",
    messagingSenderId: "565841246126",
    appId: "1:565841246126:web:26b234b1928e4221afba3f"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//register function
const register = () => {
    const email = document.getElementById("email").ariaValueMax;
    const password = document.getElementById("password").ariaValueMax;
    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("You have been registered!")
            console.log(result)
                // ...
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
                // ..
        });

}