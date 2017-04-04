let getweather=document.getElementById('getweather');
getweather.addEventListener('click',(e) => {

let city=document.getElementById('city').value;
let country=document.getElementById('country').value;
let icon=document.createElement('img');
icon.setAttribute('src','img/codes/');
let  box=document.getElementById('display');    
let temprature=document.createElement('span');
temprature.style.display='block';
box.appendChild(temprature); 
let description=document.createElement('span');
description.style.display='block';
box.appendChild(description); 
box.appendChild(icon);
let url= "http://api.openweathermap.org/data/2.5/weather?q=" + city + ','
    + country + "&appid=1640f6d668afb60a0a7d29014a9ae5ca" + "&units=metric";


 let xhttp = new XMLHttpRequest();
 xhttp.open("GET",url,true);
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    let data= JSON.parse(xhttp.responseText);
   temprature.innerHTML="Temprature:" + data.main.temp;
   description.innerHTML="Description:" + data.weather.main;
   icon.src="img/codes/" + data.weather[0].id + ".png";
    };
   }
    xhttp.send();  



e.preventDefault()
})




