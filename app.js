let getweather=document.getElementById('getweather');

getweather.addEventListener('click',weather);




function weather(){
    console.log('text');
let box =document.getElementById('display');    
let temprature=document.createElement('span');
let linebreak=document.createElement('br');
temprature.appendChild(linebreak);
temprature.innerHTML='Temprature:' + weather.temprature
let longitude=document.createElement('span');
let latitude=document.createElement('span');


let city=document.getElementById('city').value;
let country=document.getElementById('country').value;

box.appendChild(temprature);
box.appendChild(longitude);
box.appendChild(latitude);


input(city,country);
}


function input(city,country){
    
    let url= "http://api.openweathermap.org/data/2.5/weather?&" + city
    + country + "&APPID=1640f6d668afb60a0a7d29014a9ae5ca";
    sendrequest(url);
}

function sendrequest(url){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    let data= JSON.parse(xhttp.responseText);
    let weather={};
    weather.humidity=data.main.humidity;
    weather.temprature=data.main.temp;
    weather.descript=data.weather.description;
    }
    }
xhttp.open("GET", url, true);
xhttp.send();
}







