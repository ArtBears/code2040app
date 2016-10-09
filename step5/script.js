
let endpoint,
    validate_endpoint,
    token_to_send,
    abstract_api_request,
    promise,
    find_date;

// The current projects Endpoint
endpoint =  "/api/dating"
validate_endpoint = "/api/dating/validate"
token_to_send = {
    "token": "0217347fbdb52f16ea562bd939c1620a"
}


abstract_api_request = (endpoint) => {
  let xhr = new XMLHttpRequest();
  let url = "http://challenge.code2040.org" + endpoint;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  return xhr;
}

// The POST request that I will send as a part of a promise

promise = new Promise((resolve, reject) => {
  let xhr_request = abstract_api_request(endpoint);
  xhr_request.onreadystatechange = function () { 
      if (xhr_request.readyState == 4 && xhr_request.status == 200) {
          console.log("Response: " + xhr_request.responseText);
          console.log("sent");
          resolve(xhr_request.responseText);
      }
  }
  let data = JSON.stringify(token_to_send);
  xhr_request.send(data);
});

// iterate over dictionary
find_date = (datestamp, interval) => {
  // turn the interval into milliseconds
  interval_in_milliseconds = Number.parseFloat(interval) * 1000;
  let date = new Date(datestamp);
  let date_in_milliseconds = Date.parse(date);
  let combined_date = new Date(date_in_milliseconds + interval_in_milliseconds);
  let combined_date_string = combined_date.toISOString();
  combined_date_string = combined_date_string.replace(".000", "");
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
  let xhr_response = abstract_api_request(validate_endpoint);
  xhr_response.onreadystatechange = function () { 
    if (xhr_response.readyState == 4 && xhr_response.status == 200) {
        console.log("Response: " + xhr_response.responseText);
        console.log("sent");
        console.log(xhr_response.responseText);
    }
  }
  let data = JSON.stringify(data_to_send);
  xhr_response.send(data);
  console.log(val);
});

