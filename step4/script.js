let endpoint,
    validate_endpoint,
    token_to_send,
    abstract_api_request,
    promise,
    find_prefix;

// The current projects Endpoint
endpoint =  "/api/prefix"
validate_endpoint = "/api/prefix/validate"

// The data to send in the current request
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

// The post request that I will send as a part of a promise
promise = new Promise((resolve, reject) => {
  xhr_request = abstract_api_request(endpoint);
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
find_prefix = (prefix, array) => {
  // find the prefix length
    prefix_length = prefix.length; 
  // use the prefix length as the substring end
  for(let i = 0; i < array.length; i++){
    if(prefix === array[i].substring(0, prefix_length)){
      array.splice(i,1);
      --i;
    }
  }
  return array;
}

promise.then((val) => {
  let prefix_and_array = JSON.parse(val);
  let prefix = prefix_and_array.prefix;
  let array = prefix_and_array.array;
  let spliced_array = find_prefix(prefix, array);
  let data_to_send = {
  token: "0217347fbdb52f16ea562bd939c1620a",
  array: spliced_array
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

