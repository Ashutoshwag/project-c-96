
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAomNNm-JOKEvtl6y9mtLsqbx1_63sNVhU",
      authDomain: "aenewmodel-xmyv.firebaseapp.com",
      databaseURL: "https://aenewmodel-xmyv-default-rtdb.firebaseio.com",
      projectId: "aenewmodel-xmyv",
      storageBucket: "aenewmodel-xmyv.appspot.com",
      messagingSenderId: "430640096973",
      appId: "1:430640096973:web:98c1a6343559ff1b6beb84"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name" + Room_names);
                  row = "<div class = 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}