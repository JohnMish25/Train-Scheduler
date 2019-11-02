
//intialize firebase 
var firebaseConfig = {
  apiKey: "AIzaSyAdFoonb0pMdC7yPktnowDEkkPSzNFPlfw",
  authDomain: "test-app-cd90d.firebaseapp.com",
  databaseURL: "https://test-app-cd90d.firebaseio.com",
  projectId: "test-app-cd90d",
  storageBucket: "test-app-cd90d.appspot.com",
  messagingSenderId: "954380046880",
  appId: "1:954380046880:web:77e6db17ea9166ce456245"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//button for adding train
$("#add-train-btn").on("click", function (event) {
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainFrequency = $("#frequency-input").val().trim();
  var nextArrival = $("#next-arrival-input").val().trim();
  // var minsAway = $("#mins-away-input").val().trim();

  var newTrain = {
    name: trainName,
    destination: trainDestination,
    frequency: trainFrequency,
    arrival: nextArrival,
    mins: minsAway
  };

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.arrival);
  console.log(newTrain.frequency)
  console.log(newTrain.mins);

  //clear text boxes 
  $("train-name-input").val("");
  $("destination-input").val("");
  $("frequency-input").val("");
  $("next-arrival-input").val("");
  $("mins-away-input").val("");
});

//firebase event
database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());


  //alert("new train successfully added");
  //store variables
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFrequency = childSnapshot.val().frequency;
  var nextArrival = childSnapshot.val().arrival;
  var minsAway = childSnapshot.val().mins;




  console.log(trainName);
  console.log(trainDestination);
  console.log(trainFrequency);
  console.log(nextArrival);
  console.log(minsAway);

  // Change the HTML to reflect
  $("#name-display").text(snapshot.val().name);
  $("#email-display").text(snapshot.val().email);
  $("#age-display").text(snapshot.val().age);
  $("#comment-display").text(snapshot.val().comment);

  var trainFreq;
  var firstTime = 0;

  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);

  // Current Time
  var currentTime = moment();
  console.log("time" + moment(currentTime).format("HH:mm"));

  // Difference between the times
  var timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("time difference" + timeDiff);

  // Remaining time 
  var timeRemaining = timeDiff % trainFreq;
  console.log(timeRemaining);



  // Minutes Until Train
  var minsArrive = trainFreq - timeRemaining;
  console.log("mins until train arrives" + minsArrive);



  // Next Train
  var nextTrain = moment().add(minsArrive, "minutes");
  console.log("train arrival " + moment(nextTrain).format("HH:mm"));




});









