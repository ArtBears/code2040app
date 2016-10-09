// The current projects Endpoint
let endpoint =  "/api/dating"
let validate_endpoint = "/api/dating/validate"

// The data to send in the current request
let token_to_send = {
    "token": "0217347fbdb52f16ea562bd939c1620a"
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

// iterate over dictionary
let find_date = (datestamp, interval) => {
  // turn the interval into milliseconds
  interval = interval * 1000;

}

promise.then((val) => {
   let datestamp_and_timestamp = JSON.parse(val);
   let datestamp = date_and_timestamp.datestamp;
   let interval = date_and_timestamp.interval;
   let new_date = date_and_timestamp(prefix, array);
   let data_to_send = {
    token: "0217347fbdb52f16ea562bd939c1620a",
    array: new_date
  }
  string_response(validate_endpoint, data_to_send);

  console.log(val);
});

