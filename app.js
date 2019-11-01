 
//intialize firebase 
var firebaseConfig = {
        apiKey: "AIzaSyAdFoonb0pMdC7yPktnowDEkkPSzNFPlfw",
        authDomain: "test-app-cd90d.firebaseapp.com",
        databaseURL: "https://test-app-cd90d.firebaseio.com/-Lsc36MISS6eeLagxBBd",
        projectId: "test-app-cd90d",
        storageBucket: "test-app-cd90d.appspot.com",
      };
  
      firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    //button for adding train
    $("#add-train-btn").on("click", function(event) {
        event.preventDefault();

        var trainName = $("#train-name-input").val().trim();
        var trainDestination = $("#destination-input").val().trim();
        var trainFrequency = $("#frequency-input").val().trim();
        var nextArrival = $("#next-arrival-input").val().trim();
        var minsAway = $("#mins-away-input").val().trim();

        var newTrain = {
            name: trainName,
            destination: trainDestination,
            frequency: trainFrequency,
            arrival: nextArrival,
            mins: minsAway};

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
            database.ref().on("child_added", function(childSnapshot) {
                console.log(childSnapshot.val());
        

        //alert("new train successfully added");
        //store variables
        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var trainFrequency = childSnapshot.val().frequency;
        var nextArrival = childSnapshot.val().arrival;
        // var minsAway = childSnapshot.val().mins;

        console.log (trainName);
        console.log (trainDestination);
        console.log (trainFrequency);
        console.log (nextArrival);
        console.log (minsAway);

        var trainFreq;

  		// Time is to be entered on the entry form
   		 var firstTime = 0;

	   var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
	    console.log(firstTimeConverted);

	  // Current Time
	    var currentTime = moment();
	    console.log("time" + moment(currentTime).format("HH:mm"));

	  // Difference between the times
		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log("time difference" + diffTime);

		// Time apart (remainder)
	    var tRemainder = diffTime % trainFreq;
	    console.log(tRemainder);

	    // Minute Until Train
	    var tMinutesTillTrain = trainFreq - tRemainder;
	    console.log("mins until train arrives" + tMinutesTillTrain);

	    // Next Train
	    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
	    console.log("train arrival " + moment(nextTrain).format("HH:mm"));


        var newRow

            });








    
