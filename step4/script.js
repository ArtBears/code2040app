// The current projects Endpoint
let endpoint =  "/api/prefix"
let validate_endpoint = "/api/prefix/validate"

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
let find_prefix = (prefix, array) => {
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
   prefix_and_array = JSON.parse(val);
   prefix = prefix_and_array.prefix;
   array = prefix_and_array.array;
   spliced_array = find_prefix(prefix, array);
   data_to_send = {
  token: "0217347fbdb52f16ea562bd939c1620a",
  array: spliced_array
  }
  string_response(validate_endpoint, data_to_send);

  console.log(val);
});

