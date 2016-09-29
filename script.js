xhr = new XMLHttpRequest();
var url = "http://challenge.code2040.org/api/register";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () { 
    if (xhr.readyState == 4 && xhr.status == 200) {
        // var json = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        console.log("sent");
    }
}
var data = JSON.stringify({
  "token": "0217347fbdb52f16ea562bd939c1620a",
  "github": "https://github.com/ArtBears/code2040app"
});
xhr.send(data);