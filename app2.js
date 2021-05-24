document.addEventListener("DOMContentLoaded", bindButtons);

// Function to bind buttons. Two buttons to submit donate form and volunteer form.
function bindButtons(){

    // For donation form submit button. 
    document.getElementById("donateSubmit").addEventListener("click", function(event){
        var req1 = new XMLHttpRequest();
        // Pushed all data into a list, turn it into a json string, and send it off to a server.
        // Print thank you message when POST request goes through okay.
        var dataList = [];
        dataList.push({"firstName": document.getElementById("FirstName_input").value});
        dataList.push({"lastName": document.getElementById("lastName_input").value});
        dataList.push({"email": document.getElementById("email").value});
        dataList.push({"address1": document.getElementById("address1").value});
        dataList.push({"address2": document.getElementById("address2").value});
        dataList.push({"city": document.getElementById("city").value});
        dataList.push({"state": document.getElementById("state").value});
        dataList.push({"postalCode": document.getElementById("postalCode").value});
        dataList.push({"country": document.getElementById("country").value});
        dataList.push({"creditCard": document.getElementById("credit-card").value});
        dataList.push({"cvv": document.getElementById("cvv").value});
        dataList.push({"month": document.getElementById("month").value});
        // console.log(dataList);
        console.log(JSON.stringify(dataList)); // For debug.
        var payload = dataList;
        req1.open("POST", "http://httpbin.org/post", true);   // True makes it asynchronus. 
        req1.setRequestHeader("Content-Type", "application/json");
        // Add EventListener to make it asynchronus. 
        req1.addEventListener("load", function(){
            if (req1.status >= 200 && req1.status <400){
                var response = JSON.parse(req1.responseText).data;
                document.getElementById("thank-you-message").textContent = "Thank you for your donation!";   // Print thank you on browser.
                console.log(JSON.stringify(JSON.parse(response)));  // For debug.
            }
            else{alert("Something went wrong!")};
        })
        req1.send(JSON.stringify(payload));  // Stringify before sending it off.  
        event.preventDefault();
    });

    // For volunteer submit button. 
    document.getElementById("volSubmit").addEventListener("click", function(event){
        var req2 = new XMLHttpRequest();
        var dataList2 = [];
        dataList2.push({"name": document.getElementById("volunteerName").value});
        dataList2.push({"phoneNumber": document.getElementById("phoneNum").value});
        dataList2.push({"startTime": document.getElementById("start-time").value});
        dataList2.push({"endTime": document.getElementById("end-time").value});
        dataList2.push({"comments": document.getElementById("comments").value});
        var payload2 = dataList2;
        req2.open("POST", "http://httpbin.org/post", true);
        req2.setRequestHeader("Content-Type", "application/json");
        req2.addEventListener("load", function(){
            if(req2.status >= 200 && req2.status < 400){
                document.getElementById("thank-you-message2").textContent = "Thank you for submitting your infomation.";
                console.log("Request went through okay.");
            }
            else(console.log("crap"));
        })
        req2.send(JSON.stringify(payload2));
        event.preventDefault();
    });
};