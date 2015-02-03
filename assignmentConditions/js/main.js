// Jeff Carroll Web Programing Fundamentals conditions assignment

// Ajax Functions -- Clear Content
function clearcontenthtml() { // this function is to clear the page back to original clean slate before any action was taken
    var request = new XMLHttpRequest(); // this object XMLHttpRequest() is the ajax object making asynchronous javascript
    // possible and puts it into a variable called request
    request.open('GET', 'data/clear.html'); // this line takes the request variable and applies the open method to it
    // which takes two arguments ('the method to grab info either GET or POST', 'The Path to the file')
    request.onreadystatechange = function () { // the onreadystatechange method determines the success on completion of
    // an XMLHttpRequest 4 means success and 1 means failure.
        if ((request.readyState === 4) && (request.status === 200)) { // I am checking the readystate for success and
            // status of`est ajax object to verify that success.  If it fails it does nothing.
            var clearContent = request.response; // I am setting the variable to of the ajax object value to then use
            // in the document object model
            document.getElementById("content").innerHTML = clearContent; // I am entering html into the id of the
            // object to display on the html page
        }
    };
    request.send(); // This is the command that then sends everything back to the browser from the server in this case it
    // is the local host
}

// Ajax Functions -- load industry content\
function industry() { // this function is to load the industry page
    var request = new XMLHttpRequest(); // this object XMLHttpRequest() is the ajax object making asynchronous javascript
    // possible and puts it into a variable called request
    request.open('GET', 'data/industry.html'); // this line takes the request variable and applies the open method to it
    // which takes two arguments ('the method to grab info either GET or POST', 'The Path to the file')
    request.onreadystatechange = function () { // the onreadystatechange method determines the success on completion of
        // an XMLHttpRequest 4 means success and 1 means failure.
        if ((request.readyState === 4) && (request.status === 200)) { // I am checking the readystate for success and
            // status of the request ajax object to verify that success.  If it fails it does nothing.
            var personalContent = request.response; // I am setting the variable to of the ajax object value to then use
            // in the document object model
            document.getElementById("content").innerHTML = personalContent; // I am entering html into the id of the
            // object to display on the html page
        }
    };
    request.send();// This is the command that then sends everything back to the browser from the server in this case it
    // is the local host
}

// Ajax Functions -- load wacky content
function wacky() { // this function is to load the wacky page
    console.log("hello");
    var request = new XMLHttpRequest(); // this object XMLHttpRequest() is the ajax object making asynchronous javascript
    // possible and puts it into a variable called request
    request.open('GET', 'data/wacky.html'); // this line takes the request variable and applies the open method to it
    // which takes two arguments ('the method to grab info either GET or POST', 'The Path to the file')
    request.onreadystatechange = function () { // the onreadystatechange method determines the success on completion of
        // an XMLHttpRequest 4 means success and 1 means failure.
        if ((request.readyState === 4) && (request.status === 200)) { // I am checking the readystate for success and
            // status of the request ajax object to verify that success.  If it fails it does nothing.
            var wackyContent = request.response; // I am setting the variable to of the ajax object value to then use
            // in the document object model
            document.getElementById("content").innerHTML = request.response; // I am entering html into the id of the
            // object to display on the html page
        }
    };
    request.send();// This is the command that then sends everything back to the browser from the server in this case it
    // is the local host
}

// Ajax Functions -- load personal content
function personal() { // this function is to load the personal page
    var request = new XMLHttpRequest(); // this object XMLHttpRequest() is the ajax object making asynchronous javascript
    // possible and puts it into a variable called request
    request.open('GET', 'data/personal.html'); // this line takes the request variable and applies the open method to it
    // which takes two arguments ('the method to grab info either GET or POST', 'The Path to the file')
    request.onreadystatechange = function () { // the onreadystatechange method determines the success on completion of
        // an XMLHttpRequest 4 means success and 1 means failure.
        if ((request.readyState === 4) && (request.status === 200)) { // I am checking the readystate for success and
            // status of the request ajax object to verify that success.  If it fails it does nothing.
            personalContent = request.response; // I am setting the variable to of the ajax object value to then use
            // in the document object model
            document.getElementById("content").innerHTML = personalContent; // I am entering html into the id of the
            // object to display on the html page
        }
    };
    request.send();// This is the command that then sends everything back to the browser from the server in this case it
    // is the local host
}

// Ajax Functions -- function for personal content
function wattage() { // this function gets called and is loaded on the personal page
    var watts = document.getElementById("wattage").value; // I am going to the html document grabbing an id of wattage and
    // assigning it value to a variable
    var amps = document.getElementById("amps").value;// I am going to the html document grabbing an id of amps and
    // assigning it value to a variable
    var volts = document.getElementById("volts").value;// I am going to the html document grabbing an id of volts and
    // assigning it value to a variable
    var blankArray = []; // Im declaring a blank array that will hold anything that was left blank after the submit button
    // was selected

    if (watts == ""){ // I am evaluating to make sure that watts was not left blank
        if ((amps != "") && (volts != "")){ // if watts was left blank then I calculate whether or not the other two were
        // left blank
             result = amps * volts; // if they were not left blank I solve for watts
            document.getElementById("update").innerHTML = "Your wattage calculation: " + result.toFixed(2); // I enter a
            // rounded answer into the update id of the DOM
        }else {
            blankArray.push(" watts"); // if both conditions are not met I put watts into the blankArray
            document.getElementById("update").innerHTML = "You did not enter anything for " + blankArray; // this line
            // enters html into the div tag with the id up update with all items in the array to this point
        }
    }
    if (amps == "") { // I am evaluating to make sure that amps was not left blank
        if ((watts != "") && (volts != "")) { // if amps was left blank then I calculate whether or not the other two were
            // left blank
            result = watts / volts; // if they were not left blank I solve for amps
            document.getElementById("update").innerHTML = "Your amps calculation: " + result.toFixed(2); // I enter a
            // rounded answer into the update id of the DOM
        } else {
            blankArray.push(" amps"); // if both conditions are not met I put watts into the blankArray
            document.getElementById("update").innerHTML = "You did not enter anything for " + blankArray; // this line
            // enters html into the div tag with the id up update with all items in the array to this point
        }
    }
    if (volts == "") { // I am evaluating to make sure that amps was not left blank
        if ((watts != "") && (amps != "")) { // if amps was left blank then I calculate whether or not the other two were
            // left blank
            var result = Math.sqrt(watts * amps);// if they were not left blank I solve for volts
            document.getElementById("update").innerHTML = "Your volts calculation: " + result.toFixed(2); // I enter a
            // rounded answer into the update id of the DOM
        } else {
            blankArray.push(" amps"); // if both conditions are not met I put watts into the blankArray
            document.getElementById("update").innerHTML = "You did not enter anything for " + blankArray; // this line
            // enters html into the div tag with the id up update with all items in the array to this point
        }
    }

}

// Ajax Functions -- function for industry content
function calculteBandwidth() { // this function gets called and is loaded on the industry page
    var bandwidth = document.getElementById("bandwidth").value; // I am searching an id of bandwidth and storing its
    // value into a variable called bandwidth
    var devices = document.getElementById("devices").value; // I am searching an id of devices and storing its
    // value into a variable called devices
    var streamingMedia = document.getElementById("streamingMedia").checked; // I am checking to see if streamingMedia is
    // checked with the checked property
    var internet = document.getElementById("internet").checked; // I am checking to see if internet is checked with
    // the checked property
    var wirelessHomeNetwork = document.getElementById("wirelessHomeNetwork").checked; // I am checking to see if
    // wirelessHomeNetwork is checked with the checked property

    if ((streamingMedia) && (internet === false) && (wirelessHomeNetwork === false)) { // I am determining specifically if
        // only streamingMedia is checked
        var smRequiredUsage = 20; // I am adding a constant that is the required usage based on the the if statement
        if ((bandwidth >= smRequiredUsage) && (devices < 2)){ // determining if the bandwidth is greater than the required
        // usage and devices is under the allotted amount
            document.getElementById("update").innerHTML = "you should have no problems streaming media with:" +
                " " + bandwidth + "Mbs. If I were you I would keep less that 2 devices streaming media at one time"; // I
                // am entering in this string into the div tag with the id of update. because I am using an id it does not
                // specifically have to be a div that holds the id but in this case it is
        } else if (bandwidth < smRequiredUsage ){ // I am checking that if bandwidth is greater than smRequiredUsage and if
            // it is than I change the string
            document.getElementById("update").innerHTML = "you should have at least " + smRequiredUsage + "mbs if you want " +
                "uninterrupted service" // updated string
        } else {
            document.getElementById("update").innerHTML = "You are missing the required fields" // This is the final else
            // statement that says you are missing required fields
        }
    }else if ((internet) && (streamingMedia === false) && (wirelessHomeNetwork === false)) { // I am determining specifically if
        // only internet is checked
        var inRequiredUsage = 10; // I am adding a constant that is the required usage based on the the if statement
        if ((bandwidth >= inRequiredUsage) && (devices < 3)){ // determining if the bandwidth is greater than the required
            // usage and devices is under the allotted amount
            document.getElementById("update").innerHTML = "you should have no problems surfing the internet with:" +
                " " + bandwidth + "Mbs. If I were you I would keep less that 3 devices running at one time"; // I
            // am entering in this string into the div tag with the id of update. because I am using an id it does not
            // specifically have to be a div that holds the id but in this case it is
        } else if (bandwidth < inRequiredUsage ){ // I am checking that if bandwidth is greater than inRequiredUsage and if
            // it is than I change the string
            document.getElementById("update").innerHTML = "you should have at least " + inRequiredUsage + "mbs if you want " +
                "uninterrupted service" // updated string
        } else {
            document.getElementById("update").innerHTML = "You are missing the required fields"// This is the final else
            // statement that says you are missing required fields
        }
    }else if ((wirelessHomeNetwork) && (internet === false) && (streamingMedia === false)){ // I am determining specifically if
        // only wirelessHomeNetwork is checked
        var whnRequiredUsage = 0; // I am adding a constant that is the required usage based on the the if statement
        if (bandwidth >= whnRequiredUsage){ // determining if the bandwidth is greater than the required
            // usage and because there is no limit to the amount of devices that you can have I dont bother check for this here
            document.getElementById("update").innerHTML = "you should have no problems with your internal network with:" +
                " " + bandwidth + "Mbs. Because you are only running a home network there is no limit to how many devices" +
                " you can have."; // I am entering in this string into the div tag with the id of update. because I am using an
                // id it does not specifically have to be a div that holds the id but in this case it is
        } else if (bandwidth < whnRequiredUsage ){  // I am checking that if bandwidth is greater than whnRequiredUsage and if
            // it is than I change the string
            document.getElementById("update").innerHTML = "you should have at least " + whnRequiredUsage + "mbs if you want " +
                "uninterrupted service"// updated string
        } else {

            document.getElementById("update").innerHTML = "You are missing the required fields" // This is the final else
            // statement that says you are missing required fields
        }
    }
}

// Ajax Functions -- function for wacky content
function pick(){
    var blue = document.getElementById("blue").checked; // table element number 1
    var yellow = document.getElementById("yellow").checked; // table element number 2
    var red = document.getElementById("red").checked; // table element number 3
    var colors = [ blue, yellow, red]; // Array of colors

    // primary colors
    if (( colors[0] === true ) && (colors[1] === false ) && (colors[2] === false)) { // blue logic
        document.getElementById("update").innerHTML = "You picked blue try mixing some colors"; // blue
    } else if (( colors[0] === false ) && (colors[1] === true ) && (colors[2] === false)){ // yellow logic
        document.getElementById("update").innerHTML = "You picked yellow try mixing some colors"; // yellow
    } else if (( colors[0] === false ) && (colors[1] === false ) && (colors[2] === true)){ // red logic
        document.getElementById("update").innerHTML = "You picked red try mixing some colors"; // red
    } // end primary colors

    // secondary colors
    if (( colors[0] === true ) && (colors[1] === true ) && (colors[2] === false)) { // green logic
        document.getElementById("update").innerHTML = "You mixed blue and yellow to make green"; // green
    } else if (( colors[0] === false ) && (colors[1] === true ) && (colors[2] === true)){ // orange logic
        document.getElementById("update").innerHTML = "You mixed yellow and red to make orange"; // orange
    } else if (( colors[0] === true ) && (colors[1] === false ) && (colors[2] === true)){ // purple logic
        document.getElementById("update").innerHTML = "You mixed blue and red to make purple"; // purple
    } else if (( colors[0] === true ) && (colors[1] === true ) && (colors[2] === true)){ // purple logic
        document.getElementById("update").innerHTML = "You mixed all the colors to make brown"; // purple
    } else if  (( colors[0] === false ) && (colors[1] === false ) && (colors[2] === false)){
        document.getElementById("update").innerHTML = "please pick some colors"; // no picking of any colors
    }
    // end secondary colors

}