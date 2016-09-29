// The current projects Endpoint
let endpoint =  "/api/register"

// The data to send in the current request
let data_to_send = {
    "token": "0217347fbdb52f16ea562bd939c1620a",
    "github": "https://github.com/ArtBears/code2040app"
}

// The post request that I will send
let request = (endpoint, payload) => { 
  xhr = new XMLHttpRequest();
  let url = "http://challenge.code2040.org" + endpoint;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () { 
      if (xhr.readyState == 4 && xhr.status == 200) {
          console.log(xhr.responseText);
          console.log("sent");
      }
  }
  let data = JSON.stringify(payload);
  xhr.send(data);
}

request(endpoint, data_to_send);
