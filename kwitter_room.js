
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDKBGGC_bw_v0IuUEu8ST0Xua_8q9-qRis",
  authDomain: "kwitter-d0c6b.firebaseapp.com",
  databaseURL: "https://kwitter-d0c6b-default-rtdb.firebaseio.com",
  projectId: "kwitter-d0c6b",
  storageBucket: "kwitter-d0c6b.appspot.com",
  messagingSenderId: "705213696366",
  appId: "1:705213696366:web:706d118e5962796ea4197f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname- " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}