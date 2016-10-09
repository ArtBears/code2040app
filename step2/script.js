// The current projects Endpoint
let endpoint =  "/api/reverse"
let validate_endpoint = "/api/reverse/validate"

// The data to send in the current request
let token_to_send = {
    "token": "0217347fbdb52f16ea562bd939c1620a"
}


/*
PROBLEM: REVERSE A STRING
  Several ways to do this: 
    1. Split string into a array of it's letters 
          append the each element of the the array from the last 
            element to the first into+= a string.
    2. I could use the substring of the string 
        from the last letter to the first and append it into another stringopperations
  I'm going with option #1

*/
let reverse = (str) => {
  // will hold the current right index 
  let str_arr = str.split("");
  let arr_length = str_arr.length - 1;
  let return_str = "";
  /**/
  for(let i = arr_length; i >= 0; i-- ){
    return_str += str[i];
  }
  return return_str;
}

// The post response with the reversed string
let string_response = (endpoint, payload) => { 
  xhr = new XMLHttpRequest();
  let url = "http://challenge.code2040.org" + endpoint;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () { 
      if (xhr.readyState == 4 && xhr.status == 200) {
          console.log("Response: " + xhr.responseText);
          console.log("sent");
          console.log(xhr.responseText);

      }
  }
  let data = JSON.stringify(payload);
  xhr.send(data);
}

// The post request that I will send as a part of a promise

let promise = new Promise((resolve, reject) => {
  xhr = new XMLHttpRequest();
  let url = "http://challenge.code2040.org" + endpoint;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () { 
      if (xhr.readyState == 4 && xhr.status == 200) {
          console.log("Response: " + xhr.responseText);
          console.log("sent");
          resolve(xhr.responseText);

      }
  }
  let data = JSON.stringify(token_to_send);
  xhr.send(data);
});

promise.then((val) => {
  let data_to_send = {
  "token": "0217347fbdb52f16ea562bd939c1620a",
  "string": reverse(val)
  }
  string_response(validate_endpoint, data_to_send)

  console.log(val);
});

