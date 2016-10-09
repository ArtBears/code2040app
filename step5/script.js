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
  interval_in_milliseconds = Number.parseFloat(interval) * 1000;
  console.log(interval_in_milliseconds);
  let date = new Date(datestamp);
  console.log(date.getTime());
  console.log(date);
  let date_in_milliseconds = Date.parse(date);
  console.log(date_in_milliseconds);
  let combined_date = new Date(date_in_milliseconds + interval_in_milliseconds);
  let combined_date_string = combined_date.toISOString();
  combined_date_string = combined_date_string.replace(".000", "");
  console.log(combined_date_string);
  return combined_date_string;
}

promise.then((val) => {
   let datestamp_and_interval = JSON.parse(val);
   let datestamp = datestamp_and_interval.datestamp;
   let interval = datestamp_and_interval.interval;
   let new_date = find_date(datestamp, interval);
   let data_to_send = {
    token: "0217347fbdb52f16ea562bd939c1620a",
    datestamp: new_date
  }
  string_response(validate_endpoint, data_to_send);

  console.log(val);
});

