let getweather=document.getElementById('getweather');

getweather.addEventListener('click',(e) =>{
    
    show(weather);
    
    e.preventDefault();
});
// let city;
// let country;
// let temprature;
// let linebreak;
// let box;
function show(weather){
 let    city=document.getElementById('city').value;
let country=document.getElementById('country').value;

let url="api.openweathermap.org/data/2.5/weather?" + city + ','
    + country + "&APPID=1640f6d668afb60a0a7d29014a9ae5ca";
    


    
     let   box=document.getElementById('display');    
let temprature=document.createElement('span');

temprature.style.display='block';
box.appendChild(temprature); 
let description=document.createElement('span');
description.style.display='block';
box.appendChild(description);
let longitude=document.createElement('span');
longitude.style.display='block';
let latitude=document.createElement('span')
latitude.style.display='block';
let image=document.createElement('img')
image.style.display='block'
    temprature.innerHTML="Temprature:" + weather.temprature;
    description.innerHTML="Description:" + weather.descript;
    image.src=weather.icon + '.png';
    sendrequest(url);
    
}

function sendrequest(url){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    let data= JSON.parse(xhttp.responseText);
    let weather={};
    weather.temprature= k2c(data.main.temp);
    weather.descript=data.weather.description;
    weather.icon=data.weather[0].id;
    }
    }
xhttp.open("GET", url, true);
xhttp.send();
}



function k2c(k){
    
    return Math.round(k-273.15);
}


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
   
}

function showPosition(position){
    updatebygeo(latitude,longitude)
}

updatebygeo(lat,long){
    let    city=document.getElementById('city').value;
let country=document.getElementById('country').value;
    sendrequest(url)
    let url="https://api.opencagedata.com/geocode/v1/json?q=" + city +
    ',' + country + &key=33d73595805f1fcb35c1d6be39006442;
    
}





